// Problem 1. Numbers
// ==================
// Write a script that prints all the numbers from 1 to N.
// =======================================================
function task1(){
    console.log('Problem 1. Numbers');
    var result = '';
    var N = 20;
    for (var i = 1; i <= N; i++) {
        result += i + ', ';
    }
    result = result.substr(0, result.length - 2);
    console.log(result);
}

// Problem 2. Numbers not divisible
// ================================
// Write a script that prints all the numbers from 1 to N, that are 
// not divisible by 3 and 7 at the same time
// ================================================================
function task2(){
    console.log('');
    console.log('Problem 2. Numbers not divisible');
    var N = 100;
    var result = [];
    var position = 0;
    for (var i = 1; i <= N; i++) {
        if (i%35 != 0) {
            result[position] = i;
            position++;
        }
    }

    console.log('Result: ' + result + ';');
}

//Problem 3. Min/Max of sequence
//==============================
//Write a script that finds the max and min number from a sequence of numbers.
//============================================================================
function task3(){
    console.log('');
    console.log('Problem 3. Min/Max of sequence');
    function MaxMin(sequence) {
        var min = sequence[0];
        var max = sequence[0];
        for (var i = 1; i < sequence.length; i++) {
            var currentNumber = sequence[i];

            if (currentNumber > max) {
                max = currentNumber;
            }

            if (currentNumber < min) {
                min = currentNumber;
            }
        }

        return { min: min, max: max };
    }

    var numbers = [0, 5, -10, 12.8, 40.89, 16];
    var result = MaxMin(numbers);
    console.log('Sequence: ' + numbers + ';');
    console.log('Min: ' + result.min + '   Max: ' + result.max);
}

// Problem 4. Lexicographically smallest
// =====================================
// Write a script that finds the lexicographically smallest 
// and largest property in document, window and navigator objects.
// ===============================================================
function task4(){
    console.log('');
    console.log('Problem 4. Lexicographically smallest');
    var classes = [];
    classes.push(document);
    classes.push(window);
    classes.push(navigator);

    for (var i in classes) {
        var currentClass = classes[i];
        var smallest = '~~~~~~';
        var largest = '';

        console.log('Inspecting "' + currentClass + '":')
        for (var prop in currentClass) {
            if ((prop < smallest)) {
                smallest = prop;
            }
            if (prop > largest) {
                largest = prop;
            }
        }
        console.log('Smallest: ' + smallest);
        console.log('Largest: ' + largest);
        console.log('');
    }
}

task1();
task2();
task3();
task4();