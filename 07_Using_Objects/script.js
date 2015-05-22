// Problem 1. Planar coordinates
// =============================
// Write functions for working with shapes in standard Planar coordinate system.
// Points are represented by coordinates P(X, Y)
// Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
// Calculate the distance between two points.
// Check if three segment lines can form a triangle.
// ===============================================================================================
pr('Problem 1. Planar coordinates', 'taskTitle');

function BuildPoint(x,y){
	return {
		X: x , 
		Y: y,
		toString: function (){
			return 'X=' + this.X + ' Y=' + this.Y;
		}
	};
}

function BuildLine(startPoint, endPoint){
	return {
		StartPoint: startPoint, 
		EndPoint: endPoint,
		toString: function (){
			return 'Start ' + startPoint.toString() + ' End ' + endPoint.toString();
		}
	}
}

function Distance(p1, p2){
	var xDist = Math.abs(p1.X - p2.X);
	var yDist = Math.abs(p1.Y - p2.Y);
	var distance = Math.sqrt(xDist*xDist + yDist*yDist);
	return (distance * 1000 | 0)/1000;
}

function ComparePoints(p1, p2){
	if (p1.toString() == p2.toString()) {return true};
	return false;
}

function CanFormTriangle(linesArray){
	if (linesArray.length != 3) {return 'Invalid number of lines'};
	var points = [];
	for(var line in linesArray){
		var curLine = linesArray[line]
		if (points.indexOf(curLine.StartPoint.toString()) == -1) {points.push(curLine.StartPoint.toString())};
		if (points.indexOf(curLine.EndPoint.toString()) == -1) {points.push(curLine.EndPoint.toString())};
	}
	if (points.length == 3) {
		return true;
	}
	return false;
}

var p1 = BuildPoint(0, 0),
p2 = BuildPoint(5,5),
p3 = BuildPoint(0, 0);

pr('Point 1: ' + p1.toString(), 'input');
pr('Point 2: ' + p2.toString(), 'input');
pr('Point 3: ' + p3.toString(), 'input');
pr('Test comparison: P1 == P2 >>>> ' + ComparePoints(p1, p2), 'output');
pr('Test comparison: P1 == P3 >>>> ' + ComparePoints(p1, p3), 'output');
pr('Distance from P1 to P2: ' + Distance(p1, p2), 'output');

var l1 = BuildLine(BuildPoint(0,0), BuildPoint(5,5));
var l2 = BuildLine(BuildPoint(5,5), BuildPoint(1,3));
var l3 = BuildLine(BuildPoint(1,3), BuildPoint(0,0));
var l4 = BuildLine(BuildPoint(0,-1), BuildPoint(-1,1));
pr('Line 1: ' + l1.toString(), 'input');
pr('Line 2: ' + l2.toString(), 'input');
pr('Line 3: ' + l3.toString(), 'input');
pr('Line 4: ' + l4.toString(), 'input');
pr('Lines l1, l2 and l3 can form triangle >>>>> ' + CanFormTriangle([l1, l2, l3]), 'output');
pr('Lines l1, l2 and l4 can form triangle >>>>> ' + CanFormTriangle([l1, l2, l4]), 'output');

// Problem 2. Remove elements
// ==========================
// Write a function that removes all elements with a given value.
// Attach it to the array type.
// Read about prototype and how to attach methods.
// ==============================================================
pr('');
pr('Problem 2. Remove elements', 'taskTitle');

var array = [1,2,3,4,5, 3, 5];

Array.prototype.remove = function Remove(value){
	for(var i = 0; i < this.length; i++){
		if (this[i] == value) {
			this.splice(i, 1);
			i--;
		};
	}
}

pr('Input array: ' + array.join(', '), 'input');
pr('Removing "3"...');
array.remove(3);
pr('Result: ' + array.join(', '), 'output');
pr('Removing "5"...');
array.remove(5);
pr('Result: ' + array.join(', '), 'output');

// Problem 3. Deep copy
// ====================
// Write a function that makes a deep copy of an object.
// The function should work for both primitive and reference types.
// ================================================================
pr('');
pr('Problem 3. Deep copy', 'taskTitle');

function Person(fName, lName, age){
	this.FirstName = fName;
	this.LastName = lName;
	this.Age = age;
	this.toString = function (){
		return this.FirstName + ' ' + this.LastName + ' Age: ' + this.Age;
	}
}

function DeepCopy(fromObj){
	// If the argument is primitive type
	if (typeof(fromObj) != 'object') {
		return fromObj;
	};
	// If the argument is an object type
	for(var prop in fromObj){
		if (typeof(fromObj[prop]) == 'object') {
			DeepCopy(fromObj[prop]);  // Can't believe this works!!!
		};

		this[prop] = fromObj[prop];
	}
}

