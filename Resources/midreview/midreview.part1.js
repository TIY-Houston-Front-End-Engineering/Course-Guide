
// Note: This quiz uses a testing framework called mocha. If you want to run the tests yourself, make sure you have mocha and chai both installed in the directory you're working in. If not, just use npm install mocha (and/or chai). Takes two seconds. Then you simply use the command "mocha midreview.js" at the command line. 

// Also note: The functions must have the same names as indicated in order to pass the tests. Even the error string in #2 must be the same. 

// Oh look another note: If these are too easy for you, enjoy it while it lasts. This is a three-part review. 

var mocha = require('mocha'),
    chai = require('chai')

var assert = chai.assert;
var expect = chai.expect;



// 1. write a function called isNegative. it should take a single, numerical input. it should output true if the number is negative, and false if the number is positive.

// 2. modify isNegative so that it only accepts numerical input. it should THROW an error for bad input, and that error should consist of the exact string "input must be a number."

// 3. write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 

// 4. write a function called incrementEach(). it should take as input an array of numbers and increase the value of each number by one. try it with a basic for loop, then try it the appropriate functional method (map/filter/reduce/forEach).

// 5. write a function called shortiesOnly(). taking as input an array of strings, it should use the array's .filter() method to return a new array containing only those strings with fewer than four characters. 

// test for #1
describe("isNegative()",function(){
    it("should return true if the input number is negative",function(){
        expect(isNegative(2)).to.equal(false)
        expect(isNegative(-50)).to.equal(true)
        expect(isNegative(0)).to.equal(false)
    })
})


// test for #2
describe('isNegative()',function() {
    it('should throw an exception if the input is not a number' , function()
    {
        expect(isNegative(5))      .to.equal(false)
        expect(isNegative('five')) .to.throw('input must be a number')
        expect(isNegative([5]))    .to.throw('input must be a number')
        expect(isNegative(false))  .to.throw('input must be a number')
    })
})


// test for #3
describe('iPutTheFunIn()',function() {
    it('should put the fun in things!' , function() {
        expect(iPutTheFunIn('functional')).to.equal('functfunional')
        expect(iPutTheFunIn('funerals')).to.equal('funefunrals')
    })
})


var iPutTheFunIn = function(input) {
    var midpoint = input.length/2,
        part1 = input.slice(0,midpoint),
        part2 = input.slice(midpoint,input.length)
    return part1 + 'fun' + part2
}

var iPutTheFunIn = function(input) {
    var newString = input,
        halfPoint = newString.length/2
    return newString.substr(0,halfPoint) + 'fun' + newString.substr(halfPoint)
}


// test for #4
describe('incrementEach()', function() {
    it('should increase the value of each number in an array' , function() {
        expect(incrementEach([3,4,5,6])).to.deep.equal([4,5,6,7])
        expect(incrementEach([-3,-4,-5,-6])).to.deep.equal([-2,-3,-4,-5])

    })
})

var incrementEach = function(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i ++) {
        newArr.push(arr[i] + 1)
    }
    return newArr   
}

[100,200,-1]

[101,201,0]

var incrementEach = function(arr) {
    return arr.map((function(el){
            return el + 1)
    })
}


var shortiesOnly = function(arr) {
    return arr.filter(function(el){
        return el.length < 4
    })
}

var isInteger = function(num){
    if (typeof num !== 'number')
    return num < 0
}

// test for #5
describe('shortiesOnly()', function() {
    it('should produce a new array with only <4-letter words' , function() {
        expect(shortiesOnly(["Sunbeams","do","illuminate","the","dew"])).to.deep.equal(["do","the","dew"])
    })
})

