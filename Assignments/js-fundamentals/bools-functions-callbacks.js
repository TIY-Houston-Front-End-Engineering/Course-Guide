
// Example

// The purpose of this first exercise is just to show how 
// assertions work and how the homework should be carried out. 
// We'll do it together in class.

console.assert(addOne(1) === 2)

// Part 0

// Fix the following code so that the assertion passes. 

var doubleNum = function(num) {
	var newNum = num * 2
}

console.assert(doubleNum(5) === 10)


/**
 * PART 1
 *
 * Write a function called sum that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */


console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);


/**
 * PART 2
 *
 * Modify your sum function so that if either of its 
 inputs is not a number, it will return "null"
 */


console.assert(sum(867, 5309) === 6176);
console.assert(sum('867', 5309) === null);
console.assert(sum(true, 5) === null);


// Part 3

// Write a function called isNegative that will tell 
// whether a number is negative or not. 

console.assert(isNegative(10) === false)
console.assert(isNegative(0) === false)
console.assert(isNegative(-999) === true)

// Part 4 
// Make the following assertions pass. 

console.assert(X === 10)
increment()
console.assert(X === 11)

// This exercise is meant to demonstrate the concept
// of scope. The variable X here must have global
// scope in order for the assertions to pass. 

// Important note: By convention, GLOBAL variables
// are written in ALL CAPS. I will do the same throughout
// your assignments and the class.

// Since global variables are rarely used and often 
// discouraged, why don't you fix the increment
// function below. Make the following assertions
// pass.

console.assert(x === 10)
var y = increment(x)
console.assert(x === 10)
console.assert(y === 11)


// Part 5 

// Write a function that will find the minimum of four 
// input numbers. You can do it using nested if statements,
// boolean operators, or both. 

console.assert(minimum(1,2,4,0) === 0)
console.assert(minimum(1000,-2,-99,50) === -99)
console.assert(minimum(-1000,-2,-99,50) === -1000)
console.assert(minimum(1000,-2,99,50) === -2)

// Part 6

// Using boolean operators, write a function that will
// return true if either input is a string, but not 
// both or neither. 

console.assert(justOneString('a',5) === true)
console.assert(justOneString(6,'dotron') === true)
console.assert(justOneString('peanut','butter') === false)
console.assert(justOneString(8,null) === false)

// Part 7 

// Write a function called doTwice that takes as input a 
// function and invokes that function twice. 

// For testing purposes, I've included some functions that
// modify global variables, although that's not a good
// pattern for production code.

var NUMBER = 10

var incrementGlobalNumber = function(){
	NUMBER = NUMBER + 1
}

var doubleGlobalNumber = function() {
	NUMBER = NUMBER * 2
}

doTwice(incrementGlobalNumber)
console.assert(NUMBER === 12)

doTwice(doubleGlobalNumber)
console.assert(NUMBER === 48)

// Part 8 

// Write a function called conditionallyInvoke that takes a function
// as input. It should invoke that input function only if 
// the value of a certain global variable, called ORACLE, is 
// "YES." Otherwise, it will does nothing.

var ORACLE = 'NO'

conditionallyInvoke(doubleGlobalNumber)
console.assert(NUMBER === 48)

ORACLE = 'YES'
conditionallyInvoke(doubleGlobalNumber)
console.assert(NUMBER === 96)

// Part 9

// Make the following assertion work:

console.assert(factory()() === 'hello world')  // INCEPTION!


// Part 10

// Want more? 

console.assert(factory2()('you sly dog') === 'you sly dog')
console.assert(factory2()(999) === 999)

// Part 11

// This can't be good for your sanity...

console.assert(factory3('i have reached function nirvana')() === 'i have reached function nirvana')
console.assert(factory3(100)() === 100)

