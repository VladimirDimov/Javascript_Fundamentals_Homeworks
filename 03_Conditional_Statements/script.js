//  Problem 1. Exchange if greater
//  Write an if statement that takes two double variables a and b and exchanges 
//  their values if the first one is greater than the second.
//  As a result print the values a and b, separated by a space.
//  ===========================================================================
console.log('Problem 1. Exchange if greater');
function Exchange(a, b) {
    if (a <= b) {
        return a + ' ' + b;
    }
    else {
        return b + ' ' + a;
    }
}

var pairs = [
[5,2],
[3,4],
[5.5, 4.5],
[1, -10]
]

for (var i = 0; i < pairs.length; i++) {
    console.log(pairs[i] + '   >>>>>   ' + Exchange(pairs[i][0], pairs[i][1]));
}

//  Problem 2. Multiplication Sign
//  Write a script that shows the sign (+, - or 0) of the product 
//  of three real numbers, without calculating it.
//  Use a sequence of if operators.
//  ==============================================================
console.log('');
console.log('Problem 2. Multiplication Sign');
