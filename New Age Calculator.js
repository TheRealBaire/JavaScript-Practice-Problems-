let yearOfBirth = parseInt(prompt("Enter your year of birth", ""));
let year = new Date();
let currentYear = year.getFullYear();
if (yearOfBirth < currentYear && isNaN(yearOfBirth) == false){
  let userAge = currentYear - yearOfBirth
  if (userAge == 1){
    alert(`You are ${userAge} year old`)
  }
  else 
    {
     alert(`You are ${userAge} years old`) 
    }
}
else{
  alert("An error occured")
}
