//Promise.then() takes two arguments, a callback for success and another for failure.Both are optional, so you can add a callback for success or failure only.

function myDisplayer(some){
 console.log(some)
}

let myPromise = new Promise(function(myResolve,myReject){
 let x = 0
 if (x==1){
  myResolve("OK")
 }else{
  myReject("ERROR")
 }
});

myPromise.then(
  function(value){
    myDisplayer(value)
  },
  function(error){
    myDisplayer(error)
  }
)

//Using Promise setTimeout()

let anotherPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Welcome to programming World!")
  }, 2000);
})

anotherPromise.then(
  function(value){
    console.log(value)
  }
)

const fistPromise = new Promise((resolve, reject) => {
  const user = false
  if(!user){
    resolve({userName:"kmato",userAge:21})
  }else{
    reject("error fetch ")
  }
})
fistPromise.then(
  function(val1){
    displayValue(val1)
  },
  function(err){
    displayValue(err)
  }
)
function displayValue(final){
  console.log(final)
}

//

fistPromise.then(
  function(a){
    console.log(a)
    return a.userName
  }
).then(
  function(username){
    console.log(username)
  }
).catch(
  function(b){
    console.log(b)
  }
).finally(
  function(c){
    console.log("finally")
  }
)

//
const threePromise = new Promise((resolve, reject) => {
  setTimeout(function(){
   const value = false
   if(!value){
    resolve({fname:"imran",lname:"khan"})
   }else{
    reject("error deducted")
   }
  },2000)
})

threePromise.then(
  (value1) =>{
    return value1.fname
  }
).then(
  (final) =>{
    console.log(final)
  }
).catch(
  (e) =>{
    console.log(e);
  }
)