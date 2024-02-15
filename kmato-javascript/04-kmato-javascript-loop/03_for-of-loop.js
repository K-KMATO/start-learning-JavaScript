// for-of loop

//for of loop with object num
const num = [1, 2, 3, 4, 5, 6, 7]
for (const number of num) {
  // console.log(number);
}

//for of loop with object string
const greetings = "hello mato!"
for (const greet of greetings) {
  // console.log(`each charcter is greet ${greet}`);
}

// maps
const map = new Map()
map.set('IN',"INDIA")
map.set('NAP',"NEPAL")
map.set('FR',"FRANCE")

// console.log(map)

// map with for-of loop
for (const [key,value] of map) {
  console.log(key, '=>', value)
}

//object is not iterable in this way
const newObject = {
    'game1' : 'BGMI',
    'game2' : 'PUBG'
}

// for (const [key,value] of newObject) {
//   console.log(key,value)
// }