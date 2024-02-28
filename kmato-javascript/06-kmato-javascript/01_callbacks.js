//Function sequence

function myDisplayer(some){
  console.log(some)
}
function myFirst(){
  myDisplayer("hello")
}

function mySecond(){
  myDisplayer("Goodbye")
}
 myFirst()//JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
 mySecond()
 mySecond()
 myFirst()


 //Sequence Control

function myDisplayer(some){
  console.log(some)
}

 function myCalculator(num1,num2){
  let sum = num1 + num2
  return sum
 }

 let result = myCalculator(10,10)
 myDisplayer(result)


function anotherCalculator(num1,num2){
  let add = num1 + num2
  displayVal(add)
}
anotherCalculator(5,5)

function displayVal(val){
  console.log(val)
}


//JavaScript Callbacks
function calculation(num1,num2,Callbacks){//A callback is a function passed as an argument to another function.
  let sum = num1 + num2
  Callbacks(sum)
}
function displayVa2(val2){
  console.log(val2)
}
calculation(4,10,displayVa2)