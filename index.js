/* Given Code, don't edit */

function handleClick(e) {

  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))

}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
time = parseInt(string.slice(0,2))

if (time < 12){
return "Good Morning"
}
if (time > 17){
return "Good Evening".
}
}
/* Write your implementation of displayMessage() */
displayMessage(saying){
  elm = document.getElementById('greeting')
elm.innerText = saying
}
