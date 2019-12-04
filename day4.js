// Part 1
// Six didget number that has 2 adjacent numbers that match
// Going left to right the numbers never decrease

// 138241 - 674035

venusFuel = () => {
	counter = 0;
	for (var i = 138241; i < 674035; i++) {
		var numberArray = i.toString().split('');
		matchingAdjacentNumber(numberArray);
	}
	return counter;
};

matchingAdjacentNumber = array => {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === array[i + 1]) {
			if (neverDecrease(array) === true) {
				return counter++;
			}
		}
	}
	return false;
};

neverDecrease = array => {
	for (var i = 0; i < array.length - 1; i++) {
		const first = array[i];
		const second = array[i + 1];
		if (first > second) {
			return false;
		}
	}
	return true;
};

console.log(venusFuel());
