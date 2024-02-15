// arrays

const myArray = [1,2,3,4,5,6]//array declrared and hold number value(element)
const myArr = new Array(7,4,65,6,32,54)// another way to declare array
const myHero = ["Thor","Batman","Ironman"]// array declare and hold string value(element)
console.log( myArray[4]);
console.log(myArr[3]);
console.log(myHero[1]);

// array method 

myArray.push(101) // push method used for add element on array container at the end
console.log(myArray)

myArr.push(20)// push method used for add element on array container at the end
console.log(myArr)
myArr.pop() // pop method are used to delete the end of element 
console.log(myArr)
myArr.pop()


myArr.unshift(56) // unshift method are add the value at the start it will consume much time because of loading every n number of element
myArr.shift() // shift method are remove element at the start 
console.log(myArr)

console.log(myArr.includes(4));
console.log(myArr.indexOf(4));


//slice ,splice

const myn1 = myArray.slice(1,3) // output will be [2,3] and existing value will not effect it will be same
console.log(myn1);
console.log("A",myArray);

const myn2 = myArray.splice(1,3) // output will be [2,3,4] and existing value will be effect as [1,5,6] and exiting value are [1,2,3,4,5,6]
console.log(myn2);
console.log("A",myArray);



const marvelHero = ["Irocman","Spiderman","Thor"]
const dcHero = ["Superman","Batman","Flash"]

// marvelHero.push(dcHero)
// console.log(marvelHero);


// const allHero = marvelHero.concat(dcHero)
// console.log(allHero);

const superHero = [...marvelHero, ...dcHero]//splid
console.log(superHero);

const anotherArray = [1,2,3,4,5,[6,7,[3,4,[6,7]]],8,9]
const usableAnotherArray = anotherArray.flat(Infinity)
console.log(usableAnotherArray);

console.log(Array.isArray("Imran"));//check the value is array or not
console.log(Array.from("Imran"));//creat value in array
console.log(Array.from({name :"Imran"}));//it will return empty array


const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1,score2,score3));//it will combine all object into array 