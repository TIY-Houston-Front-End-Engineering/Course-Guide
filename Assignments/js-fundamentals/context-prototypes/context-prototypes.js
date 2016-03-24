/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////                                                             ////
////    Code is in place       									 ////
////    that validates each answer. It will currently say:       ////
////    `Assertion failed` for each question. Once you answer    ////
////    the question correctly that will go away. Use this to    ////
////    check your work                                          ////
////                                                             ////
////                                                             ////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


// NOTE: You're not meant to edit any code except what's within the
// "Your Answer" arrows. The rest should remain fixed as is...

/////////////////////////////////////////////////////////////////////

// Part 0. ------------------------------------------------------------ //

// Create a simple constructor called "Person" that takes one input, the
// person's name. Add a method to the constructor's prototype called 
// sayMyName that will return the person's name.

// The person should also have an `age` property that always starts off
// as 0. Give the person an `.ageAYear` method that causes the person to 
// age by a year. 

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //

// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

var jim = new Person('james')
console.log(jim)
// the following assertion just checks that you've put sayMyName on the prototype,
// instead of just putting it in the constructor. 
console.assert(Person.prototype.sayMyName === jim.sayMyName)
console.assert(jim.sayMyName() === 'james')
console.assert(jim.age === 0)
jim.ageAYear()
console.assert(jim.age === 1)

// --------------------------------------------------------------- //

// Part 1. ------------------------------------------------------------ //

// Bind the ageAYear function on the Person prototype to the ajax object below. 
// store the bound function in a variable called ajaxAger. 

var ajax = {name: 'francis', age: 35, hometown: 'poughkeepsie'}
var ajaxAger

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //

// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //


console.assert(ajax.age === 35)
ajaxAger()
console.assert(ajax.age === 36)

// ============================================================== //

// Part 2. ------------------------------------------------------------ //

// The following object is array-like, but it doesn't
// share all the methods of an array, such as .indexOf() and 
// .join(). Using the .join() method on the Array prototype and the
// .call() method that's available on every function, join all of 
// the fabrics into a string, separated by a space, and store the 
// result into the variable `yourMansWardrobe.`


var mensShirtFabrics = {
	0: 'flannel', 
	1: 'fleece', 
	2: 'linen', 
	3: 'cotton', 
	4: 'chambray',
	length: 5
}

var yourMansWardrobe

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //

// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

console.assert(yourMansWardrobe === "flannel fleece linen cotton chambray")

// ============================================================== //


// Part 3. ------------------------------------------------------------ //

// The following function doesn't do us much good. It makes reference
// to `this`, but as it is, it's not inside of an object, so its 
// `this` keyword has no useful meaning. 

var getEmail = function() {
	var profileData = this.data
	var email = profileData.email
	return email
}

// So, bind getEmail() to the following object and store the resulting function 
// into the variable boundEmailGetter. Then we can use boundEmailGetter
// to log the email in our result object.

var resultObject = {
	meta: {
		results:72,
		status:"OK"
	},
	data: {
		name: "johannes schwimmer",
		birthday: "08-12-1975",
		email: "balalaikasAreMyLife@yahoo.com",
		profile_pic_url: "http://johannesschwimmer.com/sweetpics/me.png"
	}
}

var boundEmailGetter

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //

// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

console.assert(boundEmailGetter() === "balalaikasAreMyLife@yahoo.com")

// ============================================================== //


// Part 4. ------------------------------------------------------------ //

// This LoggingService constructor has some helpful methods on its prototype.
// Unfortunately, none of the record objects below it are instances of the
// logging service, so they don't have access to its oh-so-helpful methods.

// Use the .call method to invoke .toggleStatus on each of the record objects.
// Don't cheat and just change the status. We will find out, and we will
// never forget.

// Don't touch anything inside here VVV

var LoggingService = function(){
  this.totalLogs = 21222747
}

LoggingService.prototype = {

  getTotalLogs: function(){
    return this.totalLogs
  },

  toggleStatus: function(extraParam){
    console.log("look at my " + extraParam)
    if (!this.active) this.active = true
    else this.active = false
    this.updatedAt = new Date()
  }
}

var record1 = {
   gender: "female",
   username: "blackcat297",
   nat: "DE",
   dob: 745970316,
   active: true,
   updatedAt: "Mon Feb 1 2016 18:12:14 GMT-0600 (CST)"
}
var record2 = {
   gender: "male",
   user: "lazyrabbit954",
   email: "rabbiter2@mail.com",
   nationality: "MX",
   createdAt: 1003300218,
   active: false,
   updatedAt: "Mon Feb1 2016 18:12:15 GMT-0600 (CST)"
}
var record3 = {
  employer: "guinness",
  dob: 752129825,
  nat: 'IR',
  active: true,
  user: 'orangelion550',
  sex: 'male',
  active: true,
  updatedAt: "Mon Feb 1 2016 18:12:14 GMT-0600 (CST)"
}


// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //

LoggingService.prototype.toggleStatus.call(record1,)  
// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

console.assert( record1.active === false )
console.assert( record1.updatedAt.getMinutes() === (new Date()).getMinutes() )
console.assert( record2.active === true )
console.assert( record2.updatedAt.getMinutes() === (new Date()).getMinutes() )
console.assert( record3.active === false )
console.assert( record3.updatedAt.getMinutes() === (new Date()).getMinutes() )

// ============================================================== //
