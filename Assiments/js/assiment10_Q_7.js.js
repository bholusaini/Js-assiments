function tossCoin() 
    {
  let randomNum = prompt("math.random");
    
  if (randomNum >1)
  {
    return "heads";
  } 
  else
  {
    return "tails"; 
  }
}

let userGuess = prompt("Heads or tails?");

let  coinTossResult = tossCoin();
if (userGuess === coinTossResult) {
  console.log("You win!"); 
}  
else {
  console.log("Bad luck!");
}
