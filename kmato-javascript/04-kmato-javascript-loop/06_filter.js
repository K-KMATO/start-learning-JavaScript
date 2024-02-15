//filter in js

//forEach not return value
const coding = ["py","js","ruby","cpp","css"]
const vCoding = coding.forEach( (item) => {
  //  console.log(item)
   return item
})
// console.log(vCoding)

// filter will return the value
//use with filter
const newArray = [1,2,3,4,5,6,7,8,9,10]
// const arr = newArray.filter((value) => value > 4)
const arr = newArray.filter((value) => {
  return value > 4
})
// console.log(arr)

//same thing use with for loop

// const oldArray = [1,2,3,4,5,6,7,8,9,10]
// const existingArr = oldArray.forEach ((val1) => {
//   if(val1 > 4){
//     console.log(val1)
//   }
// })

const oldArray = []
 newArray.forEach ( (val1) => {
  if(val1 > 4){
    oldArray.push(val1)
  }
})
// console.log(oldArray)

const books = [
  {
    title: 'book one',genre: 'fiction', publish: 1981, edition: 2003
  },
  {
    title: 'book two',genre: 'history', publish: 1999, edition: 2008
  },
  {
    title: 'book three',genre: 'fiction', publish: 2000, edition: 2007
  },
  {
    title: 'book four',genre: 'non-fiction', publish: 1999, edition: 2010
  },
  {
    title: 'book five',genre: 'fiction', publish: 1999, edition: 2003
  },
  {
    title: 'book six',genre: 'history', publish: 1981, edition: 2020
  },
  {
    title: 'book seven',genre: 'history', publish: 2000, edition: 2003
  },
  {
    title: 'book eight',genre: 'non-fiction', publish: 1981, edition: 2003
  },
  {
    title: 'book nine',genre: 'fiction', publish: 1981, edition: 2003
  },
  {
    title: 'book ten',genre: 'fiction', publish: 1981, edition: 2003
  },
  {
    title: 'book eleven',genre: 'fiction', publish: 1981, edition: 2003
  },
];

// const userBooks = books.filter((bk) => bk.genre === 'fiction' && bk.publish === 1999)
// console.log(userBooks)

const userBooks = books.filter((bk) =>{
  return bk.publish >= 2000

})
console.log(userBooks)