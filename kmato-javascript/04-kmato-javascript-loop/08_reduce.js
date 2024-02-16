// reduce  
//reduce with function()
const newArr = [1, 2, 3]

const oldArr = newArr.reduce( function  (acc, currval) {
  console.log(`acc value is ${acc} currval is ${currval}`)
   return acc + currval
}, 0)
console.log(oldArr)

const userValue = [4, 5, 6,]
// const newUser = userValue.reduce( (acc, currval) =>  acc + currval ,0)
const newUser = userValue.reduce( (acc, currval) =>{
  console.log(`new acc value is ${acc} new currval is ${currval}`)
  return  acc + currval
}   ,0)
console.log(newUser)

const myCart = [
  {
    course : "javascript",
    price : 1499
  },
  {
    course : "python",
    price : 999
  },
  {
    course : "android app dev",
    price : 5999
  },
  {
    course : "Mern stack",
    price : 3999
  },
]

const newCart = myCart.reduce( (acc, item) => acc + item.price ,0 )
console.log(newCart)