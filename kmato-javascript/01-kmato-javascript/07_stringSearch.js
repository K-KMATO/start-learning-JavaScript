// String Search Methods
// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()

//indexOf()
let newTxt = "please locate where 'Locate' occurs A!"//The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
console.log(newTxt.indexOf("locate"))

//lastIndexOf()
console.log(newTxt.lastIndexOf("locate"))//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
console.log(newTxt.lastIndexOf("locate",10))

//both indexOf() and lastIndexOf() return -1 if the text is not found
console.log(newTxt.indexOf("kmato"))
console.log(newTxt.indexOf("where",9));

//seach()
console.log(newTxt.search("where"))//The search() method searches a string for a string (or a regular expression) and returns the position of the match:
console.log(newTxt.search(/locate/))
// The two methods are NOT equal. These are the differences:
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

//match()
// let myArr = newTxt.match("a")
// let myArr = newTxt.match(/a/)
// let myArr = newTxt.match(/a/g)
let myArr = newTxt.match(/a/gi)
console.log(myArr.length)
// If a regular expression does not include the g modifier (global search), match() will return only the first match in the string.


//matchAll()
// const iterator = newTxt.matchAll("a")
// const iterator = newTxt.matchAll(/a/g)//If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
const iterator = newTxt.matchAll(/a/gi)//If you want to search case insensitive, the insensitive flag (i) must be set:
console.log(Array.from(iterator))


// includes()
console.log(newTxt.includes("hello"))//The includes() method returns true if a string contains a specified value.Otherwise it returns false.
console.log(newTxt.includes("Locate",14))//Check if a string includes "Locate". Start at position 14:

//startWith()
console.log(newTxt.startsWith("please"))//The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:
console.log(newTxt.startsWith("locate"))//Returns false:
console.log(newTxt.startsWith("locate"))//Returns false:

console.log(newTxt.startsWith("locate",10));
console.log(newTxt.startsWith("locate",7));


//endsWith()
console.log(newTxt.endsWith("A!"))//The endsWith() method returns true if a string ends with a specified value.Otherwise it returns false:
console.log(newTxt.endsWith("locate",13))