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
// console.log("Result:", result)

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

// console.log(isUserLoggedIn())


// function calculateCartPrice(num1){
//   return num1
// }
// console.log(calculateCartPrice(100,200,300))//value will be first one only

function calculateCartPrice(...num1/*rest operator*/){
  return num1
}
// console.log(calculateCartPrice(100,200,300))//value will be return as array 


const allUser ={
  userName : "kmato",
  price : 999
}

function hadnleObject(objetHandle){
  // console.log(`user name is : ${objetHandle.userName} user price is :${objetHandle.price}`)
}

hadnleObject(allUser)//value pass by function from object allUser

hadnleObject({
  userName :"same",//value pass by function by direct 
  price:499
}) 

const newArray = [200,400,600,100]

function returnSecondValue (getArray){
  return getArray[1]
  
}

console.log(returnSecondValue(newArray))//value pass by function array form
console.log(returnSecondValue([400,500,100,200]))//value pass by function direct array form