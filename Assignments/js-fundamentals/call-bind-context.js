// part 0: make a constructor that will return the object's name. 

var jim = new Person('james')
console.assert(jim.sayMyName() === 'james')


// part 1: bind method X to the object `anonymous`

var ajax = {name: 'francis', age: 35, hometown: 'poughkeepsie'}
var ajaxAnnouncer = jim.sayMyName.bind()
console.assert(ajaxAnnouncer() === 'francis')

// part 2: more practice a la homeless meth.

// part 3: the following object is array-like, but it doesn't
// share all the methods of an array, such as .indexOf() and 
// .join()

var shirtFabrics = {
	0: 'flannel', 
	1: 'fleece', 
	2: 'linen', 
	3: 'cotton', 
	4: 'chambray',
	length: 5
}

var shirtIndex

// use the .call method on the 

console.assert(shirtIndex === 3)
