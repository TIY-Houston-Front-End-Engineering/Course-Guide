#React.js Time Machine

## Requirements
Using the React.js framework, write a UI interface for a "time machine." The requirements for this interface are: 
  - A readout showing the "current year." 
  - A button that will set the machine on a continuous path forward in time, evidenced by an incrementing year counter.  
  - A button that will stop the machine's progress.
  - A button that will set the machine on a continuous path backward in time, evidenced by a decrementing year counter. 
  - If the machine is moving forward, there should be some indication that that's what's happening. e.g., the "forward" button should be extra bright. Same goes for a machine that is stopped or moving backward.  
  
## Adventure Mode 
  - When the user starts the machine on a path through the years, the progress should begin slow and accelerate with time, until the years are flying by in a blur.
  - When a user stops the progress of time, the progression of years should slow to a stop instead of stopping right away. 
  
## Hints/tools
  - You MUST use setState on your React component to make it automatically re-render upon changes in its data. 
  - If you use `setInterval` to make the years progress, you'll need to use `clearInterval` to stop the progression. 
  - For adventure mode, `setInterval` will probably not be the best solution. You'll need to refactor. If we've done any exercises with recursion, maybe you can draw inspiration from there. 

## Deliverables
  - A working, fully interactive site on heroku.
