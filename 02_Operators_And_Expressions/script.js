//Problem 1. Odd or Even
console.log('Problem 1. Odd or Even');
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

//Problem 2. Divisible by 7 and 5
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

//Problem 3. Rectangle area
function rectangleArea(width, height) {
    return width * height;
}

function printArea(width, height) {
    var area = rectangleArea(width, height);
    console.log('width = ' + width + ' height = ' + height + '  >>>>  Area = ' + area);
}

console.log('');
console.log('Problem 3. Rectangle area');
printArea(3, 4);
printArea(2.5, 3);
printArea(5, 5);

//Problem 4. Third digit
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
    console.log(number + '  >>>>>  ' + isThirdDigit7(number));
}

PrintResult(17005);
PrintResult(150);
PrintResult(-17005);
PrintResult(16544);

//Problem 5. Third bit
console.log('');
console.log('Problem 5. Third bit');

function ThirdBit(number) {
    return (number >> 3) & 1;
}

function PrintResult(number) {
    console.log('The third bit of ' + number + ' is ' + ThirdBit(number));
}

PrintResult(5);
PrintResult(8);
PrintResult(0);
PrintResult(15);
PrintResult(5343);
PrintResult(62241);

//Problem 6. Point in Circl
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

//Problem 7. Is prime
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
        console.log('Number ' + number + ' is a prime number.');
    }
    else {
        console.log('Number ' + number + ' is not a prime number.');
    }
}

PrintResult(5);
PrintResult(7);
PrintResult(51);
PrintResult(97);
PrintResult(100);
PrintResult(-3);
PrintResult(-50);

//Problem 8. Trapezoid area
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


