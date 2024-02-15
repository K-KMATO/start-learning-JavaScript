// if statemetn

const userAge = 18
if(userAge <= 18){
  // console.log("user are not eligible for the credit card ");
}
// console.log("user are eligible for the credit card")//it will be run at any situation

//else statement
const newUserAge = 17
if(newUserAge >= 18){
  console.log("user are eligible for the credit card ");
}else{
  console.log("user are not eligible for credit card")
}

//if else-if
const age = 50
if(age <=18){
  console.log("user are elegible for new credit card")//condition false 
}else if(age >= 25){
  console.log("user have already any credit card");//condition true it will be execute
}else if(age >= 35){
  console.log("user have minimum two credit card");
}else{
  console.log("user is less than 18 either greater than 50");
}

//&& (and) operator in if statement

const guestIsComing = true
const newGuestIsComing = false
if(guestIsComing == true && newGuestIsComing == true){
  console.log("guest are coming prepared for the food");//it will not be execute because both condition required true
}else{
  console.log("not guest are coming no need to prepared food");//condition will be false and it will be display
}

// AUR (||) operator

const oldGuest = true
const newGuest = false
if(oldGuest == false || newGuest == false){
  console.log("Either one or two guest will be come")//it will be execute because atleast one condition required true
} else{
  console.log("No guest will be come");// condition will be true and it will not display
}