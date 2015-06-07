// Problem 1. Reverse string
// =========================
// Write a JavaScript function that reverses a string and returns it.
// ==================================================================
function task1(){
	print('');
	print('Problem 1. Reverse string', 'taskTitle');
	var strings = ['Pesho', 'Gosho', 'Tosho'];

	function Reverse(str){
		var reversed = '';
		for (var i = str.length - 1; i >= 0; i--) {
			reversed += str[i];
		};

		return reversed;
	}

	for(var i in strings){
		print('String: ' + strings[i] + ' >>>>> Reversed: ' + Reverse(strings[i]), 'output');
	}
}

// Problem 2. Correct brackets
// ===========================
// Write a JavaScript function to check if in a given expression the brackets are put correctly.
// =============================================================================================
function task2(){
	print('');
	print('Problem 2. Correct brackets', 'taskTitle');
	var expressions = ['(a+b)*c', '((a+b)*c) - (b+d)', ')a+b(', '((a+b)', '(a+b)))(', 'a+b'];

	function IsCorrectBrackets(expr){
		var openBrackets = 0;
		var closeBrackets = 0;

		for (var i = 0; i < expr.length; i++) {
			if(expr[i] == '('){openBrackets++}
				else if (expr[i] == ')') {closeBrackets++};
				if (closeBrackets > openBrackets) {
					return false
				};
			};

			if (openBrackets != closeBrackets) {
				return false
			}
			else{
				return true
			};	
		}

		for (var i = 0; i < expressions.length; i++) {
			var bracketsCheck = IsCorrectBrackets(expressions[i]) ? 'correct' : 'incorrect';
			print('Expression: ' + expressions[i] + ' >>>>> ' + bracketsCheck, 'output');
		};
	}

// Problem 3. Sub-string in text
// ==============================
// Write a JavaScript function that finds how many times a 
// substring is contained in a given text (perform case insensitive search).
// =========================================================================
function task3(){
	print('');
	print('Problem 3. Sub-string in text', 'taskTitle');
	var text = 'The text is as follows: We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
	var substring = 'in';

	function CountSubstring(text, substring, startIndex, startCounter){
		var left = startIndex || 0;
		var index = text.indexOf(substring, left);
		var counter = startCounter || 0;
		if (index == -1) {
			return counter;
		} else{
			counter++;
			var newIndex = index + substring.length;
			if (newIndex > text.length - 1) {
				return counter;
			} else{
				return CountSubstring(text, substring, newIndex, counter);
			};
		};	
	}

	print('Input: ' + text, 'input');
	print('Look for substring "' + substring + '"', 'input');
	print('Result: ' + CountSubstring(text, substring), 'output');

	var text2 = "pesho"
	var substring2 = 'gosho';
	print('Input: ' + text2, 'input');
	print('Look for substring "' + substring2 + '"', 'input');
	print('Result: ' + CountSubstring(text2, substring2), 'output');
}

// Problem 4. Parse tags
// =====================
// You are given a text. Write a function that changes the text in all regions:
// ============================================================================
function task4(){
	print('');
	print('Problem 4. Parse tags', 'taskTitle');
	
	var text = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.';
	var activeFormats = [];
	var result = '';
	var len = text.length;
	var curTag;
	var curText = '';
	for (var i = 0; i < text.length; i++) {
		var curchar = text[i];
		if (curchar == '<') {
			curTag = text.substring(i, text.indexOf('>', i+1) + 1);
			result += formatText(curText);
			curText = '';
			if (curTag == '<upcase>' || curTag == '<lowcase>' || curTag == '<mixcase>') {
				activeFormats.push(curTag);
			} else {
				activeFormats.pop();
			};
			i = text.indexOf('>', i+1);
		} else {
			curText += curchar;
		};
	}

	function formatText(t) {
		var modifiedText = t;
		if (activeFormats.length == 0) {
			return t;
		};

		switch (activeFormats[activeFormats.length-1]) {
			case '<upcase>':
			modifiedText = modifiedText.toUpperCase();
			break;
			case '<lowcase>':
			modifiedText = modifiedText.toLowerCase();
			break;
			case '<mixcase>':
			var mixText = '';
			for (var i = 0; i < t.length; i++) {
				var rnd = Math.random();
				if (rnd < 0.5) {
					mixText += modifiedText[i].toLowerCase()
				} else {
					mixText += modifiedText[i].toUpperCase();
				};
			};
			modifiedText = mixText;
			break;
		}

		return modifiedText;
		debugger;
	}

	print(result, 'output');
}

// Problem 5. nbsp
// ===============
// Write a function that replaces non breaking white-spaces in a text with &nbsp;
// ==============================================================================
function task5(){
	print('');
	print('Problem 5. nbsp', 'taskTitle');

	function Nbsp(text){	
		var result = text.replace(/\s/g, '&nbsp');
		return result;
	}

	var text = 'Write a function that replaces non breaking white-spaces       in a text    with    &nbsp;';
	print('Input: ' + text,'input');
	print('Result: ' + Nbsp(text), 'output');
}

// Problem 6. Extract text from HTML
// =================================
// Write a function that extracts the content of a html page given as text.
// The function should return anything that is in a tag, without the tags.
// ========================================================================
function task6(){
	print('');
	print('Problem 6. Extract text from HTML', 'taskTitle');
	var htmlText = '<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>';

// Without regular expressions
function RemoveTags(text){
	var isInsideTag = false;
	var result = '';

	for (var i = 0; i < text.length; i++) {
		var curChar = text[i];				
		switch(curChar){
			case '<':
			isInsideTag = true;
			break;
			case '>':
			isInsideTag = false;
			default:
			if (isInsideTag || curChar == '>') {
				break;
			}
			result += curChar;
			break;
		}
	};
	return result;
}

print('result: ' + RemoveTags(htmlText), 'output');

// With regex
print('Result (using regex): ' + htmlText.replace(/<(.*?)>/g, ''), 'output');
}

