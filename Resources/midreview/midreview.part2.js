var mocha = require('mocha'),
    chai = require('chai')

var assert = chai.assert;
var expect = chai.expect;


// 5. in a certain restaurant, a steak is $25, a bottle of wine is $40, a salad is $12, and a brownie sundae is $10. make a menu object that provides menu items as keys and prices as values. 

// 6. use a constructor called Restaurant to create a Restaurant object. put a getPrice() method on the constructor's prototype that takes the name of a menu item as input and returns the price of the item. i should be able to test it like this:

// >>> var applebees = new Menu()
// >>> applebees.getPrice('salad')
// >>> '$12'

// 7. add a method to the Restaurant called getDishes. this method should read the Restaurant's menu object and turn it into an array of dish names, then return that array. (i.e., do not just hard-code an array containing the dish names).  

// 8. write a function called getValues. getValues should take two inputs: an array of objects, and a property name. it should return an array containing the value of the specified property for each object. 

// example: 
// var colorDicts = [{red: 'rouge',blue:'bleu'},{red:'rojo',blue:'azul'},{red:'rote',blue:'blau'}]
// getValues(colorDicts,'blue') --> ['bleu','azul','blau']


// test for #5
describe("menu",function(){
    it('should be an object which yields the price of a menu item when the name of that item is supplied as a key.', function() {
        expect(menu.salad).to.equal('$12')
    })
})


// var applebees = new Restaurant()
// 	applebees.menu = 
	
// test for #6 & #7
describe('Resturant' , function() {
    describe('#getPrice()',function(){
        it('should return the price of an item from the menu' , function() {

            expect(applebees.getPrice('salad')).to.equal('$12')
            }
        )
    })
})

// test for #7
describe("pipeline()",function(){
    it("should pipe the outputs of the functions passed in as arguments into a final value",function(){
    	var squareNum = function(num) {return num * num},
    		doubleNum = function(num) {return num * 2},
    		inverseNum = function(num) {return 1 / num}

        expect(pipeline(5,doubleNum,squareNum)).to.equal(100)
        expect(pipeline(10,squareNum,inverseNum)).to.equal(.01)
    })
})

// test for #8

describe("getValues()",function(){
    it("should pipe the outputs of the functions passed in as arguments into a final value",function(){

            var books = [
                            {author: "vladimir nabokov",
                            title: "lolita",
                            year: "1955"},
                            {author: "jk rowling",
                            title: "harry potter and the powerful skin rash",
                            year: 2016},
                            {author: "david foster wallace",
                            title: "oblivion",
                            year: 2002}
                        ]

            expect(getValues(books,'title')).to.deep.equal(["lolita","harry potter and the powerful skin rash", "oblivion"])
    })
})