// this is used for current context (corrent value)

const user = {
  userName : "kmato",
  price : 399,
  welcomeMessage : function(){
    console.log(`${this.userName}, welcome to website ${this.price}, will be the price of course`)

    console.log(this);//it will show the current value which are given
  }
}

// user.welcomeMessage()
// user.userName = "Imran"//here the userName are changed
// user.price = 999// and here the price will be change 
// user.welcomeMessage(this)//this will show the changed context becoz now current context changed

// in node invirment emty value (element) show the empty node 
// in browser the global object window that why we can capture all event of window


// this will be work on object only not work with function 
function newFunction(){
  // let username = "khan mato"//try is it will be not work with function
  console.log(this)
  // console.log(this.username)
}
// newFunction()


// function declare and hold the value at the const variable it will also give the undefined value
const value = function(){
  let name = "immu"
  console.log(this.name)
}

// arraw function declare and hold the vlaue at const variable it will also give the undefined value
const value1 = () =>{
  let name = "imran"
  console.log(this.name)
}
// value1()

//basic arrow function 
const addNumber =  (num1, num2) =>{
  return num1 + num2
}
// console.log(addNumber(5,8))

//implecit return 

// const addnumber = (numb1, numb2) =>  numb1 + numb2//one way 
// const addnumber = (numb1, numb2) => (numb1 + numb2)// scond way
const addnumber = (numb1, numb2) => ({userN : "kmato"})// return with object

console.log(addnumber(8,9));