// Problem 7. Parse URL
// ====================
// Write a script that parses an URL address given in the format: [protocol]:
// //[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
// Return the elements in a JSON object.
// ============================================================================================
function task7(){
	print('');
	print('Problem 7. Parse URL', 'taskTitle');
	var urlAddress = 'http://telerikacademy.com/Courses/Courses/Details/239';
	var urlArray = urlAddress.split(/:?\/?\//);
	var protocol =  urlArray[0];
	var server = urlArray[1];
	var resource = urlArray.splice(2).join('\/');
	print('Url: ' + urlAddress, 'input');
	print('Protocol: ' + protocol, 'output');
	print('Server: ' + server, 'output');
	print('Resource: ' + resource, 'output');
}

// Problem 8. Replace tags
// =======================
// Write a JavaScript function that replaces in a HTML document given 
// as string all the tags <a href="…">…</a> with corresponding tags [URL=…]…/URL].
// ===============================================================================
function task8(){
	print('');
	print('Problem 8. Replace tags', 'taskTitle');

	var input = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';

	function ReplaceTags(text){
		var result = text.replace(/(<a href=)(.*?)(>)/g, '[URL=$2]').replace(/<\/a>/g, '[\/URL]');
		return result;
	}

	print(input , 'input');
	print(ReplaceTags(input), 'output');
}

// Problem 9. Extract e-mails
// ==========================
// Write a function for extracting all email addresses from given text.
// All sub-strings that match the format @… should be recognized as emails.
// Return the emails as array of strings.
// ========================================================================
function task9(){
	print('');
	print('Problem 9. Extract e-mails', 'input');

	var input = 'Gosho\'s personal email is gosho1@bongo.com. He has another email: gogo@vba.com. His working email is gosho_goshev@work.org';

	function ExtractEmails(text){
		var pattern = /\b\S+@\S+\.\S+\b/g;
		var result = text.match(pattern);
		return result;
	}

	var emails = ExtractEmails(input);

	for (var i = 0; i < emails.length; i++) {
		print((i+1) + ': ' + emails[i], 'output');
	};
}

// Problem 10. Find palindromes
// ============================
// Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".
// =============================================================================================
function task10(){
	print('');
	print('Problem 10. Find palindromes', 'taskTitle');
	var pattern = /\w+/g;
	var text = 'Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe", azobicammaciboza.'
	var words = text.match(pattern);

	function IsPalindrome(word){
		var reversed = '';
		for (var i = word.length - 1; i >= 0; i--) {
			reversed += word[i];
		};

		if (word == reversed) {return true};
		return false;
	}

	print('Input: ' + text, 'input');
	var palindromes = [];

	for (var i = 0; i < words.length; i++) {
		if (IsPalindrome(words[i])) {
			palindromes.push(words[i]);
		};
	};

	var result = '';
	if (palindromes.length > 0) {
		result += 'Palindromes: ';	
		result += palindromes.join(', ');
	} else{
		result = 'There are no palindromes!'
	};

	print(result, 'output');
}

// Problem 11. String format
// =========================
// Write a function that formats a string using placeholders.
// The function should work with up to 30 placeholders and all types.
// ==================================================================
function task11(){
	print('');
	print('Problem 11. String format', 'taskTitle');

	function UserException(message) {
		this.message = message;
		this.name = "UserException";
	}

	function stringFormat(text, arg){
		var args = [];
		for (var i = 1; i < arguments.length; i++) {
			args[i-1] = arguments[i];
		};

		if (args.length > 30) {
			throw new UserException('There can\'t be more than 30 placeholders');
		};

		for (var i = 0; i < args.length; i++) {

			var reg = new RegExp('\\{' + i + '\\}', 'g');

			if (text.indexOf('\{' + i + '\}') == -1) {
				throw new UserException('Invalid placeholders');
			} else{
				text = text.replace(reg , args[i]);
			};
		};	

		return text;
	}

	print(stringFormat('{0} {1} Age: {2} => First name: {0}  Last name: {1}', 'Pesho', 'Ivanov', 25), 'output');
}

// Problem 12. Generate list
// =========================
// Write a function that creates a HTML <ul> using a template for every HTML <li>.
// The source of the list should be an array of elements.
// Replace all placeholders marked with –{…}– with the value of the corresponding property of the object.
// ======================================================================================================
function task12(){
	print('');
	print('Problem 12. Generate list', 'taskTitle');

	function Person(name, age){
		return{
			name: name,
			age: age
		}
	}

	var people = [
	Person('Pesho', 30),
	Person('Ivan',  25),
	Person('Minka',  20)];

	function AppendUl(array, id){
		var unsortedList = document.createElement('ul');
		unsortedList.id = "list-people";
		var template = '<div data-type="template" id="list-item"><strong>-{name}-</strong> <span>-{age}-</span></div>';

		for (var i = 0; i < array.length; i++) {
			var newLi = document.createElement('li');
			var curInnerHtml = template;		

			for(var prop in array[i]){
				var reg = new RegExp('-\\{' + prop + '\\}-', 'g');
				curInnerHtml = curInnerHtml.replace(reg, array[i][prop]);
			}

			newLi.innerHTML = curInnerHtml;
			unsortedList.appendChild(newLi);
		};

		unsortedList.style.paddingLeft = '30px';
		document.body.appendChild(unsortedList);
	}

	AppendUl(people, 'list-people');
}

task1();
task2();
task3();
task4();
task5();
task6();
task7();
task8();
task9();
task10();
task11();
task12();
debugger;