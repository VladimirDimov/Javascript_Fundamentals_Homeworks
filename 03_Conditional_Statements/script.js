//  Problem 1. Exchange if greater
//  Write an if statement that takes two double variables a and b and exchanges
//  their values if the first one is greater than the second.
//  As a result print the values a and b, separated by a space.
//  ===========================================================================
console.log('Problem 1. Exchange if greater');

function Exchange(a, b) {
	if (a <= b) {
		return a + ' ' + b;
	} else {
		return b + ' ' + a;
	}
}

var pairs = [
[5, 2],
[3, 4],
[5.5, 4.5],
[1, -10]
];

for (var i = 0; i < pairs.length; i++) {
	console.log(pairs[i] + '   >>>>>   ' + Exchange(pairs[i][0], pairs[i][1]));
}

//  Problem 2. Multiplication Sign
//  Write a script that shows the sign (+, - or 0) of the product
//  of three real numbers, without calculating it.
//  Use a sequence of if operators.
//  ==============================================================
console.log('');
console.log('Problem 2. Multiplication Sign');

//Check if at least one number equals 0;
function MultiplicationSign(a, b, c) {
	if (a == 0 || b == 0 || c == 0) {
		return 0;
	};

	if (a < 0) {
		if (b < 0) {
			if (c < 0) {
				return '-';
			} else {
				return '+';
			};
		} else {
			if (c < 0) {
				return '+';
			} else {
				return '-';
			};
		};
	} else {
		if (b < 0) {
			if (c < 0) {
				return '+';
			} else {
				return '-';
			};
		} else {
			if (c < 0) {
				return '-';
			} else {
				return '+';
			};
		};
	};
}

var numbers = [
[5, 2, 2],
[-2, -2, 1],
[-2, 4, 3],
[0, -2.5, 4],
[-1, -0.5, -5.1]
]

for (var i = 0; i < numbers.length; i++) {
	var a = numbers[i][0];
	var b = numbers[i][1];
	var c = numbers[i][2];

	console.log(numbers[i] + '  >>>>  ' + MultiplicationSign(a, b, c));
};

//	Problem 3. The biggest of Three
// 	Write a script that finds the biggest of three numbers.
//	Use nested if statements.
console.log('');
console.log('Problem 3. The biggest of Three');

function Biggest(a, b, c) {
	if (a >= b) {
		if (a >= c) {
			return a;
		} else {
			return c;
		}
	} else {
		if (b >= c) {
			return b;
		} else {
			return c;
		}
	}
}

var numbers = [
[5, 2, 2],
[-2, -2, 1],
[-2, 4, 3],
[0, -2.5, 5],
[-0.1, -0.5, -1.1]
];

for (var i = 0; i < numbers.length; i++) {
	var a = numbers[i][0];
	var b = numbers[i][1];
	var c = numbers[i][2];
	console.log(numbers[i] + '  >>>>>  ' + Biggest(a, b, c));
};

//	Problem 4. Sort 3 numbers
// 	Sort 3 real values in descending order.
// 	Use nested if statements.
//	=======================================
console.log('');
console.log('Problem 4. Sort 3 numbers');

function Sort(a, b, c) {
	if (a >= b && a >= c) {
		if (b >= c) {
			return a + ' ' + b + ' ' + c;
		} else {
			return a + ' ' + c + ' ' + b;
		};
	} else if (b >= a && b >= c) {
		if (a >= c) {
			return b + ' ' + a + ' ' + c;
		} else {
			return b + ' ' + c + ' ' + a;
		};
	} else if (c >= a && c >= b) {
		if (a >= b) {
			return c + ' ' + a + ' ' + b;
		} else {
			return c + ' ' + b + ' ' + a;
		};
	};
}

var numbers = [
[5, 1, 2],
[-2, -2, 1],
[-2, 4, 3],
[0, -2.5, 5],
[-1.1, -0.5, -0.1],
[10, 20, 30],
[1, 1, 1]
]

for (var i = 0; i < numbers.length; i++) {
	var a = numbers[i][0];
	var b = numbers[i][1];
	var c = numbers[i][2];

	console.log(numbers[i] + '  >>>>  ' + Sort(a, b, c));
};

//	Problem 5. Digit as word
//	========================
// 	Write a script that asks for a digit (0-9), and depending on the input, 
//	shows the digit as a word (in English).
// 	Print “not a digit” in case of invalid input.
//	Use a switch statement.
//	=======================================================================
console.log('');
console.log('Problem 5. Digit as word');
function DigitAsWord(digit) {
	switch (digit) {
		case 0:
		return 'Zero';
		case 1:
		return 'One';
		case 2:
		return 'Two';
		case 3:
		return 'Three';
		case 4:
		return 'Four';
		case 5:
		return 'Five';
		case 6:
		return 'Six';
		case 7:
		return 'Seven';
		case 8:
		return 'Eight';
		case 9:
		return 'Nine';
		default:
		return 'Not a number';
	}
}

for (var i = 0; i < 10; i++) {
	console.log(i + '  >>>>>  ' + DigitAsWord(i));
};

console.log('Gosho  >>>>>  ' + DigitAsWord('Gosho'));

// Problem 6. Quadratic equation
// =============================
// Write a script that reads the coefficients a, b and c of a quadratic equation 
// ax2 + bx + c = 0 and solves it (prints its real roots).
// Calculates and prints its real roots.
// =============================================================================
console.log('');
console.log('Problem 6. Quadratic equation');
function QuadraticEquation(a, b, c){
	var discriminant = b*b -4*a*c;
	if (discriminant < 0) {
		return 'No real roots';
	};

	if (discriminant == 0){
		return -1*b/(2*a);
	} ;

	var x1 = (-1*b + Math.sqrt(discriminant))/(2*a);
	var x2 = (-1*b - Math.sqrt(discriminant))/(2*a);
	return [x1, x2];
}

