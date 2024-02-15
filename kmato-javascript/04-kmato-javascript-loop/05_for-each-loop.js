// for-each loop

//for-each loop with function
const coding = ["javascrip","ruby","python","cpp"]

coding.forEach( function (item){
  // console.log(item)
} )

// for-each loop with arrow function
coding.forEach( (val) =>{
  //  console.log(val);
} )

function printMe (item){
  console.log(item);
}
// coding.forEach(printMe);


coding.forEach( (item, index, arr)=>{
  // console.log(item, index, arr)
} )

// multiple objeble inside array

const newArray = [
  {
    userSubject : "javascript",
    userAttendce : "regular"
  },
  {
    userSubject : "python",
    userAttendce : "regular"
  },
  {
    userSubject : "java",
    userAttendce : "regular"
  },
]

newArray.forEach( (item) =>{
  console.log(item.userAttendce)
} )