// Part One

// Each module wieght
// Divided by 3
// Rounded down
// Subtracted 2

const modulesWeight = [
	126918,
	61055,
	127240,
	80396,
	81162,
	51562,
	65881,
	103690,
	60737,
	130287,
	135856,
	116201,
	111257,
	56821,
	140446,
	79474,
	53915,
	117607,
	90340,
	119441,
	104310,
	54878,
	145597,
	63672,
	120426,
	117274,
	145815,
	98928,
	112061,
	61091,
	59853,
	92848,
	57280,
	111191,
	137234,
	51435,
	98024,
	118481,
	70074,
	52657,
	82087,
	90807,
	120340,
	92461,
	95208,
	91772,
	146344,
	54019,
	80841,
	89674,
	83631,
	103716,
	79867,
	140322,
	128222,
	82513,
	74542,
	123335,
	109266,
	91775,
	84558,
	143633,
	68537,
	125613,
	115249,
	106722,
	126196,
	123520,
	83653,
	78161,
	66515,
	67681,
	64915,
	120920,
	129749,
	128321,
	84940,
	147447,
	123313,
	130979,
	93585,
	130943,
	138492,
	134339,
	52050,
	148859,
	69934,
	132482,
	57521,
	114065,
	121381,
	136906,
	64219,
	119773,
	149996,
	120905,
	82315,
	144288,
	56069,
	80620
];

FuelNeeded = () => {
	total = 0;
	modulesWeight.map(module => {
		total = Math.floor(module / 3) - 2 + total;
	});
	return total;
};

console.log(FuelNeeded());

// Part Two

// The fuel needs fuel
// Run the same equation before but adding in the fuel weight for each module

fuelArray = [];

totalFuel = () => {
	total = 0;
	modulesWeight.map(module => {
		const fuelWeight = Math.floor(module / 3) - 2;
		fuelArray.push(fuelWeight);
		fuelForFuel(fuelWeight);
	});
	return console.log(total);
};

fuelForFuel = fuel => {
	if (fuel >= 2) {
		const fuelWeight = Math.floor(fuel / 3) - 2;
		if (fuelWeight >= 0) {
			fuelArray.push(fuelWeight);
		}
		return fuelForFuel(fuelWeight);
	}
	return fuelPerModule();
};

fuelPerModule = () => {
	fuelArray.map(fuel => {
		total = fuel + total;
	});
	return (fuelArray = []);
};

totalFuel();
