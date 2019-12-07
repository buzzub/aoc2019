const modulesList: number[] = [
	60566,
	53003,
	132271,
	130557,
	109138,
	64818,
	123247,
	148493,
	98275,
	67155,
	132365,
	133146,
	88023,
	92978,
	122790,
	84429,
	93421,
	76236,
	104387,
	135953,
	131379,
	125949,
	133614,
	94647,
	64289,
	87972,
	97331,
	132327,
	53913,
	79676,
	143110,
	79269,
	52366,
	62793,
	69437,
	97749,
	83596,
	147597,
	115883,
	82062,
	63800,
	61521,
	139314,
	127619,
	85790,
	132960,
	141289,
	86146,
	146104,
	128708,
	133054,
	116777,
	128402,
	85043,
	117344,
	107915,
	108669,
	108304,
	105300,
	75186,
	111352,
	112936,
	117177,
	93812,
	97737,
	61835,
	77529,
	145406,
	93489,
	75642,
	69806,
	109845,
	79133,
	60950,
	67797,
	111806,
	50597,
	50481,
	88338,
	102136,
	65377,
	55982,
	82754,
	68901,
	89232,
	63118,
	95534,
	98264,
	147706,
	80050,
	104953,
	146758,
	122884,
	122024,
	129236,
	113818,
	58099,
	134318,
	136312,
	75124,
];

let modulesListTest: number[] = [100756];

export const calcFuel = (fuel: number) => {
	let calculatedFuel: number = Math.floor(fuel / 3) - 2;
	return calculatedFuel > 0 ? calculatedFuel : 0;
}

export const sumFuel = (modules: number[]) => {
	let totalFuel: number = 0;

	for (let i = 0; i < modules.length; i++) {
		let fuel: number = modules[i];
		while (fuel > 0) {
			fuel = calcFuel(fuel);
			totalFuel = totalFuel + fuel;	
		}
	}	

	console.log(totalFuel);
}

sumFuel(modulesListTest);

sumFuel(modulesList);







