function print(t){
	if (t == '') {
		document.write('<br/><hr/>')
	} 
	else{
		document.write('<p>' + t + '</p>')
	};
	
	console.log(t);
}
// Problem 1. Increase array members
// =================================
// Write a script that allocates array of 20 integers and initializes 
// each element by its index multiplied by 5.
// Print the obtained array on the console.
// ==================================================================
print('');
print('Problem 1. Increase array members');
var array = [];
for (var i = 0; i < 20; i++) {
	array[i] = i*5;
};

print('Array elements: ' + array.join(', '));

// Problem 2. Lexicographically comparison
// =======================================
// Write a script that compares two char arrays lexicographically (letter by letter).
// ==================================================================================
print('');
print('Problem 2. Lexicographically comparison');

function CompareLexicographically(a, b){
	if (a == b) {return a + ' = ' + b};
	if (a < b) {return a + ' < ' + b};
	if (a > b) {return a + ' > ' + b};
}

var firstArray = ['a', 'g', 'm', 'q', '#', 'm'];
var secondArray = ['f', 'b', 'r', 'd', 'e', 'm'];
var smallerLength = Math.min(firstArray.length, secondArray.length);

print('First array:  ' + firstArray.join(', '));
print('Second array: ' + secondArray.join(', '));

for (var i = 0; i < smallerLength; i++) {
	print(CompareLexicographically(firstArray[i], secondArray[i]));
}

// Problem 3. Maximal sequence
// ===========================
// Write a script that finds the maximal sequence of equal elements in an array.
// =============================================================================
print('');
print('Problem 3. Maximal sequence')
var input = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
var maxSequence = [];
var currentSequence = [];

function updateMaxSequence(){
		if (currentSequence.length > maxSequence.length){
			maxSequence = currentSequence;
		};
}

for(var i = 0; i < input.length; i++){
	if (input[i] == currentSequence[0]) {
		currentSequence.push(input[i]);
	}
	else{
		updateMaxSequence();
		currentSequence = [];
		currentSequence[0] = input[i];
	};
}
updateMaxSequence();
print('Input: ' + input.join(', '));
print('Longest sequence: ' + maxSequence.join(', '));
