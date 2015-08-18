The purpose of this assignment is to build your comfort and versatility with the command line. The Mac operating system is often called "UNIX-like." Feel free to delve into the history of UNIX, Linux, and Mac and get the full story on this, but suffice it to say that you are learning how to work closely with a very elegant operating system --- that is, you are becoming more like a mechanic tooling around with an engine and less like a driver pressing the gas pedal. **Nearly every job description for programmers is going to ask for someone with Linux skills/experience. This is what that means!***

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

I should be able to run shellby.sh with the command "sh shellby.sh" and see the following directory structure as a result:

          __ README
         |
shellby -|            __fizz.txt
         |__ texts - |
                     |__buzz.txt
                     
I should also be able to open the README and see the word "fizzbuzz." 

