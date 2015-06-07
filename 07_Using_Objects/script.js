// Problem 1. Planar coordinates
// =============================
// Write functions for working with shapes in standard Planar coordinate system.
// Points are represented by coordinates P(X, Y)
// Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
// Calculate the distance between two points.
// Check if three segment lines can form a triangle.
// ===============================================================================================
function task1(){
	print('Problem 1. Planar coordinates', 'taskTitle');

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
		var pointsAsStr = [];
		for(var line in linesArray){
			var curLine = linesArray[line]
			if (pointsAsStr.indexOf(curLine.StartPoint.toString()) == -1) {
				pointsAsStr.push(curLine.StartPoint.toString());
				points.push(curLine.StartPoint);
			};
			if (pointsAsStr.indexOf(curLine.EndPoint.toString()) == -1) {
				points.push(curLine.EndPoint);
				pointsAsStr.push(curLine.EndPoint.toString());
			};
		}
		if (points.length == 3) {
			var angle1 = Math.round((points[0].Y - points[1].Y)/(points[0].X - points[1].X)*100000)/100000;
			var angle2 = Math.round((points[1].Y - points[2].Y)/(points[1].X - points[2].X)*100000)/100000;
		if (angle1 != angle2) {return true;}; // Check if points are on same line.
		return false;
	}
	return false;
}

var p1 = BuildPoint(0, 0),
p2 = BuildPoint(5,5),
p3 = BuildPoint(0, 0);

print('Point 1: ' + p1.toString(), 'input');
print('Point 2: ' + p2.toString(), 'input');
print('Point 3: ' + p3.toString(), 'input');
print('Test comparison: P1 == P2 >>>> ' + ComparePoints(p1, p2), 'output');
print('Test comparison: P1 == P3 >>>> ' + ComparePoints(p1, p3), 'output');
print('Distance from P1 to P2: ' + Distance(p1, p2), 'output');

var l1 = BuildLine(BuildPoint(0,0), BuildPoint(5,5));
var l2 = BuildLine(BuildPoint(5,5), BuildPoint(1,3));
var l3 = BuildLine(BuildPoint(1,3), BuildPoint(0,0));
var l4 = BuildLine(BuildPoint(0,-1), BuildPoint(-1,1));
var l5 = BuildLine(BuildPoint(0,0), BuildPoint(2,2));
var l6 = BuildLine(BuildPoint(2,2), BuildPoint(5,5));
print('Line 1: ' + l1.toString(), 'input');
print('Line 2: ' + l2.toString(), 'input');
print('Line 3: ' + l3.toString(), 'input');
print('Line 4: ' + l4.toString(), 'input');
print('Line 5: ' + l5.toString(), 'input');
print('Line 6: ' + l6.toString(), 'input');
print('Lines l1, l2 and l3 can form triangle >>>>> ' + CanFormTriangle([l1, l2, l3]), 'output');
print('Lines l1, l2 and l4 can form triangle >>>>> ' + CanFormTriangle([l1, l2, l4]), 'output');
print('Lines l1, l5 and l6 can form triangle >>>>> ' + CanFormTriangle([l1, l5, l6]), 'output');
}

// Problem 2. Remove elements
// ==========================
// Write a function that removes all elements with a given value.
// Attach it to the array type.
// Read about prototype and how to attach methods.
// ==============================================================
function task2(){
	print('');
	print('Problem 2. Remove elements', 'taskTitle');

	var array = [1,2,3,3,4,5,5, 5, 6, 7, 8, 9, 10];

	Array.prototype.remove = function Remove(value){
		return this.filter(function(element){
			return element != value;
		});
	}

	print('Input array: ' + array.join(', '), 'input');
	print('Removing "3"...');
	array = array.remove(3);
	print('Result: ' + array.join(', '), 'output');
	print('Removing "5"...');
	array = array.remove(5);
	print('Result: ' + array.join(', '), 'output');
	print('Removing "1"...');
	array = array.remove(1);
	print('Result: ' + array.join(', '), 'output');
	print('Removing "10"...');
	array = array.remove(10);
	print('Result: ' + array.join(', '), 'output');
	print('Removing "100"...');
	array = array.remove(100);
	print('Result: ' + array.join(', '), 'output');
}

