// ***********************js object property******************


// properties are the values associated with a javascript objec.
//A javascript object is a collection of unordered properties.
// properties can usually be changed,added,and deleted, but some are read only.
// js for in loop

const obj1 = {
  firstName:"khan",
  secondName:"imran",
  age:21
}
for(let userDetails in obj1){
  // console.log(obj1[userDetails])
}
//add new properties
obj1.email="kmato@gmail.com"
for(let users in obj1){
  // console.log(obj1[users])
}
// console.log(obj1)

//deleteing properties
delete obj1.email
// console.log(user)

//nested object
const obj2 = {
  name:"kmato",
  age:21,
  car:{
    car1:"audi",
    car2:"bmw"
  }
}
// console.log(obj2.car.car2)

//nested array object
const obj3 = {
  name:"hellboud",
  age:21,
  car:[
    {name: "ford",model:[12,23,34]},
    {name:"bmw",model:[13,24,35]},
    {name:"audi",model:[14,25,36]}
  ]
}
for(let i in obj3.car){
  // console.log(obj3.car[i].name)
  // console.log(obj3.car[i].model)
}



//*****************javascript object methods *****************


const obj4 = {
     firstName:"khan",
     lastName:"imran",
     fullName: function(){
      return (this.firstName + this.lastName).toUpperCase()
     }

}
// console.log(obj4.fullName())



// *******************display object*************************


//--displaying the object properties by name 
//--displaying the object properties in a loop
//--displaying the object using Objec.values()
//-- displaying the object using JSON.stringify()

const obj5 = {
  userName:"kmato",
  userLoggedIn:"yes"
};
// console.log(obj5.userName)

//displaying the object in loop

for(let data in obj5){
  // console.log(obj5[data])
}

//using Oject.values()

const myArray = Object.values(obj5)
// console.log(myArray)

// using JSON.stingify()

const newString = JSON.stringify(obj5)
// console.log(newString)
const date = new Date()
// console.log(JSON.stringify(date))//converted the date into srings



/**************************getters and setters***************************/



//getter
const  obj6 = {
  firstName:"kmato",
  lastName:"khan",
  language:"eng",
  get lang(){
    return ( this.language).toUpperCase()
  }
}
// console.log(obj6.lang)


//setter

const obj7 = {
  firstName:"kmato",
  lastName:"khan",
  language:"hindi",
  set bhasa(lang){
    this.language = lang.toUpperCase()
  }
}

obj7.bhasa = "english"
// console.log(obj7.language)

const obj = {
  counter:100
}
Object.defineProperty(obj,"reset",{
  get:function() {this.counter = 0}
})
Object.defineProperty(obj,"add",{
  set:function(value) {this.counter += value}
})
Object.defineProperty(obj,"sub",{
  set:function(value) {this.counter -= value}
})
obj.reset
obj.add = 12
obj.sub = 1
// console.log(obj.counter)



/*****************************Object Constructors******************************** */




function Person(first,last,age,eye){
  this.firstName = first
  this.lastName = last
  this.age = age
  this.eyeColor = eye
}

 const details = new Person("kmato","khan",21,"black")
//  console.log(details.eyeColor)

// Object Types (blueprints) (classes)

const myFather = new Person("eayfae ","qwfqwjf",43,"black")
const mother = new Person("fhaoaoh","fasfjpa-w3",38,"black")
// console.log(myFather.lastName)

myFather.language = "Hindi"
// console.log(myFather.language)// adding a property to an object

myFather.name = function(){//adding a method to an object
  return this.firstName + this.lastName
}
// console.log(myFather.name())

Person.nationality = "indian"// adding a propety to a constructor


// function Person(first,last,age,eye){
//   this.firstName = first
//   this.lastName = last
//   this.age = age
//   this.eyeColor = eye
//   this.name = function(){// adding a method to a constructor
//     return this.firstName + this.lastName
//   }
// }



/****************************object prototypes********************************* */
function People(first,last,age){
  this.firstName = first
  this.lastName = last
  this.age = age
  this.nationality = "indian"//new property add to a constructor
}
const userDetails = new People("kmato","khan",21)
// console.log(userDetails.nationality)


