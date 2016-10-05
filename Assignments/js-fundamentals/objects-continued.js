// PART 0: Write a function called squareDance() that squares each number in an array.
//

var squareDance = function(number) {
    var newArray = []
    for(var i = 0; i < number.length; i++) {
        var newArray = number[i]*number[i]
        }return newArray
}


console.assert(squareDance([1, 2])[1] === 4)
console.assert(squareDance([5,10,15])[2] === 225)
console.assert(squareDance([3,6,9,3])[0] === 9)



// PART 1: write a function called nicer(). It should clean up the language in its input sentence.

// var nicer = function(input) {
//  var meanArray = input.split(' ')
//  // log(meanArray)
//  for(var i = 0; i < meanArray.length; i++) {
//   if(meanArray[i] !== 'heck' || meanArray[i] !== 'darn' || meanArray[i] !== 'crappy' || meanArray[i] !== 'dang') {
//    var niceArray = meanArray.splice()
//    log(niceArray)
//   }
//  }
// }


// console.assert(nicer("mom get the heck in here and bring me a darn sandwich.") === "mom get the in here and bring me a sandwich.")

// console.assert(nicer("here son, your crappy sandwich is on the dang plate.") === "here son, your sandwich is on the plate.")

// PART 2: write a function called capitalizeAll(). It should take as input a sentence and capitalize the first letter of every word in the sentence.

var capitalizeAll = function(string) {
    var splitString = string.split(' ')
    for(var i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1)
        var allCaps = splitString.join(' ')
        } return allCaps
}


log(capitalizeAll('every day is like sunday.') === 'Every Day Is Like Sunday.')



// PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)

var paragraph = 'it was a fine morning. the wine was good. light slanted in through the cafe window.'

var properSentences = function(paragraph) {
 var brokenPeriods = paragraph.split('. ')
 // log(brokenPeriods)
    for(var i = 0; i < brokenPeriods.length; i++) {
        var upperCase = brokenPeriods[i].substr(0,1).toUpperCase()
        // log(upperCase)
        var allUpperCase = upperCase + brokenPeriods[i].substr(1)
        log(allUpperCase)
        // log(typeof allUpperCase)
    } return allUpperCase
}


console.assert(properSentences(paragraph) === "It was a fine morning. The wine was good. Light slanted in through the cafe window.")

// PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string.

var iPutTheFunIn = function (input) {
    var funWord = 'fun'
    var fullFunWord = input.substr(0, (input.length / 2)) + funWord + input.substr((input.length / 2), input.length)
    return fullFunWord
}

console.assert(iPutTheFunIn("funerary") === "funefunrary")
console.assert(iPutTheFunIn("reds") === "refunds")

// PART 5: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// the following three tests all correspond to the pipeline() function.

// test 1
var paragraph = 'mom bring your crappy self in here. i want a dang sandwich.'

var pipeline = function (inputValue, inputFunc1, inputFunc2) {
    var output1 = inputFunc1(inputValue)
    var finalAnswer = inputFunc2(output1)
    return finalAnswer
}

console.assert(pipeline(paragraph,nicer,properSentences) === "Mom bring your self in here. I want a sandwich.")

// test 2
var squareNum = function(n){
	return n * n
}

var addOne = function(n) {
	return n + 1
}

console.assert(pipeline(7,squareNum,addOne) === 50)

// test 3
var exclaimAll = function(arr) {
	var newArr = []
	for (var i = 0; i < arr.length; i ++) {
		newArr.push(arr[i] + '!')
	}
}

var pipeline = function (inputValue, inputFunc1, inputFunc2) {
    var squared = inputFunc1(inputValue)
    var exclaSquared = inputFunc2(squared)
    return exclaSquared
}

var result = pipeline([10,20,30],squareDance,exclaimAll)
console.assert(result[1] === "400!")
console.assert(result[2] === "900!")
