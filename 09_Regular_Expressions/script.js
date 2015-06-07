// Problem 1. Format with placeholders
// ===================================
// Write a function that formats a string. The function should have placeholders, as shown in the example
// Add the function to the String.prototype
// ======================================================================================================
function task1(){
	print('');
	print('Problem 1. Format with placeholders', 'taskTitle');

	String.prototype.format = function(options){
		var keys = Object.keys(options);
		var result = this;
		for(var op in keys){
			var pattern = new RegExp('#{' + keys[op] + '}', 'g');
			result = result.replace(pattern, options[keys[op]]);
		}
		return result;
	}

	var str1 = 'Hello, there! Are you #{name}?';
	var options1 = {name: 'John'};
	print(str1, 'input');
	print(str1.format(options1), 'output');

	var str2 = 'My name is #{name} and I am #{age}-years-old';
	var options2 = {name: 'John', age: 13};
	print(str2, 'input');
	print(str2.format(options2), 'output');
}

// Problem 2. HTML binding
// =======================
// Write a function that puts the value of an object into the content/attributes of HTML tags.
// Add the function to the String.prototype
// ===========================================================================================
function task2(){
	print('');
	print('Problem 2. HTML binding', 'taskTitle');


	String.prototype.bind = function(content){
		var result;

		// inner html
		var inner = content.name;
		var match = this.match(/(<([a-zA-Z]+)\s+.+?>)(<\/\2>)/);
		var result = match[1] + inner + match[3];
		
		// attributes
		var keys = Object.keys(content);
		for(var i in keys){
			var prop = keys[i];
			if (prop != 'name'){			
				match = result.match(/(<([a-zA-Z]+)\s+.+?)(>[^<>]*<\/\2>)/);
				result = match[1] + ' ' + keys[i] + '="' + content[keys[i]] + '"' + match[3];
			};
		}
		
		


		return result;
	}


	var test1 = '<div data-bind-content="name"></div>';
	print(test1, 'input');
	print(test1.bind({name: 'Ignasio'}), 'output');

	var test2 = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></a>';
	print(test2, 'input');
	print(test2.bind({name: 'Elena', link: 'http://telerikacademy.com'}), 'output');
}
task1();
task2();