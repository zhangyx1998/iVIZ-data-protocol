/**
 * Apply references for a given object
 * @param {{
 * 	type: string,
 * 	pos: [number, number],
 * 	layer?: number,
 * 	...meta
 * }[]} instances 
 * @param {*} rules 
 */
export default function apply(instances, rules) {
	return instances.map(el => map(el, instances, rules))
}

function map(instance, currentScope, fullScope) {
	if (typeof instance !== 'object' || instance === null) {
		throw new Error(`Invalid instance ${instance}`)
	}
	const entries = []
	for (const [key, val] of Object.entries(instance)) {
		if (!key.startsWith('$')) {
			if (typeof val !== 'object' || val === null)
				entries.push([key, val])
			else
				entries.push([key, map(val, currentScope, fullScope)])
			continue;
		}
		// Inject reference
		const
			scopeName = key.slice(1),
			scope = scopeName === ''
				? currentScope
				: fullScope?.[scopeName],
			indexList = [val].flat(Infinity)
		if (typeof scope !== 'object' || scope === null) {
			throw new Error(
				scopeName === ''
					? 'Current scope is empty'
					: `Scope ${scopeName} dose not exist`
			)
		}
		// Inject scope entries
		for (const index of indexList) {
			if (!(index in scope)) {
				throw new Error(
					scopeName === ''
						? `Index ${index} dose not exist in current scope`
						: `Index ${index} dose not exist in scope "${scopeName}"`
				)
			}
			entries.push(...Object.entries(
				map(scope[index], scope, fullScope)
			))
		}
	}
	return Object.fromEntries(entries)
}
