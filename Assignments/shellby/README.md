The purpose of this assignment is to build your comfort and versatility with the command line. The Mac operating system is often called "UNIX-like." Feel free to delve into the history of UNIX, Linux, and Mac and get the full story on this, but suffice it to say that you are learning how to work closely with a very elegant operating system. You are also becoming more like a mechanic tooling around with an engine and less like a driver pressing the gas pedal. 

**Nearly every job description for programmers is going to ask for someone with Linux skills/experience. This is what that means!**

Write a shell script* that will:

* create a directory (folder) called "shelby"
* cd (change directory) into that folder
* create four empty files within shelby/
  * README
  * fizz.txt
  * buzz.txt
  * deleteme.txt
* write the text "fizzbuzz" into the README file
* make a new directory called "texts"
* move all files ending with .txt into that new dir (in one line)
* delete deleteme.txt

I should be able to run shellby.sh with the command "sh shellby.sh" and see a new directory structure created. The folder "shellby" should contain the file "README" and the subfolder "texts." The subfolder texts should contain the files "fizz.txt" and "buzz.txt". I should also be able to open the README and see the word "fizzbuzz." 

For your convenience, I've included a sample shell script that does something similar. Feel free to copy and paste it, try it out, edit it, play around, etc. Run it with the command "sh finnegan.sh" and see what it does!

**Hard Mode:**

Add functionality to your shell script so that it will also:

* create, in the "texts" subfolder, a folder called "news."
* create, in the "news" subfolder, a file called "times.txt" that contains all the HTML text currently on the New York Times home page. This can be done in one relatively simple terminal command. 
* find all the lines from times.txt that contain the word "America" and write them into a file called "national.txt." This can also be done with one concise command. 

While working on this and any other assignments, if you don't know something, **look it up!** There is a very robust online community that provides hints, answers, tutorials, cheatsheets, commiserations, and all other forms of assistance with this stuff. 

*A shell script is just a sequence of Linux commands listed in a single file. That file can be executed by the terminal by running a command like "sh [the name of your script]." Note that you might hear me use terminology like Terminal, bash, shell, Linux, and UNIX almost interchangeably with reference to these sorts of commands. Feel free to research or ask me about the fine distinctions, but they are all in a similar milieu. 
