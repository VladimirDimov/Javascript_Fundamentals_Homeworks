//  Problem 1. Odd or Even
//  Write an expression that checks if given integer is odd or even.
//  ================================================================
console.log('Problem 1. Odd or Even');
writeLine('Problem 1. Odd or Even');
function isEven(number) {
	if (number % 2 == 0) {
		return 'The number ' + number + ' is even.';
	}
	else {
		return 'The number ' + number + ' is odd.';
	};
}

for (var i = 0; i < 10; i++) {
	console.log(isEven(i));
};

//  Problem 2. Divisible by 7 and 5
//  Write a boolean expression that checks for given integer if it can 
//  be divided (without remainder) by 7 and 5 in the same time.
//  ===================================================================
console.log('');
console.log('Problem 2. Divisible by 7 and 5');
function isDevisibleBy5and7(number) {
	return number % 35 == 0 ?
	'The number ' + number + ' is devisible by 5 and 7 at the same time' :
	'The number ' + number + ' is not devisible by 5 and 7 at the same time';
}

for (var i = 7; i < 100; i += 7) {
	console.log(isDevisibleBy5and7(i));
}

//  Problem 3. Rectangle area
//  Write an expression that calculates rectangle’s area 
//  by given width and height.
//  ====================================================
function rectangleArea(width, height) {
	return width * height;
}

function printArea(width, height) {
	var area = rectangleArea(width, height);
	return 'width = ' + width + ' height = ' + height + '  >>>>  Area = ' + area;
}

console.log('');
console.log('Problem 3. Rectangle area');
console.log(printArea(3, 4));
console.log(printArea(2.5, 3));
console.log(printArea(5, 5));

//  Problem 4. Third digit
//  Write an expression that checks for given integer if its 
//  third digit (right-to-left) is 7.
//  ========================================================
console.log('');
console.log('Problem 4. Third digit');

function isThirdDigit7(number) {
	if (number < 1000 && number > -1000) {
		return 'The number is too short!';
	};
	var thirdDigit = Math.abs((number / 1000) % 10 | 0);
	if (thirdDigit == 7) {
		return 'The third digit is 7!';
	}
	else {
		return 'The third digit is NOT 7!'
	};
}

function PrintResult(number) {
	return number + '  >>>>>  ' + isThirdDigit7(number);
}

console.log(PrintResult(17005));
console.log(PrintResult(150));
console.log(PrintResult(-17005));
console.log(PrintResult(16544));

//  Problem 5. Third bit
//  Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
//  The bits are counted from right to left, starting from bit #0.
//  The result of the expression should be either 1 or 0.
//  ==========================================================================================
console.log('');
console.log('Problem 5. Third bit');

function ThirdBit(number) {
	return (number >> 3) & 1;
}

function PrintResult(number) {
	return 'The third bit of ' + number + ' is ' + ThirdBit(number);
}

console.log(PrintResult(5));
console.log(PrintResult(8));
console.log(PrintResult(0));
console.log(PrintResult(15));
console.log(PrintResult(5343));
console.log(PrintResult(62241));

//  Problem 6. Point in Circle
//  Write an expression that checks if given point P(x, y) is within a circle K(O, 5).
//  ==================================================================================
console.log('');
console.log('Problem 6. Point in Circle');

function IsPointInside(x, y) {
	var circle = { radius: 5, x: 0, y: 0 };
	if (Math.abs(y) <= Math.sqrt(circle.radius * circle.radius - x * x)) {
		return true;
	}
	else {
		return false;
	}
}

var points = [
	{ x: 0, y: 1 },
	{ x: -2, y: 0 },
	{ x: -1, y: 2 },
	{ x: 1.5, y: -1 },
	{ x: 5, y: 5 }
];

for (var i = 0; i < points.length; i++) {

	if (IsPointInside(points[i].x, points[i].y)) {
		console.log('Point [' + points[i].x + ', ' + points[i].y + '] is inside the circle.');
	}
	else {
		console.log('Point [' + points[i].x + ', ' + points[i].y + '] is outside the circle.');
	}
}

//  Problem 7. Is prime
//  Write an expression that checks if given positive integer number n (n ≤ 100) is prime.
//  ======================================================================================
console.log('');
console.log('Problem 7. Is prime');

function IsPrime(number) {
	for (var i = 2; i < Math.sqrt(Math.abs(number)) ; i++) {
		if (number % i == 0) {
			return false;
		}
	}
	return true;
}

function PrintResult(number) {
	if (IsPrime(number)) {
		return 'Number ' + number + ' is a prime number.';
	}
	else {
		return 'Number ' + number + ' is not a prime number.';
	}
}

console.log(PrintResult(5));
console.log(PrintResult(7));
console.log(PrintResult(51));
console.log(PrintResult(97));
console.log(PrintResult(100));
console.log(PrintResult(-3));
console.log(PrintResult(-50));

//  Problem 8. Trapezoid area
//  Write an expression that calculates trapezoid's area by given sides a and b and height h.
//  =========================================================================================
console.log('');
console.log('Problem 8. Trapezoid area');

function Area(a, b, h) {
	return (a + b) * h / 2;
}

function round(value, decimals) {
	return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

console.log('a = 5  b = 7  h = 12  >>>>>  A = ' + round(Area(5, 7, 12), 7));
console.log('a = 2  b = 1  h = 33  >>>>>  A = ' + round(Area(2, 1, 33), 7));
console.log('a = 8.5  b = 4.3  h = 2.7  >>>>>  A = ' + round(Area(8.5, 4.3, 2.7), 7));
console.log('a = 100  b = 200  h = 300  >>>>>  A = ' + round(Area(100, 200, 300), 7));
console.log('a = 0.222  b = 0.333  h = 0.555  >>>>>  A = ' + round(Area(0.222, 0.333, 0.555), 7));

//  Problem 9. Point in Circle and outside Rectangle
//  Write an expression that checks for given point P(x, y) if it is 
//  within the circle K( (1,1), 3) and out of the rectangle 
//  R(top = 1, left = -1, width = 6, height = 2).
//  ================================================================
console.log('');
console.log('Problem 9. Point in Circle and outside Rectangle');

function IsInRectangle(x, y) {
	if (x >= -1 && x <= 5 && y <= 1 && y >= -1) {
		return true;
	}
	else {
		return false;
	}
}

function IsInCircle(x, y) {
	var radius = 3;
	var xTransformed = x - 1;
	var yTransformed = y - 1;

	if (Math.abs(xTransformed) > radius || Math.abs(yTransformed)) {
		return false;
	}

	if (Math.abs(Math.abs(y) <= Math.sqrt(radius * radius - xTransformed * xTransformed))) {
		return true;
	}
}

function PrintResult(x, y) {
	if (IsInRectangle(x, y) && IsInRectangle(x, y)) {
		return 'The point [' + x + ', ' + y + '] is inside the figures';
	}
	else {
		return 'The point [' + x + ', ' + y + '] is NOT inside the figures';
	}
}

var points = [
{ x: 1, y: 2 },
{ x: 2.5, y: 2 },
{ x: 0, y: 1 },
{ x: 2.5, y: 1 },
{ x: 2, y: 0 },
{ x: 4, y: 0 },
{ x: 2.5, y: 1.5 },
{ x: 2, y: 1.5 },
{ x: 1, y: 2.5 },
{ x: -100, y: -100 }
]

for (var i = 0; i < points.length; i++) {
	var curX = points[i].x;
	var curY = points[i].y;

	console.log(PrintResult(curX, curY));
}