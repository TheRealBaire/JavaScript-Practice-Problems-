/* This file is a compilation of practice problems solved using functions.
Function Expression and Function Declaration are the practices employes in thus compilation. 
The functions here would be imported and used  later on in other problems. */

// Add up two arguments 
function sumNum(a,b){
  if (isNaN(a) == false && isNaN(b)== false)
    return a + b
  else 
    return "Are you trying to concatenate strings?"
}


// Which is the biggest of these arguments
function isMax(x, y) {
  if (x > y) 
    return `${x} is greater`
  else 
    return `${y} is greater`
}

// Which is the smallest of the arguments
function isMin(x, y) {
  if (x < y)
    return `${x} is the smallest`
  else
    return `${y} is the smallest`
}

  // Calculate the discount price on a sale
function calc_Discount(price, discountPercentage) {
    return price - (price * discountPercentage / 100);
}

// Eligibility Checker
function isMature(Age){
  if (Age >= 18)
    return true
  else
    return false

  // objects made easy
function makeUser(name, age,//other properties) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}


// Sign up greetings
function sign_wa(){
  return "You're welcome to Shamal"
}
