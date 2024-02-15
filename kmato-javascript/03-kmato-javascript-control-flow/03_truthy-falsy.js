const user = "kmato"
if(user){
  console.log("user have access to login")
}else{
  console.log("user don't have access to login");
}

// falsy value
// fasle, 0, -0, "", null, undefined, NaN, BigInt 0n

// truthy value
// "0", '0', "false", " ", [], {}, function(){}


//empty array will be truthy value
const newUser =[]
if (newUser.length === 0){
  console.log("this is empty array element")
}else{
  console.log("this is not array element")
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
     console.log("this is empty object");
}else{
  console.log("this is not empty object")
}


// nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = 5 ?? undefined
val1 = null ?? undefined ?? 20

console.log(val1)


// terniary operator
// condition ? true : false // syntax

const bagPrice = 100
bagPrice <= 80 ? console.log("price less than 80") : console.log("price greater than 80")