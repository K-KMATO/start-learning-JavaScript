const name = "Kmato"//this is premitive string
const myNumber = 9370410243

// console.log(name + myNumber + "value")

// console.log(`my name is : ${name.length} and my mobile number is: ${myNumber}`) //MODERN WAY TO CALL THE VARIABLE ITS CALLED STRING INTERPOLATION

const myName = new String("Imran Ahmad Khan")//this is string object










// Basic String Methods
// Javascript strings are primitive and immutable: All string methods produces a new string without altering the original string.

// String length
// String charAt()
// String charCodeAt()
// String at()
// String [ ]
// String slice()
// String substring()
// String substr()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String repeat()
// String replace()
// String replaceAll()
// String split()

// the escape sequence \"insert doble quate\"
let oldText = "my-self \"imran\" from bhiwandi"
console.log(oldText)

// insert \' single quate in a string
let anotherText = 'it\'s time to show the power of education'
console.log(anotherText)

// the escape sequence \\ insert a backslash in a string
let newText = "the \\ character is called backslash."
console.log(newText)

// try it also

// Code	Result
// \b	Backspace
// \f	Form Feed
// \n	New Line
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator



// There are 4 methods for extracting string characters:

// The at(position) Method
// The charAt(position) Method
// The charCodeAt(position) Method
// Using property access [] like in arrays
var printMesssage = "Hello World"
console.log(printMesssage.charAt(0))
console.log(printMesssage.at(1))
console.log(printMesssage.charCodeAt(0))
console.log(printMesssage[2])


// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

let fruit = "Apple, Orange, Banana"
console.log(fruit.slice(7,11))
console.log(fruit.slice(-12,-8))//string from -12 position to -10 position
console.log(fruit.substring(7,2))//substring method in javascript not accept negative values as parameters
console.log(fruit.substr(6,4))

// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():
console.log(fruit.toUpperCase())
// A string is converted to lower case with toLowerCase():
console.log(fruit.toLowerCase())


// JavaScript String concat()
// concat() joins two or more strings:
let text1 = "hello "
let text2 = " world"
console.log(text1.concat(text2))
console.log("hello ".concat(" world!"))


// JavaScript String trim()
// The trim() method removes whitespace from both sides of a string:

let anotherText1 = "      kmato     "
console.log(anotherText1.trim())
console.log(anotherText1.trimStart())//trimStart() method work like trim() but it will remove whitespace from start only
console.log(anotherText1.trimEnd())//trimeEnd() method work like trim() but remove whitespace only from end



// String padStart(), padEnd()
// It pads a string with another string (multiple times) until it reaches a given length.

let padString = "9"
// padString= padString.padEnd(8,"0")//
padString= padString.padStart(8,"0")
console.log(padString)//padStart()
//Work with number
let numb = 4
let character = numb.toString()
console.log(character.padStart(3,0))
console.log(character.padEnd(3,0))




// JavaScript String repeat()
// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.

let greet= "Hello Programmer "
console.log(greet.repeat(3))




// Replacing String Content
// The replace() method replaces a specified value with another value in a string:

let greeting = "please visit Microsoft Microsoft MICROSOFT!"
console.log(greeting.replace("Microsoft","my Office"))
console.log(greeting.replace(/Microsoft/g,"my home"))//f you want to replace all matches, use a regular expression with the /g flag set.

console.log(greeting.replace(/MICROSOFT/i,"welcome"))//To replace case insensitive, use a regular expression with an /i flag (insensitive):

console.log(greeting.replaceAll("Microsoft","kmato"))
console.log(greeting.replaceAll(/MICROSOFT/g,"imran"))

// JavaScript String split()
// A string can be converted to an array with the split() method:
let newArr= "Imran"
const myArray=newArr.split("")
console.log(myArray)
for(const index of myArray){
  console.log(index)
}