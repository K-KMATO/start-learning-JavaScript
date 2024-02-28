
//Warning !
// Using delete() leaves undefined holes in the array.
// Use pop() or shift() instead.



// Basic Array Methods
// Array length
// Array toString()
// Array at()
// Array join()
// Array pop()
// Array push()
// Array shift()
// Array unshift()
// Array delete()
// Array concat()
// Array copyWithin()
// Array flat()
// Array splice()
// Array toSpliced()
// Array slice()

let ar = ["hello","world","new"]
// console.log(ar.length)//The length property returns the length (size) of an array:

ar = ["hello","world","new"]
console.log(ar.toString())//The JavaScript method toString() converts an array to a string of (comma separated) array values.

ar = ["hello","world","new"]
console.log(ar.at(0))//The at() method returns an indexed element from an array.The at() method returns the same as [].

ar = ["hello","world","new"]
console.log(ar.join("+"))//The join() method also joins all array elements into a string.It behaves just like toString(), but in addition you can specify the separator:

ar = ["hello","world","new"]
ar.pop()//The pop() method removes the last element from an array:
console.log(ar)

ar = ["hello","world","new"]
ar.push("kmato")//The push() method adds a new element to an array (at the end):
console.log(ar.push("Hero"))//The push() method returns the new array length:
console.log(ar)

ar = ["hello","world","new"]
ar.shift()//The shift() method removes the first array element and "shifts" all other elements to a lower index.
console.log(ar)


ar = ["hello","world","new"]
ar.unshift("imran")//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
console.log(ar.unshift("Hero"))//The unshift() method returns the new array length:
console.log(ar)


ar = ["hello","world","new"]
ar[ar.length] = "khan"//The length property provides an easy way to append a new element to an array:
console.log(ar)



ar = ["hello","world","new"]
let arr = ["Khan","Imran"]
arr.concat("Ahmad")//The concat() method does not change the existing arrays. It always returns a new array.The concat() method can take any number of array arguments.
console.log(ar.concat(arr,"Khan"))//The concat() method creates a new array by merging (concatenating) existing arrays:


ar = ["hello","world","new","Khan","Imran"]
console.log(ar.copyWithin(2,1))//The copyWithin() method copies array elements to another position in an array:Copy to index 2, all elements from index 0:
console.log(ar.copyWithin(2,0,2))//Copy to index 2, the elements from index 0 to 2:


 let multidimensionalArray = [1,2,[3,4],[5,6]]
console.log(multidimensionalArray.flat())//The flat() method creates a new array with sub-array elements concatenated to a specified depth.






let array = ["hello","world","new"]
array.splice(2, 0,"user","added")//The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items:
//The splice() method can be used to add new items to an array:
console.log(array)

array.splice(0,2)//The first parameter (0) defines the position where new elements should be added (spliced in).The second parameter (1) defines how many elements should be removed.The rest of the parameters are omitted. No new elements will be added.
console.log(array)


const anotherArray = ["hello","world","new"]
const user = anotherArray.toSpliced(0,1)//The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.
console.log(user)



const slice = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
const fruits = slice.slice(3)//The slice() method slices out a piece of an array into a new array:
console.log(fruits)
const anotherFruit = slice.slice(1,4)//The method then selects elements from the start argument, and up to (but not including) the end argument.
console.log(anotherFruit)





const convertString = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
const anotherString = convertString.toString()//All JavaScript objects have a toString() method.
console.log(anotherString)
