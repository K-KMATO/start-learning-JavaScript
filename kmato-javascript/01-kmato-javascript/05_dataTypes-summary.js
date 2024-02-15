// primitive dataTypes --> string, number, undefined, null, boolean, symbol, bigInt;

let myName = "Kmato" // typeof will return string
let myAge = 21 // typeof will return number
let myHeight = undefined // typeof will return the undefined
let myLife = null // typeof will be return the object
const myId = Symbol("1508") // typeof will return the symbol 
let myMarriege = false // typeof will return the boolean
let myAccount = 57659374239353975396739n // typeof will return the bigInt

// console.table([myName,myAge,myHeight,myLife,myId,myMarriege,myAccount]);
// console.log(typeof myName)
// console.log(typeof myAge)
// console.log(typeof myHeight)
// console.log(typeof myLife)
// console.log(typeof myId)
// console.log(typeof myMarriege)
// console.log(typeof myAccount)

// reference dataTypes (Non-primitive)--> Array, object, function

let student = new Array("imran","Kmato","immu");
// console.log(student)
// console.log(typeof student)

const superHero = ["Batman","Thor","IronMan"];
// console.log(superHero)
// console.log(typeof superHero)

let myObj = {
    name : "imran",
    age : 21,
    dateOfBirth : "15 august"
}
// console.log(myObj)
// console.log(typeof myObj)

function myFunction(){

}
console.log(typeof myFunction)



// Array and object dataTypes will return typeof data will be Object 
// function dataTypes Will return typeof Data will be function

