import apply from './index.js'
import { inspect } from 'util'

const rules = {
	// Layer
	L: [
		{ layerName: 'layer 0', layerMeta: { a: 1, b: 2 }, $: 1, rects: [[1, 1]] },
		{ layerType: 'metal', layerName: 'layer 1', layerMeta: { a: 3, b: 4 } },
		{ layerName: 'layer 2', layerMeta: { a: 5, b: 6 } },
		{ layerName: 'layer 3', layerMeta: { a: 7, b: 8, color: 'red' } },
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
		{ $L: [0, 1], rects: [[2, 2]] },
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
		topLayer: { $L: 1 }, // topLayer: { type: 'metal' }
		cutLayer: { $L: 2 },
		bottomLayer: { $L: 3 },
		$D: 1,
		$V: [0, 2],
		layer: { $L: 0 },
		$hello: ['wor', 'ld'],
		$HELLO: 'WORLD',
	},
	{
		type: 'track',
		X: 111,
		Y: 222,
		rects: [[0, 0]],
		DO: 333,
		$L: 0,
		$V: 0
	}
]

const handlers = {
	rects(prev, val) {
		val = Array.isArray(val[0]) ? val : [val]
		if (prev) {
			return Array.isArray(prev?.[0])
				? [...prev, ...val]
				: [prev, ...val]
		} else {
			return val
		}
	}
}

console.log('\n>> RULES (REFERENCE) '.padEnd(process.stdout.columns, '>'))

console.log(inspect(
	rules,
	{ showHidden: false, depth: null, colors: true }
))

console.log('\n>> INSTANCES '.padEnd(process.stdout.columns, '>'))

console.log(inspect(
	instances,
	{ showHidden: false, depth: null, colors: true }
))


console.log('\n>> RESULT '.padEnd(process.stdout.columns, '>'))

console.log(inspect(
	apply(instances, rules, handlers),
	{ showHidden: false, depth: null, colors: true }
))