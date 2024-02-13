// singleton --> it will be become singleton when it will be created as constrocter
// Object.create

// object literals


const newSmb = Symbol("kmato")


const newUser = {
  [newSmb] : "khan", //
  newSmb: "mato", //
  name:"Imran",
  age:21,
  location:"Bhiwandi",
  email:"kmato@gmail.com",
  isLoggedIn:false,
  lastLoggedIn:["Sunday","saturday"]
}
// }
console.log(newUser.email);//calling the keyvalue
 console.log(newUser["age"]);// calling the keyvalue
 console.log( newUser.newSmb);// calling the value of Symbol data typs and it will access as String
console.log( newUser[newSmb]);// calling the keyvalue for symbol dataTypes




newUser.email="kmato197@gmail.com"//changing the object value
// Object.freeze(newUser)//it will freeze the value which mean it can not be change anymore
newUser.email="imranahmad@gmail.com"
console.log(newUser)

newUser.greeting = function(){
  console.log("hello Good Morning")
}
newUser.greeting2 = function(){
  console.log(`my age ${this.age}`)//this keyword are help to call the object which will be refrence
}

console.log(newUser.greeting())//calling the function value
console.log(newUser.greeting)//function will not be execute but it will be call and give the reffrence

console.log(newUser.greeting2());


