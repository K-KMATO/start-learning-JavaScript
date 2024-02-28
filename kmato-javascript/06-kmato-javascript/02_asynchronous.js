//Waiting for a Timeout (setTimeout())

function newFun(){
  console.log("Hello MaTo")
}
setTimeout(newFun,2000)
//When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:
setTimeout(function newFun(){
  console.log("Hello MaTo")
},3000)


//When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:
setInterval(myFunction,1000)
function myFunction(){
  let d = new Date()
  // console.log(d.getSeconds())
}

