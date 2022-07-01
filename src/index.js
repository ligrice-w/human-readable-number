module.exports = function toReadable(number) {
	const uniqueValues = {
		0: "zero",
		1: "one",
		2: "two",
		3: "three",
		4: "four",
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
		10: "ten",
		11: "eleven",
		12: "twelve",
		13: "thirteen",
		14: "fourteen",
		15: "fifteen",
		16: "sixteen",
		17: "seventeen",
		18: "eighteen",
		19: "nineteen",
		20: "twenty",
		30: "thirty",
		40: "forty",
		50: "fifty",
		60: "sixty",
		70: "seventy",
		80: "eighty",
		90: "ninety",
		100: "hundred",
	};

	if (number >= 0 && number <= 20) {
		return uniqueValues[number];
	} else if (number > 20 && number < 100) {
		const ones = number % 10;
		const tens = number - (number % 10);
		if (number % 10 !== 0) {
			return `${uniqueValues[tens]} ${uniqueValues[ones]}`;
		} else {
			return uniqueValues[tens];
		}
	} else if (number >= 100) {
		const ones = number % 10;
		const onesAndTens = number % 100;
		const tens = (number % 100) - (number % 10);
		const hundreds = (number - (number % 100)) / 100;
		if (ones === 0 && tens === 0) {
			return `${uniqueValues[hundreds]} ${uniqueValues[100]}`;
		} else if (ones === 0 && tens !== 0) {
			return `${uniqueValues[hundreds]} ${uniqueValues[100]} ${uniqueValues[tens]}`;
		} else if (ones !== 0 && tens === 0) {
			return `${uniqueValues[hundreds]} ${uniqueValues[100]} ${uniqueValues[ones]}`;
		} else if (ones !== 0 && tens === 10) {
			return `${uniqueValues[hundreds]} ${uniqueValues[100]} ${uniqueValues[onesAndTens]}`;
		} else {
			return `${uniqueValues[hundreds]} ${uniqueValues[100]} ${uniqueValues[tens]} ${uniqueValues[ones]}`;
		}
	}
};
