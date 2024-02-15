//for loop
//syntax
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }

for (let i = 0; i <=10; i++) {
//  console.log(i)
  
}

//for loop with condition 
for (let i = 0; i <= 10; i++){
  const j = i;
  if(j == 5){
    // console.log(`five is lucky number`);
  }
  // console.log(j)
}

// for loop with another for loop
for (let i = 10; i<= 10; i++){
  for(let j = 1; j<= 10; j++){
    // console.log(i + "x" + j + " = " + i*j)
  }
}

// for loop with array index

const newArray = ["kmato","Imran","salman"]
// console.log(newArray.length)
for ( let index = 0; index < newArray.length; index++) {
  const element = newArray[index]
  // console.log ( element)
}

// break and continue

for (let index = 1; index <= 20; index++) {
  if( index == 5){
     console.log("detected 5")
     break;//it will break program till 5 but 5 will not be print
  }
 console.log(`value of index is ${index}`)
}

for (let index = 1; index <= 20; index++) {
  if( index == 5){
     console.log("detected 5")//it will be skip 
     continue
  }
 console.log(`value of index is ${index}`)
}
