 //scope 

//  let a = 200//global scope value
//  const b = 30
//  var c = 40

//  console.log(a);
//  console.log(b);
//  console.log(c);

//value let and const value will be inside the block of if statemet
 if (true){
  // variable declare inside block scope
   let a = 20
  //  const b = 30
  //  var c = 40
  //  console.log("inner value",a)//local scope value
 }
//not possible to called the inside of block scope value expect var variable
//  console.log(a);
//   console.log(b);
//   console.log(c);

//it will called global value which can be called inside the block scope
   let a = 20
   const b = 30
   var c = 40

 if (true){
  //global value called inside block scope
  //  console.log(a);
  //  console.log(b);
  //  console.log(c);
 }
function one(){
  const userName = "kmato"
  function two(){
     const userId = "kmato@197"
     const userDesination = "developer"
     console.log(userDesination)
    }
    console.log(userName)
  two()
}
one()


if(true){
  const newUser = "MaTo Khan"
  if(newUser === "MaTo Khan"){
    const userPosition = " Product Manager"
    console.log(newUser + userPosition);
  }
  // console.log(userPosition);//it will show error
}
// console.log(newUser);//it will be show the error


console.log(addOne(4))//first call and print the value before declaration function is possible
function addOne(value){
  return value + 1
}
// console.log(addOne(4))

// console.log(addTwo(3))//it will not possible because the function are declared as a variable 
const addTwo = function(value){
  return value + 2
}

console.log(addTwo(3))//it will be execute and upper called and declartion will be shown error