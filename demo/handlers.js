export default {
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