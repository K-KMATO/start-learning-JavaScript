//The keyword async before a function makes the function return a promise:


//async&Await
const firstPromise = new Promise((resolve,reject) =>{
  setTimeout(()=>{
    const gf = true
    if(!gf){
      resolve("don't have girlfriend ")
    }else{
      reject("have girlfriend")
    }
  },1000)
})
async function consumeFirstPromise(){
 try {
  const resolve = await firstPromise
  console.log(resolve)
 } catch (error) {
  console.log(error)
 }
}
consumeFirstPromise()

//async

async function secondFun(){
  return "kmato"
}
secondFun().then(
  (val) =>{
    console.log(val)
  }
)