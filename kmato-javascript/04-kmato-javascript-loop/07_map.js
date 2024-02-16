// map method

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = myNumber.map( (num) => num + 10)
// console.log(newNum)

const newNum = myNumber
                   .map( (num) => num *10)//check output
                   .map( (num) =>num + 1)//coment this line and check output
                   .filter( (num) => num >=40)//coment this line and check also output

console.log(newNum)