// Problem 3. Deep copy
// ====================
// Write a function that makes a deep copy of an object.
// The function should work for both primitive and reference types.
// ================================================================
function task3(){
	print('');
	print('Problem 3. Deep copy', 'taskTitle');

	function Person(fName, lName, age, favouriteNumbers){
		this.FirstName = fName;
		this.LastName = lName;
		this.Age = age;
		this.Numbers = favouriteNumbers;

		this.toString = function (){
			return JSON.stringify(this);
		}
	}

	function DeepCopy(fromObj){
	// If the argument is primitive type
	if (typeof(fromObj) != 'object') {
		return fromObj;
	};
	// If the argument is an object type
	for(var prop in fromObj){		
		this[prop] = fromObj[prop];
	}
}

var pesho = new Person('Petar', 'Petrov', 25, [1,2,3,4,5,6,7]);
print('Object "pesho": ' + pesho.toString(), 'input');
var gosho = new Person('Georgi', 'Ivanov', 30, [4,5]);
print('Object "gosho": ' + gosho.toString(), 'input');

// Testing deep copy
var deepCopyOfPesho = new DeepCopy(pesho);
print('Deep copy of "pesho": ' + deepCopyOfPesho.toString(), 'output');
print('Change the age of the deep copy to 100 and favourite numbers');
deepCopyOfPesho.Age = 100;
deepCopyOfPesho.Numbers = [200, 300];
print('Object "pesho": ' + pesho.toString(), 'output');
print('Deep copy of "pesho": ' + deepCopyOfPesho.toString(), 'output');

// Testing shallow copy
var shallowCopyOfGosho = gosho;
print('Shallow copy of "gosho": ' + shallowCopyOfGosho, 'output');
print('Change age of the shallow copy to 100 and favourite numbers');
shallowCopyOfGosho.Age = 100;
shallowCopyOfGosho.favouriteNumbers = [1000, 22222];
print('Object "gosho": ' + gosho.toString(), 'output');
print('Shallow copy of "gosho": ' + shallowCopyOfGosho, 'output');

// Testing with primitive types;
print('Testing with primitive types...');
var fruit = 'apple';
print('variable >>>>> ' + fruit, 'input');
var copyOfFruit = DeepCopy(fruit);
print('Copy of the variable >>>>> ' + copyOfFruit, 'output');
}

// Problem 4. Has property
// =======================
// Write a function that checks if a given object contains a given property.
// =========================================================================
function task4(){
	print('');
	print('Problem 4. Has property', 'taskTitle');
	var object = {prop1: 'prop1', prop2: 'prop2'};
	print('Object: ' + JSON.stringify(object), 'input');
	function HasProp(obj, prop){
		for(var property in obj){
		if (property == prop) {return true};   // It's easier with hasOwnProperty function!
	}

	return false;
}

print('Has property "prop1": ' + HasProp(object, 'prop1'), 'output');
print('Has property "prop3": ' + HasProp(object, 'prop3'), 'output');
}

// Problem 5. Youngest person
// ==========================
// Write a function that finds the youngest person in a given 
// array of people and prints his/hers full name
// Each person has properties firstname, lastname and age.
// ===========================================================
function task5(){
	print('');
	print('Problem 5. Youngest person', 'taskTitle');
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

	print('Array of people:', 'input');
	for (var i = 0; i < people.length; i++) {
		print(people[i].toString(), 'input');
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

	print('Youngest person: ' + YoungestPerson(people, 'Age'), 'output');
}

// Problem 6.
// ==========
// Write a function that groups an array of people by age, first or last name.
// The function must return an associative array, with keys - the groups, and 
// values - arrays with people in this groups
// Use function overloading (i.e. just one function)
// ===========================================================================
function task6(){
	print('');
	print('Problem 6.');

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
	new Person('Kamen', 'Donev', 40),
	new Person('Toncho', 'Tonev', 20),
	new Person('Ivan', 'Petrov', 20)
	];

	print('Input array ofpeople:', 'input');
	for (var i = 0; i < people.length; i++) {
		print(people[i].toString(), 'input');
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

	print('Testing group by Age');
	var groupByAge = GroupBy(people, 'Age');
	print(groupByAge.toString(), 'output');
	print('Testing group by first name');
	var groupByFirstName = GroupBy(people, 'FirstName');
	print(groupByFirstName.toString(), 'output');
}

task1();
task2();
task3();
task4();
task5();
task6();