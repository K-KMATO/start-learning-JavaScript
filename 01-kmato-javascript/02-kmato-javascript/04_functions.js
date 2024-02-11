// function
// function addTwoNumber(number1,number2)//para
// {
//     console.log(number1 + number2);
// }
// addTwoNumber(4,5)
// addTwoNumber(4,"2")
// addTwoNumber(4,"a")
// addTwoNumber()

function addTwoNumber(number1,number2)//parameter
{
  // let result = number1 + number2
  // console.log("imran");
  // return result
  return number1 + number2
}

const result =addTwoNumber(4,5)//argument
console.log("Result:", result)

// function isUserLoggedIn(user){

//   if(user === undefined){
//     console.log("please enter your userId")
//     return
//   }
// return `${user} logged in successfully`

// }

// console.log(isUserLoggedIn())



function isUserLoggedIn(user = "kmato"){

  if(!user){
    console.log("please enter your userId")
    return
  }
return `${user} logged in successfully`

}

console.log(isUserLoggedIn())


