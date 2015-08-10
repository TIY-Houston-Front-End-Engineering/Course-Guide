# rot13

## Objectives

After completing this assignment, you should be able to:

* Demonstrate understanding of functions, loops/array, String methods (`charCodeAt()`, `charCodeFrom()`), and variadic behavior
* Be able to breakdown a simple process of mathematical steps into a series of statements in JS

## Details

### Instructions

```sh
# cd into GH project folder
# then mkdir <projectName>
# then git init
# then 

curl https://raw.githubusercontent.com/matthiasak/js-assignments/master/rot13/rot13.js > rot13.js
```

then add your own remote with `hub create rot13`. Modify `rot13.js` to make the tests/assertions pass.

Test your code with `node rot13.js`

### Requirements

* All assertions in `rot13.js` pass

## Normal Mode

Fill in the sections marked with `YOUR CODE HERE` to make the tests/assertions pass.
            
## Hard Mode

In addition to the Normal Mode, let functions `encode()` and `decode()` accept an optional, second argument that takes a number `rotation`:

```js
encode("hello") //---> "uryyb"
decode("uryyb") //---> "hello"

encode("hello", 2) //---> "jgnnq"
decode("jgnnq", 2) //---> "hello"
```

## Resources

- http://en.wikipedia.org/wiki/ROT13
- http://devdocs.io/
