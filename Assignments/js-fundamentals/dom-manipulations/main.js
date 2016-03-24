
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
})

var inactiveShowing = true
document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var userListEl = document.querySelector('#userList')
  var listItems = userListEl.querySelectorAll('li.inactive')
  for (var i = 0; i < listItems.length; i ++) {
    // userListEl.removeChild(listItems[i])  
    if (inactiveShowing) {
        listItems[i].style.display = 'none'
      }
    else {
      listItems[i].style.display = 'list-item'
    }
  }
  if (inactiveShowing) inactiveShowing = false
  else inactiveShowing = true
})

document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})