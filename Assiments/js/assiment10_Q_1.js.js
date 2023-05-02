
const guestList = ['back-bancher', 'tiger', 'bksarwal', 'boss'];
function allowed(name) {
  return guestList.includes(name);
}

console.log(allowed('back-bancher'));    
console.log(allowed('boss'));     
console.log(allowed('bksarswal'));     

const name = prompt('What is your name?');
if (allowed(name)) {
  console.log("well-come",);
} else {
  console.log("sorry u are not allowed");
}
