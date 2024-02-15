//while loop 
let value = 0
while (value <= 10) {
  console.log(`while value is ${value}`)
   value = value + 2
}

// while loop with array

let newArray = ["kmato","imran","salman"]
let index = 0
while(index < newArray.length){//check the condition
  console.log(newArray[index])
  index ++//increment
}

//do-while loop
let total = 1
do {
    console.log(`the total value is: ${total}`)//atleast one time it will be execute
    total++
}while (total <= 10) ;
  
