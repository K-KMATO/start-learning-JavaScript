// for-in loop

//for-in loop with object
const myObject={
  js:"javascript",
  cpp:"c++",
  rb:"ruby",
  py:"python",
  swift:"swift by apple"
}

for (const key in myObject) {
  console.log(`${key} full name is : ${myObject[key]}`);
}

//for-in loop with array

const sport = ["football","cricet","hockey","kabaddi"]

for (const key in sport) {
 console.log(`${key} sport list is ${sport[key]}`);
}