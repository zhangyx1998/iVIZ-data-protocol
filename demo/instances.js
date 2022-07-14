export default [
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
		rects: [['metal', 0, 0, 2, 2], [123, 321]],
		DO: 333,
		$L: 0,
		$V: 0
	}
]