export default {
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
		{ $L: [0, 1], rects: [[2, 2, 3, 3]] },
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
