// primitive -->>
// all the primitive dataTypes value will be return as copy or we can say duplicate
// for example

let stdOne = "rajesh"
let stdTwo = stdOne
stdOne = "imran"


// non-primitive -->
// all the non-primitive dataTypes value will be return as reffrence or we can say orginal value 
// for example

console.log(stdOne,stdTwo)

let objOne = {
  userId : "kmato@gmail.com",
  userUpi : "kmatoYbl"

}
// In summary, the stack is used for managing the execution context of functions and storing primitive data types, while the heap is used for dynamically allocated memory, such as objects and arrays. Understanding the differences between the stack and the heap helps developers write more efficient code and avoid common memory-related issues.

let objTwo = objOne

objTwo.userId = "hellokmato@gmail.com"

console.log(objOne,objTwo)


// there are two types of memory allocation 
  // stack 
  // heap

  // stack --> the stack size is limited, it's typically smaller than the heap.
 // stack is faster to access than the heap because of access memory without allocation and deallocation 

  // heap --> the heap is larger more general memory area where complex data structure like objects and arrays are stored

  // The heap is slower to access than the stack because memory allocation and deallocation are more complex.