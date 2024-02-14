//intermediate invoked function expression(IIFE)

// iife using function 
(function gamer(){
  //name IIFE
  console.log("database connected one")
})();//semicolon required for the end iife function 

// iife using arrow function

(() => {
  // without named IIFE (arrow function)
  console.log("database connected two")
})();

((name) => {
  // without named IIFE with parameter passed
  console.log({name})
})("imran ahmad khan");//before semicolon you can make two or more function in IIFE


