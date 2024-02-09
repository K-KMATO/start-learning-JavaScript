const accountId = 567578;
// const  can not changes once initialized the data--

let accountEmail = "kmato197@gmail.com";
//let keyword mostly used becouse of not any issue in block scope and functional scope
var accountPassworld = "567578";
/* try to avoid the var 
because of issue in block scope and functional scope */
let accountState;
//not initialized any value it will be return undefined
accountCity = "Bhiwandi";


accountEmail = "hellbound@gmail.com";
accountPassworld = "13242";
accountCity = "Mumbai";

console.log(accountId);
console.table([accountId,accountEmail,accountPassworld,accountCity,accountState])