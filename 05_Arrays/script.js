// Problem 1. Increase array members
// =================================
// Write a script that allocates array of 20 integers and initializes 
// each element by its index multiplied by 5.
// Print the obtained array on the console.
// ==================================================================
function task1(){
	print('');
	print('Problem 1. Increase array members', 'taskTitle');
	var array = [];
	for (var i = 0; i < 20; i++) {
		array[i] = i * 5;
	};

	print('Array elements: ' + array.join(', '), 'output');
}

// Problem 2. Lexicographically comparison
// =======================================
// Write a script that compares two char arrays lexicographically (letter by letter).
// ==================================================================================
function task2(){
	print('');
	print('Problem 2. Lexicographically comparison', 'taskTitle');

	function CompareLexicographically(a, b) {
		if (a == b) { return a + ' = ' + b };
		if (a < b) { return a + ' < ' + b };
		if (a > b) { return a + ' > ' + b };
	}

	var firstArray = 'agmkq#sz';
	var secondArray = 'amgqweaaaaaa';
	var smallerLength = Math.min(firstArray.length, secondArray.length);

	print('First array:' +  firstArray, 'input');
	print('Second array: ' + secondArray, 'input');

	for (var i = 0; i < smallerLength; i++) {
		print(CompareLexicographically(firstArray[i], secondArray[i]), 'output');
	}
}
// Problem 3. Maximal sequence
// ===========================
// Write a script that finds the maximal sequence of equal elements in an array.
// =============================================================================
function task3(){
	print('');
	print('Problem 3. Maximal sequence', 'taskTitle')
	var input = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
	var maxSequence = [];
	var currentSequence = [];

	function updateMaxSequence() {
		if (currentSequence.length > maxSequence.length) {
			maxSequence = currentSequence;
		};
	}

	for (var i = 0; i < input.length; i++) {
		if (input[i] == currentSequence[0]) {
			currentSequence.push(input[i]);
		}
		else {
			updateMaxSequence();
			currentSequence = [];
			currentSequence[0] = input[i];
		};
	}
	updateMaxSequence();
	print('Input: ' + input.join(', '), 'input');
	print('Longest sequence: ' + maxSequence.join(', '), 'output');
}

// Problem 4. Maximal increasing sequence
// ======================================
// Write a script that finds the maximal increasing sequence in an array.
// ======================================================================
function task4(){
	print('');
	print('Problem 4. Maximal increasing sequence', 'taskTitle');
	var input = [3, 2, 3, 4, 2, 2, 4];
	var maxSequence = [];
	var currentSequence = [];

	function updateMaxSequence() {
		if (currentSequence.length > maxSequence.length) {
			maxSequence = currentSequence;
		};
	}

	for (var i = 0; i < input.length; i++) {
		if (input[i] > currentSequence[currentSequence.length - 1]) {
			currentSequence.push(input[i]);
		}
		else {
			updateMaxSequence();
			currentSequence = [];
			currentSequence[0] = input[i];
		};
	}
	updateMaxSequence();
	print('Input: ' + input.join(', '), 'input');
	print('Longest increasing sequence: ' + maxSequence.join(', '), 'output');
}

// Problem 5. Selection sort
// =========================
// Sorting an array means to arrange its elements in increasing order.
// Write a script to sort an array.
// Use the selection sort algorithm: Find the smallest element, move it 
// at the first position, find the smallest from the rest, move it at the 
// second position, etc.
// ======================================================================
function task5(){
	print('');
	print('Problem 5. Selection sort', 'taskTitle');
	var input = [3, 9, 2, 5, 7, 4, 1, 6, 8, 10];
	print(input.join(', '), 'input');

	function SelectionSort(arr) {
		var size = arr.length;

		for (var i = 0; i < size; i++) {
			var currentMinValue = Number.MAX_VALUE;
			var currentMinIndex = i;

			for (var j = i; j < size; j++) {
				if (arr[j] < currentMinValue) {
					currentMinValue = arr[j];
					currentMinIndex = j;
				}
			}

			arr[currentMinIndex] = arr[i];
			arr[i] = currentMinValue;
		}

		return arr;
	}

	print('Sorted array: ' + SelectionSort(input).join(' '), 'output');
}

//Problem 6. Most frequent number
//===============================
//Write a script that finds the most frequent number in an array.
//===============================================================
function task6(){
	print('');
	print('Problem 6. Most frequent number', 'taskTitle');

	function MostFrequent(arr) {
		var dictionary = {};
		for (var i in arr) {
			if (dictionary.hasOwnProperty(arr[i])) {
				dictionary[arr[i]]++;
			}
			else {
				dictionary[arr[i]] = 1;
			}
		}

		var frequency = 0;
		var mostFrequentNumber;
		for (var prop in dictionary) {
			if (dictionary[prop] > frequency) {
				frequency = dictionary[prop];
				mostFrequentNumber = prop;
			}
		}

		return 'Most frequent number: ' + mostFrequentNumber + '  =>  ' + frequency + ' times';
	}

	var myArray = [1, 2, 3, 1, 5, 1, 5, 1, 2, 1, 5, 1, 3, 1, 1];
	print('Array: ' + myArray.join(', '), 'input');
	print(MostFrequent(myArray), 'output');
}

// Problem 7. Binary search
// ========================
// Write a script that finds the index of given element in a sorted array 
// of integers by using the binary search algorithm.
// ======================================================================
function task7(){
	print('');
	print('Problem 7. Binary search', 'taskTitle');
	var array = [0, 2, 4, 6, 8, 10, 12, 14, 16, 20, 22];

	function FindIndex(arr, number, left, right) {
		var middle = Math.floor((left + right) / 2);

		if (number < arr[left] || number > arr[right]) {
			return 'Number not found';
		}

		if (arr[middle] > number) {
			return FindIndex(arr, number, left, middle - 1);
		}
		else if (arr[middle] < number) {
			return FindIndex(arr, number, middle + 1, right);
		}
		else if (arr[middle] == number) {
			return middle;
		}
	}
	var numberToFind = 12;
	var result = FindIndex(array, numberToFind, 0, array.length - 1);
	print('Array: ' + array.join(', '), 'input');
	print('Number: ' + numberToFind + '  Index: ' + FindIndex(array, numberToFind, 0, array.length - 1), 'output');
}

task1();
task2();
task3();
task4();
task5();
task6();
task7();