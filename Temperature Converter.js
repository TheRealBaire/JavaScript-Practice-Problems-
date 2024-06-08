
// **Temperature Converter**: Create a program that allows the user to input a temperature in Celsius and converts it to Fahrenheit and Kelvin.

// Get user input 
let $Init_temp = prompt("Enter the magnitude of the temperature", "10");
if ($Init_temp == null || "") {
  window.alert("You haven't entered anything!")
}
else if ($Init_temp + 1 == NaN){
  window.alert("Enter a number!!")
}
else {
  
  let $Init_scale = prompt("Enter the temperature scale", "Kelvin")
  $Init_scale == $Init_scale.toLowerCase()
  if ($Init_scale == "Kelvin"){
    alert("Ki")
  }
}
//awaits improvement 
