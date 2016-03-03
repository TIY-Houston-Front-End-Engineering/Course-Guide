// write a function called addOne() that takes a number as input and returns a new number that's one more than the input.

console.assert(addOne(100) === 101)
console.assert(addOne(7) === 8)


// write a function called doubleNum() that takes a number as input and returns the double of the number. 

console.assert(doubldeNum(8) === 16)
console.assert(doubleNum(1001) === 2002)


// write a function called isNegative(). it should take a single, numerical input. it should output true if the number is negative, and false if the number is positive.

console.assert(isNegative(8) === false)
console.assert(isNegative(-10) === true)


// modify isNegative() so that it only accepts numerical input. it should return the string, "input must be a number," if bad input has been submitted.

console.assert(isNegative(8) === false)
console.assert(isNegative(-10) === true)
console.assert(isNegative("jimmy stewart") === "input must be a number")
console.assert(isNegative(["array","of","strings"]) === "input must be a number")


// write a function called isEven() that tells whether a number is even or not. 

console.assert(isEven(4) === true)
console.assert(isEven(64) === true)
console.assert(isEven(7) === false)
console.assert(isEven(17) === false)


// write a function called isBig() that tells whether a number is greater than 10,000 or not.

console.assert(isBig(4) === false)
console.assert(isBig(-64) === false)
console.assert(isBig(10007) === true)
console.assert(isBig(1742309) === true)


// write a function called addPeriod(). it should take as input a string, and return a copy of that string with a period on the end. 

console.assert(addPeriod('go away') === 'go away.')
console.assert(addPeriod('hi') === 'hi.')


// write a function called sayItTwice(). it should take as input a string ('bubble') and return that string repeated twice, with a space between ('bubble bubble').

console.assert(sayItTwice('yo') === 'yo yo')
console.assert(sayItTwice('humbert') === 'humbert humbert')


// write a function called firstShallBeLast(). it should add a copy of the first element of a string to the end of the string, then return the result.

console.assert(sayItTwice('smokey') === 'smokeys')
console.assert(sayItTwice('da') === 'dad')


// write a function called secondToLast(). it should return the second-to-last element of a string or array. 

console.assert(secondToLast('tuttifrutti') === 't')
console.assert(secondToLast('scooby') === 'b')
console.assert(secondToLast([10,20,30,40]) === 30)


// write a function called hasX(). it should take as input a string, and it should return true if the string contains the character 'x', and false if it does not.

console.assert(hasX('skrillex') === true)
console.assert(hasX('epoxy') === false)


// write a function called hasEl(). it should take two inputs: a string and a character. it should return true if the string contains the character, and false if it does not. if you get it right, try the function on an array and a potential array element instead. does it still work?

console.assert(hasEl('hambone',7) === false)
console.assert(hasEl('hambone','m') === true)
console.assert(hasEl('drumpf','p') === true)
console.assert(hasEl('drumpf','o') === false)
console.assert(hasEl(['a','b','c'],'c') === true)


// write a function called incrementEach(). it should take as input an array of numbers and return a new array that contains each number from the input array, increased by one.

var newArray = incrementEach([2,4,6,8])
console.assert(newArray[1] === 5)

var newArray = incrementEach([10,22,1000])
console.assert(newArray[2] === 1001)


// write a function called doubleAll(). it should take as input an array of numbers and return a new array that contains each number from the input array, doubled. 

var newArray = doubleAll([2,4,6,8])
console.assert(newArray[3] === 16)

var newArray = doubleAll([10,22,1000])
console.assert(newArray[1] === 44)


// write a function called getFirstLetterCaps(). it should take as input a string, and it should return a capitalized version of the string's first character.

console.assert(getFirstLetterCaps('gumby') === 'G')
console.assert(getFirstLetterCaps('optimus') === 'O')


// write a function called capitalizeWord(). it should take as input a string, and return a copy of that string with the first character capitalized. 

console.assert(getFirstLetterCaps('gumby') === 'Gumby')
console.assert(getFirstLetterCaps('optimus') === 'Optimus')


// write a function called capitalizeAllWords(). it should take as input an array of strings, and it should return a new array where all the words have been capitalized. HINT: use your capitalizeWord() function from above. 

var cappedWords = capitalizeAllWords(['gumby','wallace','grommit']) 
console.assert(cappedWords[1] === 'Wallace')

var cappedWords = capitalizeAllWords(['super','duper','stupid']) 
console.assert(cappedWords[2] === 'Stupid')


// write a function called arrayToString(). it should take as input an array, and it should concatenate all of the array's elements into one big string, and then return that string. 

console.assert(arrayToString(['gumby','wallace','grommit']) === 'gumbywallacegrommit')
console.assert(arrayToString(['super','duper','stupid']) === 'superduperstupid')


// write a function called shortiesOnly(). taking as input an array of strings, it should return a new array containing only those strings with fewer than four characters. 

var newArray = shortiesOnly(['big','freaking','deal','man']
console.assert(newArray[1] === 'man')

var newArray = shortiesOnly(['how','cold','is','it'])
console.assert(newArray[1] === 'is')


// write a function called reverseIt(). it should take as input a string or array (remember that we can often treat them the same way), and it should return a reversed version of that input. 

console.assert(reverseIt('gumby') === 'ybmug')
var newArray = reverseIt([1,2,3])
console.assert(newArray[0] === 3)


// write a function called getValue(). it should take two inputs: an object and a key. it should return the corresponding value for that key within the object. keep in mind that this should be a one-line function. no more than two. 

var obj = {color:'red',width:'500px'}
console.assert(getValue(obj,width) === '500px')


// write a function called getAllValues(). it should take as input an object, and it should return the values of all the keys in the object. 

var obj1 = {color:'red', width:'500px'}
var vals = getAllValues(obj1)
console.assert(vals[1] === '500px')

var obj2 = {age:22, birthday:'08/13/1908', memberSince: '08/13/2002'}
var vals = getAllValues(obj2)
console.assert(vals[1] === '08/13/1908')


// write a function called addProp(). It should take three inputs: an object, a property name, and a value. It should return the original object, plus a new key-value pair corresponding to the input.

var obj = {color:'red', width:'500px', display:'inline-block'}
var newObj = addProp(obj,'height','100px')
console.assert(newObj.height === '100px')
var newObj = addProp(obj,'visibility','hidden')
console.assert(newObj.visibility === 'hidden')


// write a function called getKeys(). it should take as input an object, and it should return the names of all the keys (properties) of the object.

var obj = {color:'red', width:'500px', display:'inline-block'}
var keys = obj.getKeys()
console.assert(keys[2] = 'display')

