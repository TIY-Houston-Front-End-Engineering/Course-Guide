#Drills 

## Summary

After the second week of JavaScript instruction in the FEE class, the exercises included in `drills.js` should be an accurate reflection of a student's skills. As part of your prework, work through *as many of these drills as you can*. We recommend at least trying each of them. They are the *best* reflection of what this course will be like, and of the skills that you'll need to have as an entry-level JavaScript developer. Note that this is not an admissions test; our expectation is that you'll be able to successfully complete few, if any, of these drills. We expect exposure to this material, not proficiency with it. If your studies here generate questions for your potential instructor, that will be a big plus in your enrollment interview. 


## How to

### Prerequisites

It's recommended that you don't attempt the drills until you've done the following: 

  - Work through the JavaScript tutorials in CodeAcademy or Treehouse. You'll need those basics. 

  - You'll also need some basic Terminal/linux/bash commands and skills. Tutorials for these, as well as JavaScript, HTML, CSS and git, are all linked on the [general readme for the prework](https://github.com/TIY-Houston-Front-End-Engineering/Course-Guide/blob/master/Resources/prework/prework.md)

  - You'll need to have `Node.js` installed. [This site](https://docs.npmjs.com/getting-started/installing-node) contains installation instructions. 


### Modifying `drills.js`

In the terminal, navigate to the directory you want to work in. Enter the following command: `curl https://github.com/TIY-Houston-Front-End-Engineering/Course-Guide/blob/master/Resources/prework/drills/drills.js > drills.js`. 

Open `drills.js` in your favorite code editor (hopefully Sublime). After each prompt, you need to write a function that executes the task described. You can use `console.log` statements to check the output of your functions, or the values of the variables you're working with. 

But how will you execute this code?


### Running `drills.js`

In the terminal, make sure you're still navigated to the directory that `drills.js` is located in. If you have node installed, you should be able to run the command `node drills.js`, and your JavaScript code will be executed in the Terminal. Errors readouts will appear there in the Terminal, and `console.log` statements will print in the Terminal.


### Validation 

Each exercise is followed by some validation code — those mysterious `console.assert` statements you see below each prompt. If the equality statement in the assertion is not true, after you've written your solution, your solution is not good. You'll see an `assertion error` when you run your file in the console. The error readout will be pretty confusing. It will seem that there are many errors in many files. Look for the line that reads like this: 

`/some/long/filepath/peculiar/to/your/computer/then/actually/drills.js:130`

This means the error occurs on line 130 of `drills.js`. Essentially, you're not concerned with any error reporting other than the error that occurs in `drills.js`. 

Debug, troubleshoot, and problem-solve until you don't get the same assertion error any more. The line number should then jump down, as the first detected error will now be further down the page. If you want to skip a problem, comment-out the `console.assert` for that problem, so that it will be ignored.
