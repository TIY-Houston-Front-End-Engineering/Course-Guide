
// Note: This quiz uses a testing framework called mocha. If you want to run the tests yourself, make sure you have mocha and chai both installed in the directory you're working in. If not, just use npm install mocha (and/or chai). Takes two seconds. Then you simply use the command "mocha midreview.js" at the command line. 

var mocha = require('mocha'),
    chai = require('chai')

var assert = chai.assert;
var expect = chai.expect;



// 1. store two numbers into two variables. add them and store the result in a third variable.

// 2. store two strings into two variables. concatenate them, with a space inbetween each, and store the result in a third variable.

// 3. store all the variables from (1) and (2) into an array. console log the array. 

// 4. write a function called isNegative. it should take a single, numerical input. it should output true if the number is negative, and false if the number is positive.

// 5. modify isNegative so that it only accepts numerical input. it should THROW an error for bad input, and that error should consist of the exact string "input must be a number."

// 6. write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 

// 7. write a function called incrementEach(). it should take as input an array of numbers and increase the value of each number by one. try it with a basic for loop, then try it the appropriate functional method (map/filter/reduce/forEach).

// 8. write a function called shortiesOnly(). taking as input an array of strings, it should use the array's .filter() method to return a new array containing only those strings with fewer than four characters. 

// 9. in a certain restaurant, a steak is $25, a bottle of wine is $40, a salad is $12, and a brownie sundae is $10. make a menu object that provides menu items as keys and prices as values. 

// 10. use a constructor called Restaurant to create a Restaurant object. put a getPrice() method on the constructor's prototype that takes the name of a menu item as input and returns the price of the item. i should be able to test it like this:

// >>> var applebees = new Menu()
// >>> applebees.getPrice('salad')
// >>> '$12'

// 11. add a method to the Restaurant called getDishes. this method should read the Restaurant's menu object and turn it into an array of dish names, then return that array. (i.e., do not just hard-code an array containing the dish names).  

// 12. write a function called getValues. getValues should take two inputs: an array of objects, and a property name. it should return an array containing the value of the specified property for each object. 

// example: 
// var colorDicts = [{red: 'rouge',blue:'bleu'},{red:'rojo',blue:'azul'},{red:'rote',blue:'blau'}]
// getValues(colorDicts,'blue') --> ['bleu','azul','blau']

// 13. write a function called pipeline. it should take three inputs: (1) a string of text, (2) a function, and (3) another function. it should use functions (2) and (3) on the input, one after the other, and return a new string that has been processed by both function (2) and function (3).

// for example, presuming i have a function called capitalize() and a function called removeFirstLetter, i should be able to do this

// >>> var newWord = pipeline('america')
// >>> 'Americ'

// 13. create a jquery promise that will resolve true, and execute an associated callback, after 1 second. 

// 14. create a constructor called Place. the important methods on place are .fetchData() and .getCoords(). fetchData should take the name of a place as input, make a request to an api of your choosing (hint: googlemaps geocoding), and store the latitude and longitude of the place in an object, retrievable with the getCoords method. 

// test for #1
// test for #2
// test for #3
// test for #4
// test for #5
describe("isNegative()",function(){
    it("should return true if the input number is negative",function(){
        expect(isNegative(2)).to.equal(false)
        expect(isNegative(-50)).to.equal(true)
        expect(isNegative(0)).to.equal(false)
    })
})
// test for #6
describe('isNegative()',function() {
    it('should throw an exception if the input is not a number' , function() {
        
        expect(isNegative(5)).to.equal(false)
        
        expect(isNegative('five')) .to.throw('input must be a number')
        expect(isNegative([5]))    .to.throw('input must be a number')
        expect(isNegative(false))  .to.throw('input must be a number')

    })
})


// test for #6
describe('iPutTheFunIn()',function() {
    it('should put the fun in things!' , function() {
        
        expect(iPutTheFunIn('functional')).to.equal('functfunional')

        expect(iPutTheFunIn('funerals')).to.equal('funefunrals')
    })
})

var incrementEach = function(arr) {
    return arr.map(function(el){
        return el + 1
    })
}
// test for #7
describe('incrementEach()', function() {
    it('should increase the value of each number in an array' , function() {
        expect(incrementEach([3,4,5,6])).to.deepEqual([4,5,6,7])
        expect(incrementEach([-3,-4,-5,-6])).to.deepEqual([-2,-3,-4,-5])

    })
})

var shortiesOnly = function(arr){
    return arr.filter(function(el){
        return el.length < 4
    })
}

console.log(shortiesOnly(["Sunbeams","do","illuminate","the","dew"]))
// test for #8
describe('shortiesOnly()', function() {
    it('should produce a new array with only <4-letter words' , function() {
        expect(shortiesOnly(["Sunbeams","do","illuminate","the","dew"])).to.deepEqual(["do","the","dew"])
    })
})


// test for #8
describe("menu",function(){
    it('should be an object which yields the price of a menu item when the name of that item is supplied as a key.', function() {
        expect(menu.salad).to.equal('$12')
    })
})


// test for #9 
describe('Resturant' , function() {
    describe('#getPrice()',function(){
        it('should return the price of an item from the menu' , function() {var applebees = new Restaurant()
            expect(applebees.getPrice('salad')).to.equal('$12')
            }
        })
    })
})

// test for #10

var squareNum = function(num) {return num * num}

var doubleNum = function(num) {return num * 2}

var inverseNum = function(num) {return 1 / num}

describe("pipeline()",function(){
    it("should pipe the outputs of the functions passed in as arguments into a final value",function(){
        expect(pipeline(5,doubleNum,squareNum)).to.equal(100)
        expect(pipeline(10,squareNum,inverseNum)).to.equal(.01)
    })
})