let myDates = new Date()
console.log(myDates.toLocaleDateString())

let currentDate = new Date(2000,1,12,7,8)
// let currentDate = new Date("2002-02-25")
console.log(currentDate.toString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myDates.getTime())
// console.log(Math.floor(Date.now()/1000)) --> converted mili second to second and roundup with the floor

console.log(myDates.getMonth()+1)
console.log(myDates.getDay())
myDates.toLocaleDateString(`default`,{
  weekday:"long"
})
