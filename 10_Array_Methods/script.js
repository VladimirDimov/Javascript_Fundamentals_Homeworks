// Problem 1. Make person
// ======================
// Write a function for creating persons.
// Each person must have firstname, lastname, age and gender (true is female, false is male)
// Generate an array with ten person with different names, ages and genders
// =========================================================================================
print('');
print('Problem 1. Make person', 'taskTitle');

function Person(fName, lName, age, gender){
	this.FirstName = fName;
	this.LastName = lName;
	this.Age = age;
	this.Gender = gender;
	this.toString = function(){
		return this.FirstName + ' ' + this.LastName + ' Age: ' + this.Age + ' gender: ' + this.Gender;
	}
}

var people = [
new Person('Ivan', 'Ivanov', 30, false),
new Person('Ivan', 'Petrov', 29, false),
new Person('Mariya', 'Ivanova', 25, true),
new Person('Penka', 'Boncheva', 28, true),
new Person('Pencho', 'Penchev',20 , false),
new Person('George', 'Ganchev', 60, false),
new Person('Toncho', 'Tukmakchiev', 55, false),
new Person('Baba', 'Tonka', 70, true),
new Person('Gosho', 'Ivanov', 16, false),
new Person('Pesho', 'Penchev', 14, false)
];

people.forEach(function(element, index){
	print(element.toString(), 'output');
});

// Problem 2. People of age
// ========================
// Write a function that checks if an array of person contains only people of age 
// (with age 18 or greater)
// Use only array methods and no regular loops (for, while)
// ==============================================================================
function task2(){
	print('');
	print('Problem 2. People of age');
	var areOlderThan17 = people.every(function(item){return item.Age >= 18});
	print('All people are older than 17: ' + areOlderThan17, 'output');
}

// Problem 3. Underage people
// ==========================
// Write a function that prints all underaged persons of an array of person
// Use Array#filter and Array#forEach
// Use only array methods and no regular loops (for, while)
// ========================================================================
function task3(){
	print('');
	print('Problem 3. Underage people', 'taskTitle');
	var filtered = people.filter(function(item){return item.Age < 18}).sort(function(a,b){return a.Age - b.Age;});
	filtered.forEach(function(element, index){
		print(element.toString(), 'output');
	});
}

// Problem 4. Average age of females
// =================================
// Write a function that calculates the average age of all females, extracted from an array of persons
// Use Array#filter
// Use only array methods and no regular loops (for, while)
// ===================================================================================================
function task4(){
	print('');
	print('Problem 4. Average age of females', 'taskTitle');
	var females = people.filter(function(item){return item.Gender;});
	var sum = 0;
	females.map(function(item){sum += item.Age;});
	var avr = sum/females.length;
	print('Females:');
	females.forEach(function(item, index){
		print(item.toString(), 'input');
	})

	print('Average age: ' + avr.toFixed(2), 'output');
}

// Problem 5. Youngest person
// ==========================
// Write a function that finds the youngest male person in a given array 
// of people and prints his full name
// Use only array methods and no regular loops (for, while)
// Use Array#find
// ======================================================================
function task5(){
	print('');
	print('Problem 5. Youngest person', 'taskTitle');
	if (!Array.prototype.find) {
		Array.prototype.find = function(callback){
			var len = this.length;
			for (var i = 0; i < len; i++) {
				if (callback(this[i], i)) {
					return this[i];
				};
			};
		}
	};

	var sorted = people.sort(function(a,b){return a.Age - b.Age;});
	var youngestMale = sorted.find(function (item){return !item.Gender;});
	print('Youngest person: ' + youngestMale.toString(), 'output');
}

// Problem 6. Group people
// =======================
// Write a function that groups an array of persons by first letter of first 
// name and returns the groups as a JavaScript Object
// Use Array#reduce
// Use only array methods and no regular loops (for, while)
// =========================================================================
function task6(){
	print('');
	print('Problem 6. Group people', 'taskTitle');
	var group = people.reduce(function(group, item){
		var groupName = item.FirstName[0];
		if (group[groupName]) {
			group[groupName].push(item);
			return group;
		}else{
			group[groupName] = [item];
			return group;
		};
	},{});

	var keys = Object.keys(group).sort();
	for (var i = 0; i < keys.length; i++) {
		print(keys[i]);
		for (var j = 0; j < group[keys[i]].length; j++) {
			print(group[keys[i]][j].toString(), 'output');
		};
	};
}

task2();
task3();
task4();
task5();
task6();