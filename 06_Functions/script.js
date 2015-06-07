// Problem 1. English digit
// ========================
// Write a function that returns the last digit of given integer as an English word.
// =================================================================================
print('');
print('Problem 1. English digit', 'taskTitle');
var numbers = [512, 1024, 12309];
print('Input: ' + numbers.join(', '), 'input')

function LastDigitName(number) {
	var lastDigit = number % 10;
	switch(lastDigit){
		case 0:
		return 'zero';
		case 1:
		return 'one';
		case 2:
		return 'two';
		case 3:
		return 'three';
		case 4:
		return 'four';
		case 5:
		return 'five';
		case 6:
		return 'six';
		case 7:
		return 'seven';
		case 8:
		return 'eight';
		case 9:
		return 'nine';
		default:		
		return 'Invalid Number';
	}
}

for (var i in numbers) {
	print('Number: ' + numbers[i] + '  Last digit: ' + LastDigitName(numbers[i]), 'output');
};

// Problem 2. Reverse number
// =========================
// Write a function that reverses the digits of given decimal number.
// ==================================================================
print('');
print('Problem 2. Reverse number', 'taskTitle');

var numbers = [123, 256, 123.45];
print('Input: ' + numbers.join(', '), 'input');

function ReverseNumber(number){
	var numberAsString = number + '';
	var reversedNumber = '';
	for (var i = 0; i < numberAsString.length; i++) {
		reversedNumber = numberAsString[i] + reversedNumber;
	};

	return Number(reversedNumber);
}

for(var i in numbers){
	print('Number: ' + numbers[i] + '  Reversed: ' + ReverseNumber(numbers[i]), 'output');
}

// Problem 3. Occurrences of word
// ==============================
// Write a function that finds all the occurrences of word in a text.
// The search can be case sensitive or case insensitive.
// Use function overloading.
// ==================================================================
print('');
print('Problem 3. Occurrences of word', 'taskTitle');
var myText = 'Pesho, gosho, pesho and pEsho (Pesho).'
print('Text: ' + myText, 'input');

function FindOccurences(word, isCaseSensitive){	
	var caseSensitive = isCaseSensitive || false;// Faking function overloading
	var separators = {};
	separators['1'] = ' ';
	separators['2'] = '(';	
		var allWords = myText.split(/\s+|,|\(|\)|\?|\.|\!/);
		var counter = 0;
		switch(caseSensitive){
			case true:
			for (var i = 0; i < allWords.length; i++) {
				if (allWords[i] === word) {counter++};
			};
			break;
			case false:
			for (var i = 0; i < allWords.length; i++) {
				if (allWords[i].toLowerCase() === word.toLowerCase()) {counter++};
			};
			break;
			default:
			break;
		}
		return counter;
	}

	print('Find "Pesho" with case sensitive: ' + FindOccurences('Pesho', true) + ' times', 'output');
	print('Find "Pesho" with case insensitive: ' + FindOccurences('Pesho') + ' times', 'output');

// Problem 4. Number of elements
// =============================
// Write a function to count the number of div elements on the web page
// ====================================================================
print('');
print('Problem 4. Number of elements', 'taskTitle');

function CountElements(type){
	var counter = 0;
	var allElements = document.getElementsByTagName('*');

	for (var i = 0; i < allElements.length; i++) {
		if (allElements[i].tagName.toLowerCase() == type.toLowerCase()) {counter++};
	};

	return counter;
}

print('&lt;Div&gt; elements: ' + CountElements('div'), 'output');
print('&lt;html&gt; elements: ' + CountElements('html'), 'output');
print('&lt;p&gt; elements: ' + CountElements('p'), 'output');

// Problem 5. Appearance count
// ===========================
// Write a function that counts how many times given number appears in given array.
// Write a test function to check if the function is working correctly.
// ================================================================================
print('');
print('Problem 5. Appearance count', 'taskTitle');

function CountAppearances(array, number){
	var counter = 0;

	for(var i in array){
		if (array[i] == number) {
			counter += 1;
		};
	}

	return counter;
}

var myArray = [1,2,3,1,4,5,6,5,1,7,1,10];
print('Array: ' + myArray.join(', '), 'input');
print('The number 1 appears ' + CountAppearances(myArray, 1) + ' times.', 'output');
print('The number 5 appears ' + CountAppearances(myArray, 5) + ' times.', 'output');

// Problem 6. Larger than neighbours
// =================================
// Write a function that checks if the element at given 
// position in given array of integers is bigger than its 
// two neighbours (when such exist).
// ======================================================
print('');
print('Problem 6. Larger than neighbours', 'taskTitle');

function IsLargerThanNeighbours(array, index){
	if (index > 0 && index < array.length - 1) {
		if (array[index - 1] && array[index +1]) {
			if (array[index] > array[index - 1] && array[index] > array[index +1]) {
				return true;
			};
		};		
	}

	return false;
}

var input = [1, 2, 5, 4, 3, 1, 2, 5, 6, 10];
print('Array: ' + input.join(', '), 'input');

function PrintResult(array, index){
	var result = 'Element at position ' + index + ' (element = ' + array[index] + ') ';
	if (IsLargerThanNeighbours(array, index)) {
		result += 'is larger than it\'s neighbours.'
	}
	else{
		result += 'is not larger than it\'s neighbours.'
	};

	print(result, 'output');
}

PrintResult(input, 2);
PrintResult(input, 3);

// Problem 7. First larger than neighbours
// =======================================
// Write a function that returns the index of the first element in array 
// that is larger than its neighbours or -1, if there’s no such element.
// Use the function from the previous exercise.
// ======================================================================
print('');
print('Problem 7. First larger than neighbours', 'taskTitle');

function FirstLargerThanNeighbours(array){
	var defaultValue = -1;
	for (var i = 0; i < array.length; i++) {
		if (IsLargerThanNeighbours(array, i)) {
			return i;
		};
	};

	return defaultValue;
}

input_1 = [1, 2, 3, 4, 5, 6, 7, 3];
print('Array: ' + input_1.join(', '), 'input');
print('First larger than it\'s neighbours: index ' + FirstLargerThanNeighbours(input_1), 'output');

input_2 = [1,2,3,4,5,6,7];
print('Array: ' + input_2.join(', '), 'input');
print('First larger than it\'s neighbours: index ' + FirstLargerThanNeighbours(input_2), 'output');














