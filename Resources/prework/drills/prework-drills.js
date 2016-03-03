// write a function called addOne() that takes a number as input and returns a new number that's one more than the input.

// write a function called doubleNum() that takes a number as input and returns the double of the number. 

// write a function called isNegative(). it should take a single, numerical input. it should output true if the number is negative, and false if the number is positive.

// modify isNegative() so that it only accepts numerical input. it should return the string, "input must be a number," if bad input has been submitted.

// write a function called isEven() that tells whether a number is even or not. 

// write a function called isBig() that tells whether a number is greater than 10,000 or not.

// write a function called addPeriod(). it should take as input a string, and return a copy of that string with a period on the end. 

// write a function called sayItTwice(). it should take as input a string ('bubble') and return that string repeated twice, with a space between ('bubble bubble').

// write a function called firstShallBeLast(). it should add a copy of the first element of a string to the end of the string, then return the result.

// write a function called secondToLast(). it should return the second-to-last element of a string or array. 

// write a function called hasX(). it should take as input a string, and it should return true if the string contains the character 'x', and false if it does not.

// write a function called hasEl(). it should take two inputs: a string and a character. it should return true if the string contains the character, and false if it does not. if you get it right, try the function on an array and a potential array element instead. does it still work?

// write a function called incrementEach(). it should take as input an array of numbers and return a new array that contains each number from the input array, increased by one. 

// write a function called doubleAll(). it should take as input an array of numbers and return a new array that contains each number from the input array, doubled. 

// write a function called getFirstLetterCaps(). it should take as input a string, and it should return a capitalized version of the string's first character.

// write a function called capitalizeWord(). it should take as input a string, and return a copy of that string with the first character capitalized. 

// write a function called capitalizeAllWords(). it should take as input an array of strings, and it should return a new array where all the words have been capitalized. HINT: use your capitalizeWord() function from above. 

// write a function called arrayToString(). it should take as input an array, and it should concatenate all of the array's elements into one big string, and then return that string. 

// write a function called shortiesOnly(). taking as input an array of strings, it should return a new array containing only those strings with fewer than four characters. 

// write a function called reverseIt(). it should take as input a string or array (remember that we can often treat them the same way), and it should return a reversed version of that input. 

// write a function called getValue(). it should take two inputs: an object and a key. it should return the corresponding value for that key within the object. keep in mind that this should be a one-line function. no more than two. 

// write a function called getAllValues(). it should take as input an object, and it should return the values of all the keys in the object. 

// write a function called addProp(). It should take three inputs: an object, a property name, and a value. It should return the original object, plus a new key-value pair corresponding to the input.

// write a new version of addProp() that only takes two inputs: an object, and a second object containing a single key-value pair. this key-value pair should take the place of the second and third inputs in the above problem. e.g.:

	// var usrObj = {name: 'linus odoyle', age:10, email:'odoylerules@yahoo.com'}

	// var newObj = addProp(usrObj,{hometown:'new orleans'})
	// newObj should look like this: 
	// {name: 'linus odoyle', age:10, email:'odoylerules@yahoo.com',hometown:'new orleans'}
	// if i run:
		// var newObj = addProp(newObj,{hobby:'bullying'})
		// then newObj should contain even more data:
		// {name: 'linus odoyle', age:10, email:'odoylerules@yahoo.com', hometown:'new orleans', hobby:'bullying'}

// write a function called getKeys(). it should take as input an object, and it should return the names of all the keys (properties) of the object.

// write a function called addPropAll(). it should take three inputs: an array of objects, a property name, and a value. it should return a new array of objects, where each object has been supplemented with the key-value pair from the input. 

// modify addPropAll() in the same way that you modified addProp above. it should take two inptus, an array of objects and a single object containing a single key-value pair. it should return a new array of objects, where each object has been supplemented with the key-value pair from the input.

// write a function called logValues() that takes two inputs: an array of objects, and a property name. for each object in the array, it should log the value stored under the given property name within that object. 

// write a function called getSpecificValues() that takes two inputs: an array of objects, and a property name. it should return an array containing the value stored under that property name for each object. for example, getSpecificValues(booksArray,'author') should return an array containing the author of every book object in the array. 