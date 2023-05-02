const luckynumber = Math.floor(Math.random () * 90)+11;
const guess = prompt("guess the luckynumber upto 10");
if(guess==luckynumber){
    console.log("congr.u guess the lucky number ")
}
else{
    console.log("sorry, luckynumber was ${luckynumber}")
}