//Problem 1. JavaScript literals
//Array literals
console.log('Problem 1. JavaScript literals');
var arrayLiteral = ['Gosho', 'Pesho', 'Stancho'];
console.log('Array literal: ' + arrayLiteral);
var commaInArrayLiteral = ['Gosho', , , , , , 'Pesho'];
console.log('Comma in array literal: ' + commaInArrayLiteral);
//Integer literals
var decIntLiteral = 10;    //Decimal
console.log('Decimal integer literal: ' + decIntLiteral);
var hexIntLiteral = 0xA1;   //Hexadecimal
console.log('Hexadecimal integer literal: ' + hexIntLiteral);
var octIntLiteral = 08;    //Octal
console.log('Octal integer literal: ' + octIntLiteral);

//Floating number literals
var floatLiteral = 1.5;
console.log('Floating number literal: ' + floatLiteral);

//Boolean literals
var boolLiteral = true;
console.log('Boolean literal: ' + boolLiteral);

//Object literals
var pesho =
    {
        firstName: 'Pesho',
        lastName: 'Petrov',
        age: 25
    }
console.log('Object literal: ' + pesho.firstName + ' ' + pesho.lastName + ' ' + 'Age: ' + pesho.age);

//String literal
var stringLiteral = 'Pesho';
console.log('String literal: ' + stringLiteral);


//Problem 2. Quoted text
console.log('');
console.log('Problem 2. Quoted text')
var doubleQuatedSting = '"How you doing?", Joey said.';
console.log('Double quoted string: ' + doubleQuatedSting);
var singleQuotedString = "'How you doing?', Joey said";
console.log('Single quoted string: ' + singleQuotedString);

//Problem 3. Typeof variables
console.log('');
console.log('Problem 3. Typeof variables');
console.log('Typeof(10) = ' + typeof (10));
console.log('Typeof(10.5) = ' + typeof (10.5));
console.log('Typeof(true) = ' + typeof (true));
console.log('Typeof([\'pesho\', \'gosho\']) = ' + typeof (['pesho', 'gosho']));
console.log('typeof(undefined_variable) = ' + typeof (undefined_variable));
console.log('Typeof(function()) = ' + typeof (function A() { }));

//Problem 4. Typeof null
console.log('');
console.log('Problem 4. Typeof null');
var nullable = null;
var undefinedVariable;
console.log('Type of nullable = ' + typeof (nullable));
document.write()
console.log('Type of undefined = ' + typeof (undefinedVariable));