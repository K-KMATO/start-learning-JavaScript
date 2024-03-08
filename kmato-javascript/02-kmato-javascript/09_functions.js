/*********************javascript function********************************* */

function firstFunction(a,b){
   return a * b//code to be executed
}
firstFunction(5,7)
// declared functions are not executed immediately.They are "saved for later use", and will be executed later, when they are invoked (called upon)


//function expression 
const x = function(){
  // console.log("anonymous function ")
}
x()//invoking a variable which are holding a function value


//Function Constructor
const secondFunction =  new Function("a","b", "return a * b")
// console.log(secondFunction(12,34))

//function Hoisting
thirdFunction(4)
function thirdFunction(y){
  // return console.log(y * y)
}

// iife (immediately invoked function execution)//self-invoking Functions
(function(){
  // console.log("Hi my-self iife (immediately invoked function execution")
}())

// arrow function
var a = function(){
  // console.log("im ES5 function")
}
a()

var b = () =>{
  // console.log("Im ES6 Function")
}
b()//arrow function are not hoisted. They must be defined before they are used.

/**********************Function parameter****************** */

function functionName(parameter1,parameter2,parameter3){
  // console.log(`firstName:${parameter1} secondName:${parameter2} thirdName:${parameter3}`)
}
functionName("khan","imran","ahmad")


// Function rest Parameter 
function sum(...args){
  let sum = 0
 for(let arg of args) sum += arg;
 return sum
}

const y =sum(1,23,3,4,5,6)
// console.log(y)


//the urguments object
function fourFunction(){
  let sum=0
  for (let x of arguments){
     sum += x
  }
  // console.log(sum)
}
fourFunction(1,6,8,3,0,8)

/************* Function invocation ***************/
function invokingFunction(a,b){
  // console.log(a * b)
}
invokingFunction(12,3)

// the global object
let fun = newFunction()
function newFunction(){
    // console.log(this)
}

//invoking a function as method

const myObj = {
  firstName:"kmato",
  lastName:"khan",
  fullName: function(){
    return this.firstName + this.lastName
  }
}
// console.log(myObj.fullName())


//invoking a function with a function Constructor
function sixFunction(value1,value2){
  this.userFirstName = value1
  this.userLastName = value2
}
const newObj = new sixFunction("KMATO","KHAN")
// console.log(newObj.userFirstName)

//javascript function call()
const person = {
    firstName:"kmato",
    lastName:"khan",
    fullName:function () {
      return this.firstName + this.lastName
    }
}
// console.log(person.fullName())




/**************************function call****************** */
// the javasript call() method

const person1 ={
 fullName: function(){
  return this.firstName + this.lastName
 }
}
const person2 = {
  firstName:'kmato',
  lastName:'khan'
}
const person3 ={
    firstName:"imran ",
    lastName: " khan"
}
// console.log(person1.fullName.call(person3))//with call() and object can user a method belonging to another object

// call method with arguments
const anotherPerson = {
  fullName:function(city,country){
   return this.firstName + this.lastName + city + country
  }
}
const newPerson ={
  firstName:"khan",
  lastName:"imran"
}
// console.log(anotherPerson.fullName.call(newPerson,"bhiwandi","india"))



/**********************function apply*********************** */
//apply
const people = {
  fullName:function(){
    return this.firstName + this.lastName
  }
}
const newPeople ={
  firstName:"kmato",
  lastName:"khan"
}
console.log(people.fullName.apply(newPeople))//apply method is similar to the call() method 

//call apply() method with arguments
const newArg = {
  fullName:function(city,country){
    return this.firstName + this.lastName + city + country
  }
}
const anotherOrg = {
  firstName:"imran",
  lastName:"khan"
}
// console.log(newArg.fullName.apply(anotherOrg, ["bhiwandi","india"]))//apply method accepts arguments in an arry


//simulate a max method on arrays
const num = (1,3,5,23,7,65)
// console.log(Math.max(num))

// console.log(Math.max.apply(null,[21,3,4,5,2,44,90]))//JavaScript arrays do not have a max() method, you can apply the Math.max() method instead


/******************Function bind() */
const user ={
  firstName:"hell",
  lastName:"bound",
  fullName:function(){
    return this.firstName + this.lastName
  }
}
const member ={
  firstName:"imran",
  lastName:"khan"
}
let fullName = user.fullName.bind(member)
// console.log(fullName())

//preserving this
const newMember = {
  firstName:"kmato",
  lastName:"khan",
  fullName : function(){
    return this.firstName + this.lastName
  }

}
// console.log(newMember.fullName())

// when a function is used as callback,this is lost 
const another = {
  firstName:"salman",
  lastName:"khan",
  fullName:function(){
    return this.firstName + this.lastName
  }
}
// console.log(setTimeout(another.fullName,2000))//person name after 2 second, but it will display undefined instead


// bind() method solve this problem
const anotherUser ={
  firstName:"zackie",
  lastName:"chain",
  fullName:function(){
    return console.log(this.firstName + this.lastName)
  }
}

let i = anotherUser.fullName.bind(anotherUser)
setTimeout (i,3000)
// console.log(i)