import apply from './index.js'

const rules = {
	// Layer
	L: [
		{ layerName: 'layer 0', layerMeta: { a: 1, b: 2 }, $: 1 },
		{ layerName: 'layer 1', layerMeta: { a: 3, b: 4 } },
		{ layerName: 'layer 2', layerMeta: { a: 5, b: 6 } },
		{ layerName: 'layer 3', layerMeta: { a: 7, b: 8 } },
	],
	// Shorthand for 'direction'
	D: [
		{ direction: 'N' },
		{ direction: 'S' },
		{ direction: 'W' },
		{ direction: 'E' },
		{ direction: 'FN' },
		{ direction: 'FS' },
	],
	// via
	V: [
		{ $L: [0, 1] },
		{ $L: 1 },
		{ $L: 2 },
	],
	// Demo
	hello: {
		wor: { hello: 'hello' },
		ld: { world: 'world' }
	},
	HELLO: {
		WORLD: { HELLO: 666 }
	}
}

const instances = [
	{
		type: 'via',
		pos: [100, 200],
		$D: 1,
		$V: [0, 2],
		$L: 0,
		$hello: ['wor', 'ld'],
		$HELLO: 'WORLD',
	}
]

console.log(apply(instances, rules))