const name = "Kmato"//this is premitive string
const myNumber = 9370410243

// console.log(name + myNumber + "value")

// console.log(`my name is : ${name.length} and my mobile number is: ${myNumber}`) //MODERN WAY TO CALL THE VARIABLE ITS CALLED STRING INTERPOLATION

const myName = new String("Imran Ahmad Khan")//this is string object

// In string there is 1 property (length)
// In string there is 
// charAt()	Returns the character at a specified index (position)
console.log(myName.charAt(0))
// charCodeAt()	Returns the Unicode of the character at a specified index
 console.log(myName.charCodeAt(1))
// concat()	Returns two or more joined strings
console.log(myName.concat(name))
// constructor	Returns the string's constructor function
let str1 = "hello"
let text = str1.constructor
console.log(text)
// endsWith()	Returns if a string ends with a specified value
console.log(myName.endsWith("Khan"))
// fromCharCode()	Returns Unicode values as characters
let msg = String.fromCharCode(65)
console.log(msg)
// includes()	Returns if a string contains a specified value
// indexOf()	Returns the index (position) of the first occurrence of a value in a string
// lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
// length	Returns the length of a string
console.log(myName.length)
// localeCompare()	Compares two strings in the current locale
// match()	Searches a string for a value, or a regular expression, and returns the matches
// prototype	Allows you to add properties and methods to an object
// repeat()	Returns a new string with a number of copies of a string
// replace()	Searches a string for a pattern, and returns a string where the first match is replaced
// replaceAll()	Searches a string for a pattern and returns a new string where all matches are replaced
// search()	Searches a string for a value, or regular expression, and returns the index (position) of the match
// slice()	Extracts a part of a string and returns a new string
// split()	Splits a string into an array of substrings
// startsWith()	Checks whether a string begins with specified characters
// substr()	Extracts a number of characters from a string, from a start index (position)
// substring()	Extracts characters from a string, between two specified indices (positions)
// toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
// toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
// toLowerCase()	Returns a string converted to lowercase letters
console.log(myName.toLowerCase())
// toString()	Returns a string or a string object as a string
// toUpperCase()	Returns a string converted to uppercase letters
console.log(myName.toUpperCase())
// trim()	Returns a string with removed whitespaces
console.log(myName.trim())
// trimEnd()	Returns a string with removed whitespaces from the end
// trimStart()	Returns a string with removed whitespaces from the start
// valueOf()	Returns the primitive value of a string or a string object
let old = "hello world !"
let result = old.valueOf()
console.log(result)
