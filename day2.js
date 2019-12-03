array = [
	1,
	12,
	2,
	3,
	1,
	1,
	2,
	3,
	1,
	3,
	4,
	3,
	1,
	5,
	0,
	3,
	2,
	13,
	1,
	19,
	1,
	19,
	6,
	23,
	1,
	23,
	6,
	27,
	1,
	13,
	27,
	31,
	2,
	13,
	31,
	35,
	1,
	5,
	35,
	39,
	2,
	39,
	13,
	43,
	1,
	10,
	43,
	47,
	2,
	13,
	47,
	51,
	1,
	6,
	51,
	55,
	2,
	55,
	13,
	59,
	1,
	59,
	10,
	63,
	1,
	63,
	10,
	67,
	2,
	10,
	67,
	71,
	1,
	6,
	71,
	75,
	1,
	10,
	75,
	79,
	1,
	79,
	9,
	83,
	2,
	83,
	6,
	87,
	2,
	87,
	9,
	91,
	1,
	5,
	91,
	95,
	1,
	6,
	95,
	99,
	1,
	99,
	9,
	103,
	2,
	10,
	103,
	107,
	1,
	107,
	6,
	111,
	2,
	9,
	111,
	115,
	1,
	5,
	115,
	119,
	1,
	10,
	119,
	123,
	1,
	2,
	123,
	127,
	1,
	127,
	6,
	0,
	99,
	2,
	14,
	0,
	0
];

intcode = array => {
	for (var i = 0; i < array.length; i = i + 4) {
		const firstNumber = array[i];
		const first = array[i + 1];
		const second = array[i + 2];
		const third = array[i + 3];

		if (firstNumber === 1) {
			array[third] = array[first] + array[second];
		} else if (firstNumber === 2) {
			array[third] = array[first] * array[second];
		} else if (firstNumber === 99) {
			array[0];
		}
	}
	return array[0];
};

// Part 2

betterArray = (n, v) => {
	const adjustedArray = array.map(x => x);
	adjustedArray[1] = n;
	adjustedArray[2] = v;
	return adjustedArray;
};

gravityAssist = () => {
	for (let n = 0; n < 100; n++) {
		for (let v = 0; v < 100; v++) {
			if (intcode(betterArray(n, v)) === 19690720) {
				console.log(100 * n + v);
				break;
			}
		}
	}
};

gravityAssist();
