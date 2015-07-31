# Chatti

## Description

Hey. Ever used Slack? Or Cmd + Space on Mac? Well, great! You've been hired by Chatti Enterprises to
prototype a new chat feature in their application. They're really keen on having a bot feature.

The way it works is:

When a user types in a chat message that begins with a colon `:`, the chat program will run a command.

So, if the user types this into the chat application:

    :calc 2 + 2

The bot will reply with:

    2 + 2 = 4

The chat can also look up weather. If the user types in:

    :temp Durham, NC

The bot will reply with:

    It's 75° in Durham, NC

There are many commands that the company would like to eventually incorporate:

    :help - replies with the list of all supported commands
    :temp - replies with the temperature of the specified location
    :weather - replies with the forecast for the specified location
    :gh - replies with profile information about the specified github user
    :etsy - replies with the top few listings for an Etsy search
    :es - replies with the spanish translation
    :fr - replies with the french translation
    :gif - replies with a gif from giphy
    :bg - changes the background color
    :whatis - replies with the definition of the specified word/phrase
    :wiki - replies with the wikipedia article matching the query

But after you've implemented a few of these, you can also come up with your own!

### Notes

- You can see a working example of Chatti here:
  - http://youtu.be/uocGQizTZBs

- Here's a good place to find APIs:
  - http://www.programmableweb.com/apis/directory

- Here's a dictionary API to translate single words from one language to another:
  - https://glosbe.com/a-api

## Objectives

After completing this assignment, you should…

- Be able to use AJAX to call web APIs
- Be able to parse user input
- Use templates to generate HTML

### Deliverables

- An app running on gh-pages, containing at least:
  - `index.html`
  - One or more CSS files (e.g. `css/main.css`)
  - One or more JavaScript files (e.g. `js/main.js`)

## Normal Mode

The app should:

- Display individual chat messages when the user hits the enter key
- Support at least 2 different API calls
- Each command's response should have a unique style/layout (icon/photo, colors, etc)

## Hard Mode

Normal mode plus at least 3 of the following:

- Support for the `:calc` command using [JavaScript's Function object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- Support for at least 5 APIs