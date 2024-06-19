/* This file is a compilation of practice problems solved using functions.
Function Expression and Function Declaration are the practices employes in thus compilation. 
The functions here would be imported and used  later on in other problems. */

// Check if a year is a leap year or not
function isLeap(year){
  if (year % 4 == 0 && year % 100 !=0)
    return true
  else 
    return false
}


// vowel counter
function countVowels(str) {
  let count = 0;
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      count++;
    }
  }

  return count;
}


// Number Adder 
function numMan(arga, argb, argc){
  if (isNaN(arga)== false && isNaN(argc)== false){
    if (argb == "+" || argb == "add" || argb == "addition" || argb== "sum" || argb == "plus")
    return Number(arga) + Number(argc)
      }
  else
    return "An Error Occurred!!"
  //to be continued 
}


// Add up two arguments 
function sumNum(a,b){
  if (isNaN(a) == false && isNaN(b)== false)
    return Number(a) + Number(b)
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


      //Check if a number is even or odd
function isEven(number){
  if (number % 2 == 0)
    return true
  else
    return false
}
