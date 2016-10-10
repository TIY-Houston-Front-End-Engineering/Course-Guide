/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

var sumOfArray = function(numArray) {
	var sum = 0
	for(var i=0; i < numArray.length; i++) {
		sum += numArray[i]
	}
	return sum;
}

console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

var maxOfArray = function(numArray) {
	var max = numArray[0]
	for(var i = 1; i < numArray.length; i++) {
		var comparingValue = numArray[i]
		if (typeof numArray[i] !== "number") {
			return NaN
		}	

		if (max < comparingValue) {
			max = numArray[i]
		}
	}
	return max;
}
console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */
 var contains = function() {

 }

function isVowel(symbol){
    var vowels = 'aeiou'
    return contains(vowels,symbol)
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

var reverse = function(string) {
	var reverseString = ""
	for(var i = (string.length - 1); i > -1; i--) {
		reverseString += string[i]
	}
	return reverseString;
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */

var fizzbuzz = function(num) {
	var fizzbuzzString = ""
	for(var i = 1; i <= num; i++){
		if(i % 3 === 0 && i % 5 === 0) {
			fizzbuzzString += "fizzbuzz"
		} else if ((i % 3 !== 0 && i % 5 !== 0)) {
			fizzbuzzString += "."
		} else if ((i % 3 === 0 && i % 5 !== 0)) {
			fizzbuzzString += "fizz"
		} else if ((i % 3 !== 0 && i % 5 === 0)) {
			fizzbuzzString += "buzz"
		}
	}
	return fizzbuzzString;
}

console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

function findLongestWord(sentence){
    var longestWord = ""
    var cleanedSentence = splitSentence.replace(/'/, '')
    var wordsArray = cleanedSentence.split(" ")
    for(var i = 0; i < wordsArray.length; i++) {
        
        
    	if (longestWord.length < wordsArray[i].length) {
    		longestWord = wordsArray[i];
    	}
    }
    return longestWord;
}

console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")



/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

var GCD = function(num1,num2) {
	var GCD = 1
	for(var i = 1; i <= num1; i++){
		if (num1 % i === 0){
			for(var j = 1; j <= num2; j++){
				if (num2 % j === 0 && i === j){
					GCD = j
				}
			}
		}
	}
	return GCD;
}

console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);