var equations = [
[2, 5, -3],
[-1, 3, 0],
[-0.5, 4, -8],
[5,2,8],
[9, 12, 4]
]

for (var i = 0; i < equations.length; i++) {
	var a = equations[i][0];
	var b = equations[i][1];
	var c = equations[i][2];
	var solution = QuadraticEquation(a, b, c);
	if (solution == 'No real roots') {
		console.log(a + 'x2 + ' + b + 'x + ' + c + '  >>>>  No real roots');
	}
	else if (solution.length == 2){
		console.log(a + 'x2 + ' + b + 'x + ' + c + '  >>>>  ' + 'x1 = ' + solution[0] + ',  x2 = ' + solution[1]);
	}
	else if (typeof(solution) == 'number') {
		console.log(a + 'x2 + ' + b + 'x + ' + c + '  >>>>  ' + 'x = ' + solution);
	};
};

// Problem 7. The biggest of five numbers
// ======================================
// Write a script that finds the greatest of given 5 variables.
// Use nested if statements.
// ============================================================
console.log('');
console.log('Problem 7. The biggest of five numbers');
function Biggest(a, b, c, d, e){
	if (a >= b) {
		if (a >= c) {
			if (a >= d) {
				if (a >= e) {
					return a;
				} 
				else{
					return e;
				};
			} 
			else{
				if (d >= e) {
					return d;
				} 
				else{
					return e;
				};
			};
		} 
		else{
			if (c >= d) {
				if (c >= e) {
					return c;
				} 
				else{
					return e;
				};
			} 
			else{
				if (d >= e) {
					return d;	
				} 
				else{
					return e;
				};
			};
		};
	} 
	else{
		if (b >= c) {
			if (b >= d) {
				if (b >= e) {
					return b;
				} 
				else{
					return e;
				};
			} else{
				if (d >= e) {
					return d;
				} 
				else{
					return e;
				};
			};
		} 
		else{
			if (c >= d) {
				if (c >= e) {
					return c;
				} 
				else{
					return e;
				};
			} 
			else{
				if (d >= e) {
					return d;
				} 
				else{
					return e;
				};
			};
		};
	};
}

var numbers =[
[5, 2,	2, 4, 1],
[-2, -22, 1, 0, 0],
[-2, 4, 3, 2, 0],
[0, -2.5, 0, 5, 5],
[-3, -0.5, -1.1, -2, -0.1],
[1, 2, 3, 4, 5]
]

for (var i = 0; i < numbers.length; i++) {
	var a = numbers[i][0];
	var b = numbers[i][1];
	var c = numbers[i][2];
	var d = numbers[i][3];
	var e = numbers[i][4];

	console.log(numbers[i] + '  >>>>>  ' + Biggest(a, b, c, d, e));
};

// Problem 8. Number as words
// ==========================
// Write a script that converts a number in the range [0…999] to words, 
// corresponding to its English pronunciation.
// ====================================================================
console.log('');
console.log('Problem 8. Number as words');

function DigitAsWord(digit){
	switch(digit){
		case 0:
		return'zero';
		case 1:
		return'one';
		case 2:
		return'two';
		case 3:
		return'three';
		case 4:
		return'four';
		case 5:
		return'five';
		case 6:
		return'six';
		case 7:
		return'seven';
		case 8:
		return'eight';
		case 9:
		return'nine';
		case 10:
		return'ten';
		case 11:
		return'eleven';
		case 12:
		return'twelve';
		case 13:
		return'thirteen';
		case 14:
		return'fourteen';
		case 15:
		return'fifteen';
		case 16:
		return'sixteen';
		case 17:
		return'seventeen';
		case 18:
		return'eighteen';
		case 19:
		return'nineteen';
		default:
		return 'undefined number';
	}
}

function DigitAsWordTens(number)
{
	switch(number){
		case 2:
		return 'twenty';
		case 3:
		return 'thirty';
		case 4:
		return 'fourty';
		case 5:
		return 'fifty';
		case 6:
		return 'sixty';
		case 7:
		return 'seventy';
		case 8:
		return 'eighty';
		case 9:
		return 'ninety';		
		default:
		return 'undefined number';		
	}
}


function NumberName(number){
	if (number >= 0 && number <= 19) {
		return DigitAsWord(number);
	}
	else if (20 <= number && number <= 99) {
		var tenDigit = Math.floor(number/10);
		var oneDigit = number%10;
		var result = DigitAsWordTens(tenDigit);
		if (oneDigit != 0) {
			result += ' ' + DigitAsWord(oneDigit);
		};
		return result;
	}
	else if (100 <= number && number <= 999) {
		var houndreds = Math.floor(number/100);
		var tensAndOnes = number % 100;
		result = DigitAsWord(houndreds) + ' houndred ';
		if (tensAndOnes != 0) {
			result += 'and ' + NumberName(tensAndOnes); //Something like a recursion
		};
		return result;
	};
}

var numbers = [0, 5, 19, 35, 80, 123, 300, 'Gosho', 405, 410, 515, 555, 'Pesho'];

for (i = 0; i < numbers.length; i++) {
	var currentNumber = numbers[i];
	if (typeof(currentNumber) != typeof(10)) {
		console.log(currentNumber + '  >>>>>  ' + 'Invalid number!');
		continue;
	};
	console.log(currentNumber + '  >>>>>  ' + NumberName(currentNumber));
};