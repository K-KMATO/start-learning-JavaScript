const age = 21
const myAge = new Number(21)
// console.log(age,myAge);

// console.log(age);


// Number property
// --->
// console.log(Number.EPSILON);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NaN);

// Number method 
// --->>

//isFinite --> is value is convertable to the number it will return the true
console.log(Number.isFinite(1/0)); // false
console.log(Number.isFinite(0/1));// true
console.log(Number.isFinite(NaN));//false
console.log(Number.isFinite(Infinity));// false
console.log(Number.isFinite("hello"));// false

console.log("isInteger");
//isInteger --> if value will be integer it will return true otherwise false
console.log(Number.isInteger(3.2));//false
console.log(Number.isInteger("3.1"));//false
console.log(Number.isInteger(3));//true
console.log(Number.isInteger(NaN));//false

//isNaN --> if value will be NaN it will be return true otherwise false
console.log("isNaN");
console.log(Number.isNaN(NaN));//true
console.log(Number.isNaN(12));//false

// isSafeInteger --> if value will be less than the integer then it will be show true or it will be bigInt it will be false 
console.log("isSafeInteger");
console.log(Number.isSafeInteger(5937537393556758875));//false
console.log(Number.isSafeInteger(593753739));//true
console.log(Number.isSafeInteger(593));//true
console.log(Number.isSafeInteger(59352704n));//false

//parseInt --> it convert string to integer it will ignore charcter middle or end of the value but if value start with the charcter will return NaN
console.log("parseInt");
const isUser = "123fgehisg 1234"
console.log(Number.parseInt(isUser));

// parseFloat --> it convert string to float number it will ignore charcter if it will be middle of end but if value start with the charcter will be return NaN
console.log("parseFloat");
const newUser = "ff.53739.wfaweufw5333"
console.log(Number.parseFloat(newUser));

//toExponential --> it select the by default value and make it float if not initialized any value and if any value initialized the it will be float after the value for example by defaul value 43374748 it will be converted (4.3374748e+7) and if user initialized value 2 it will be (4.34e+7)

console.log("toExponential");
const count = 43374748
console.log(count.toExponential());
console.log(count.toExponential(2));
console.log(count.toExponential(4));
console.log(count.toExponential(0));

//toFixed --> if the fixed the value of float it is work like round the float value but toFixed are used for how much decimal value are required 
console.log("toFixed");
const val1 = 3546.756586
console.log(val1.toFixed());

// toPrecision --> it is add the integer and decimal number according to the toPrecision value if user 5 and value start from 0 it will be ignored till the number is greater than the 0 
console.log("toPrecision");
const val2 =  75.50730530375
console.log(val2.toPrecision(4))

console.log("toString")
console.log(age.toString()) //Number to String

//valueOf -->  the valueOf() method is a method that is present in all core JavaScript objects. It returns the primitive value of the specified object. This method is called implicitly by JavaScript when the primitive value of an object is required, such as when the object is used in a context where a primitive (like a number, string, or boolean) is expected.

console.log("valueOf");
const newObj = new Number(10)
console.log(typeof newObj);
const newPara = newObj.valueOf()
console.log(newPara)
console.log(typeof newPara)




// ****************************Math*************************************

console.log(Math)
console.log(Math.abs(-8))
console.log(Math.round(5.4))
console.log(Math.ceil(5.1))
console.log(Math.floor(8.9))
console.log(Math.min(8,4,5,2,9,7))
console.log(Math.max(8,4,5,2,9,7))

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1)) + min)


const hundred = 100000
console.log(hundred.toLocaleString('en-IN'))



