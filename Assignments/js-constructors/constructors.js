/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////                                                             ////
////      _____              __               __                 ////
////     / ___/__  ___  ___ / /_______ ______/ /____  _______    ////
////    / /__/ _ \/ _ \(_-</ __/ __/ // / __/ __/ _ \/ __(_-<    ////
////    \___/\___/_//_/___/\__/_/  \_,_/\__/\__/\___/_/ /___/    ////
////                                                             ////
////    In the examples below make sure you name each            ////
////    constructor differently as to not override eachother.    ////
////    I need to be able to test them in gh-pages on the        ////
////    console. Also make sure there are no javascript errors   ////
////    and check your code in js hint. Finally make sure it     ////
////    is formatted/indented correctly. Code is in place        ////
////    that validates each answer. It will currently say:       ////
////    `Assertion failed` for each question. Once you answer    ////
////    the question correctly that will go away. Use this to    ////
////    check your work                                          ////
////                                                             ////
////                                                             ////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////

// 1. ------------------------------------------------------------ //

// Create a simple constructor function called `Foo` and create a new
// instance from it called `foo`.

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //



// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

console.assert(foo instanceof Foo);

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 2. ------------------------------------------------------------ //

// Create a constructor function called `Dog` that sets a property
// on itself within the constructor. The property should be called
// `says` and the value should be `life is ruff`

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //



// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

console.assert(new Dog().says === "life is ruff");

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 3. ------------------------------------------------------------ //

// Create a constructor function called `Cat` that has a method on
// it's prototype called `growl` that returns the string `meow`.
// create an instance of this called `cat`

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //



// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

console.assert(cat instanceof Cat);
console.assert(cat.growl() === "meow");

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 4. ------------------------------------------------------------ //

// Create a constructor called `KeepSecret`. The constructor function
// itself should accept a parameter called `secret` it should store
// this in a private variable (use a closure). Add a method to the
// prototype that is called `squeal` that returns the secret string.

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //



// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

var mySecret = "My class rocks!";
var dontTellNobody = new KeepSecret(mySecret);
console.assert(dontTellNobody.squeal() === mySecret);

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 5. ------------------------------------------------------------ //

// Create a constructor called `Key`. Create another constructor
// called `Safe`. Make the Safe constructor take 2 arguments. The
// first argument can be any piece if data to keep safe. This must
// be stored using a private variable like you did with KeepSecret.
// The 2nd param to the `Safe` constructor needs to be an instance
// of `Key` you need to store it privately as well. Add a function
// to the Safe prototype called `unlock` that accepts a key. If the
// key matches the key that was used to create the Safe; then return
// the secret data.

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //



// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

var sensitive = "shhhhh!";
var rightKey  = new Key();
var wrongKey  = new Key();
var safe      = new Safe(sensitive, rightKey);

console.assert(safe.unlock(wrongKey) !== sensitive);
console.assert(safe.unlock(rightKey) === sensitive);

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////                                                             ////
////                  ___                                        ////
////                 / _ )___  ___  __ _____                     ////
////                / _  / _ \/ _ \/ // (_-<                     ////
////               /____/\___/_//_/\_,_/___/                     ////
////                                                             ////
////                                                             ////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// Bonus. -------------------------------------------------------- //

// Create a constructor called `Validator`. Give it a method on it's
// prototype called `email` that takes a string and returns true if
// the string is a valid email address and false if it is not.

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //



// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

if (typeof Validator === "function") {
  var valid = new Validator();
  console.assert(valid.email("name@theironyard.com"));
  console.assert(!valid.email("name-at-theironyard.com"));
}

// --------------------------------------------------------------- //