var pesho = new Person('Petar', 'Petrov', 25);
pr('Object "pesho": ' + pesho.toString(), 'input');
var gosho = new Person('Georgi', 'Ivanov', 30);
pr('Object "gosho": ' + gosho.toString(), 'input');

// Testing deep copy
var deepCopyOfPesho = new DeepCopy(pesho);
pr('Deep copy of "pesho": ' + deepCopyOfPesho.toString(), 'output');
pr('Change the age of the deep copy to 100...');
deepCopyOfPesho.Age = 100;
pr('Object "pesho": ' + pesho.toString(), 'output');
pr('Deep copy of "pesho": ' + deepCopyOfPesho.toString(), 'output');

// Testing shallow copy
var shallowCopyOfGosho = gosho;
pr('Shallow copy of "gosho": ' + shallowCopyOfGosho, 'output');
pr('Change age of the shallow copy to 100...');
shallowCopyOfGosho.Age = 100;
pr('Object "gosho": ' + gosho.toString(), 'output');
pr('Shallow copy of "gosho": ' + shallowCopyOfGosho, 'output');

// Testing with primitive types;
pr('Testing with primitive types...');
var fruit = 'apple';
pr('variable >>>>> ' + fruit, 'input');
var copyOfFruit = DeepCopy(fruit);
pr('Copy of the variable >>>>> ' + copyOfFruit, 'output');

// Problem 4. Has property
// =======================
// Write a function that checks if a given object contains a given property.
// =========================================================================
pr('');
pr('Problem 4. Has property', 'taskTitle');
var object = {prop1: 'prop1', prop2: 'prop2'};

function HasProp(obj, prop){
	for(var property in obj){
		if (property == prop) {return true};   // It's easier with hasOwnProperty function!
	}

	return false;
}

pr('Has property "prop1": ' + HasProp(object, 'prop1'));
pr('Has property "prop3": ' + HasProp(object, 'prop3'));

// Problem 5. Youngest person
// ==========================
// Write a function that finds the youngest person in a given 
// array of people and prints his/hers full name
// Each person has properties firstname, lastname and age.
// ===========================================================
pr('');
pr('Problem 5. Youngest person', 'taskTitle');
function Person(fName, lName, age){
	this.FirstName = fName;
	this.LastName = lName;
	this.Age = age;
	this.toString = function(){
		return this.FirstName + ' ' + this.LastName + ' Age: ' + this.Age;
	}
}

var people = [
new Person('Pesho', 'Petrov', 20),
new Person('Ivan', 'Ivanov', 28),
new Person('Boncho', 'Genchev', 19),
new Person('Kamen', 'Donev', 40)];

pr('Array of people:', 'input');
for (var i = 0; i < people.length; i++) {
	pr(people[i].toString(), 'input');
};

function YoungestPerson(arr, prop){
	var index = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i][prop] < arr[index][prop]) {
			index = i;
		};
	};

	return arr[index];
}

pr('Youngest person: ' + YoungestPerson(people, 'Age'), 'output');

// Problem 6.
// ==========
// Write a function that groups an array of people by age, first or last name.
// The function must return an associative array, with keys - the groups, and 
// values - arrays with people in this groups
// Use function overloading (i.e. just one function)
// ===========================================================================
pr('');
pr('Problem 6.');
var people = [
new Person('Pesho', 'Petrov', 20),
new Person('Ivan', 'Ivanov', 28),
new Person('Boncho', 'Genchev', 19),
new Person('Kamen', 'Donev', 40),
new Person('Toncho', 'Tonev', 20),
new Person('Ivan', 'Petrov', 20)
];

pr('Input array ofpeople:', 'input');
for (var i = 0; i < people.length; i++) {
	pr(people[i].toString(), 'input');
};

function GroupBy(arr, prop){
	if (!arr[0].hasOwnProperty(prop)) {
		return 'Invalid property name';
	};
	var result = {};
	result['GroupName'] = prop;
	result['Collection'] = {};
	for (var i = 0; i < arr.length; i++) {
		if (result.Collection[arr[i][prop]]) {
			result.Collection[arr[i][prop]].push(arr[i]);
		}
		else{
			result.Collection[arr[i][prop]] = [arr[i]];
		};		
	};

		result['toString'] = function (){
		var resultString = 'Group by: ' + result.GroupName + '\n';
		for(var prop in result.Collection){
			resultString += result.GroupName + ' ' + prop + ':\n';
			for (var i = 0; i < result.Collection[prop].length; i++) {
				resultString += result.Collection[prop][i].toString() + '\n';
			};
		}

		return resultString;
	}

	return result;
}

pr('Testing group by Age');
var groupByAge = GroupBy(people, 'Age');
pr(groupByAge.toString(), 'output');
pr('Testing group by first name');
var groupByFirstName = GroupBy(people, 'FirstName');
pr(groupByFirstName.toString(), 'output');