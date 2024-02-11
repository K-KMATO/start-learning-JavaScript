//singleton 
const instaUser = new Object()//singleton object

// const fbUser = {}// not singleton object


instaUser.id = "567abc"
instaUser.name="imran"
instaUser.isLoggedIn=false
// console.log(instaUser);

const regularUser = {
  name:"kmato",
  fullName:{
    userFullName:{
      firstName:"imran",
      lastName:"khan"
    }
  }
}


// console.log(regularUser.fullName.userFullName)

const obj1 ={1 : "a", 2 : "b"}
const obj2 ={3 : "a", 4 : "b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1,obj2)
// console.log(obj3);

const obj4 = {...obj1, ...obj2}//spread all the value togather
// console.log(obj4);

const users = [
   {
    id : 1,
    email : "kmato@gmail.com",
   },
   {
    id : 1,
    email : "kmato@gmail.com",
   },
   {
    id : 1,
    email : "kmato@gmail.com",
   }
  ]

  // console.log( users[2].email)


  // object de-structure

  const product = {
    mrp : 1499,
    bag : "safari backpack",
    ownerName: "Imran Ahmad Khan"
  }

  // product.ownerName

  const {ownerName : name} = product
  console.log(name);


  // JSON Api 


  // object form
  // _{
  //   "name":"imran ahmad khan",
  //   "email":"kmato@gmail.com"
  //   "address":"bhiwandi maharastra"
  // }

   // Array form 
  // [
  //    {},
  //    {},
  //    {},
  //    {},
  // ]