// adding properties and methods to objects
// using the prototype Property
function AboutUser(first,last,age){
  this.firstName = first
  this.lastName = last
  this.age = age
}
AboutUser.prototype.nationality = "indian"
const x = new AboutUser()
// console.log(x.nationality)

// add new methods with the help of prototype to object constructor
function AnotherUser(first,last,age){
  this.firstName = first
  this.lastName = last
  this.age = age
}
AnotherUser.prototype.name = function(){
  return this.firstName + this.lastName
}
const y = new AnotherUser("kmato","khan",21)
// console.log(y.name())


/**********************************************object iterables************************************** */

//iterable over string
const name = "kmato"
for(const x of name){
  // console.log(x)
}

// iterable over array

const arr = [1,2,3,4,5,6,7,8,9,0]
for(const x of arr){
  // console.log(x)
}

// home made iterable

function myNumbers(){
  let n = 0
  return{
    next: function(){
      n += 10
      return {value:n, done:false}
    }
  }
}
const n = myNumbers()
// console.log(n.next())
// console.log(n.next())
// console.log(n.next())//this iterable return never ending

// symbol.iterator

userNumber = {}
userNumber[Symbol.iterator] = function(){
  let n = 0 
  done = false
  return{
    next() {
      n += 10
      if (n==100) {done = true}
      return {value:n, done:done}
    }
  }

}
for(const num of userNumber){
  // console.log(num)
}


/***************************Object Sets******************************** */

// const letters = new Set(["1","2","3","4"]);

const letters = new Set()//create a Set and add literal values
letters.add("a")
letters.add("b")
letters.add("c")
// console.log(letters)

const a = "a"
const b = "b"
const c = "c"//create a variable
const anotherLetters = new Set()//create Set 
anotherLetters.add(a)
anotherLetters.add(b)
anotherLetters.add(c)//add variables to the Set
// console.log(anotherLetters)


// forEach() method

const newLetters = new Set(["1","2","3","4","5"])
newLetters.forEach(function(value){
    //  console.log(value)
})


// the vaues() Method
// console.log(newLetters.values())//return [Object Set Iterator]
const myIterator = newLetters.values()//use the Iterator object to access the elements:
for(const entry of myIterator){
  // console.log(entry)
}
/******** the keys() method return the same as value() */
// console.log(newLetters.keys())////return [Object Set Iterator]

const newIterator = newLetters.keys()//use the Iterator object to access the elements:
for(const x of newLetters){
  // console.log(x)
}


// entries() Method

const entryIterator = newLetters.entries()
// console.log(entryIterator)// entries () return [value,value] pairs instead of [key,value] pairs
for(const y of entryIterator){
  // console.log(y)
}

// console.log(typeof entryIterator)// return object
// console.log(newLetters instanceof Set)//return true


/*********************************Map methods************************************ */

// new Map

const fruits = new Map([
  ["apple",500],
  ["banana",200],
  ["oranges",400],
])
//  console.log(fruits)

// create a Map
const anotherFruits = new Map()
//add elemenet with the help of set()
anotherFruits.set("apple",100)
anotherFruits.set("graps",500)
// console.log(anotherFruits)

// clear method remove all the element from map

// anotherFruits.clear()
// console.log(anotherFruits)


// Map.has() method returns true if a key exixt in a map
// console.log(anotherFruits.has("graps"))




// Map.forEach() method invokes a callback for each key/value pair in a Map

fruits.forEach(function(value,key) {
  // console.log(key,value)
});

//Map.entries method returns an iterator object with the [key,value] in map
for(const x of fruits.entries()){
  // console.log(x)
}


// keys() method returns an iterator object with the keys in a Map
for(const y of fruits.keys()){
  // console.log(y)
}

// values() method returns an iterator object with values in Map
for (const x of fruits.values()){
  // console.log(x)
}

//Sum all the values
let total = 0
for(const a of fruits.values()){
  console.log(total += a)
}

// objects as Keys 
const apples = {name:"apple"}
const bananas = {name:"banana"}
const newFruit = new Map()//create a map
newFruit.set(apples,500)//add new element
newFruit.set(bananas,400)
console.log(newFruit)