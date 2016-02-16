
var qs = function(cssSelct){
  return document.querySelector(cssSelct);
}

var qsAll = function(cssSelct){
  return document.querySelectorAll(cssSelct);
}

function answerQuestionFor(qId,fn){
  qs(qId+' button').addEventListener('click',function(){
    fn();
  })
}


function generatePromptAndDemoHTML(obj, index){
  var htmlString  = "<div class='prompt'>"
      htmlString +=   "<h3>Task #"+(index+1)+"</h3>"
      htmlString +=   "<p>"+obj.task+"</p>"
      htmlString += "</div>"
      htmlString += "<div class='content-box teacher-demo'>"
      htmlString +=   "<h4>Demo</h4>"
      htmlString +=   "<img src='"+obj.link+"' alt='effect'>"
      htmlString += "</div>"

  return htmlString
}

var tasks = [
  { 
    html_id: "pig-latin",
    task: "Make each element in the list read backwards.",
    link: "gifs/tasks.gif"
  },
  {
    html_id: "blow-up",
    task: "By manipulating the <code> &lt;div class='circle'&gt; </code> DOM element in JS, make the circle double height and width until its width is greater-than/equal-to 320px." +
          "</br></br>"+
          "At that point make it reduce back to its original size of 40px x 40px ",
    link: "gifs/circle-red.gif"
  },
  {  
    html_id: "reverse-squares",
    task: "Flip the squares to opposite order",
    link: "gifs/flip.gif"
  },
  {
    html_id: "color-circle",
    task: "Change the color of the circle from white to black, and vice-versa",
    link: "gifs/circle-bw.gif"
  },
  {html_id: "thanks",
  task: "Cause the browser to produce an alert box that says 'yowch! don't click me so hard!'",
  link: "gifs/yowch.gif"},
  {html_id: "double",
  task: "Each click of the button should double the value of the number below.",
  link: 'gifs/double.gif'
  },
  {html_id: "remove",
  task: "Remove each element of the list below that has the class 'inactive'.",
  link: 'gifs/remove.gif'
  },  
  {html_id: "cycle-image",
  task: "By increasing the number at the end of this image's 'src' attribute, you can cycle through different city photos. To cycle forever, you may need to use the % operator!",
  link: 'gifs/cities.gif'}
]

function findEl(els, fn){
  var foundEl = {}
  for (var i = 0; i < els.length; i++){
    
    if (fn(els[i],i,els) === true){
      foundEl = {
        el: els[i],
        index: i
      }
      break;
    } 
  }

  return foundEl
}

var exercises =  qsAll('.exercise-container')
tasks.forEach(function(t, i){
  var cssSelector="#"+t.html_id

  var el = findEl( exercises , function(el,i){
    return el.id === t.html_id
  })

  qs(cssSelector).innerHTML = generatePromptAndDemoHTML(t,el.index ) + qs(cssSelector).innerHTML
})


