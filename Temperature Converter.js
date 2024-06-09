"use strict";
let $Init_temp = prompt("Enter the magnitude of the temperature", "10");

if ($Init_temp == null || "") {
  window.alert("You haven't entered anything!")
}
else if (isNaN($Init_temp) == true){
  window.alert("Enter a number!!")
}
  
else {
  let $Init_scale = prompt("Enter the initial temperature scale", "").toLowerCase().trim();
  let $Fin_scale = prompt("Enter the desired temperature scale", "").toLowerCase().trim();

  // Celsius to Kelvin 
  if ($Init_scale == "celsius" && $Fin_scale == "kelvin"){
    Final_temp = Number($Init_temp) + 273
    window.alert(`${$Init_temp} °C is equivalent to ${Final_temp} K`)
   }
    
    // Kelvin to Celsius 
  else if ($Init_scale == "kelvin" && $Fin_scale == "celsius"){
    Final_temp = Number($Init_temp) - 273
    window.alert(`${$Init_temp} K is equivalent to ${Final_temp} °C`)
    }
    
    // Kelvin to Fahrenheit 
  else if ($Init_scale == "kelvin" && $Fin_scale == "fahrenheit"){
    Final_temp = (Number($Init_temp)- 273) * (9/5) + 32
    window.alert(`${$Init_temp} K is equivalent to ${Final_temp} °F`)
    }

    // Fahrenheit to Kelvin 
  else if ($Init_scale == "fahrenheit" && $Fin_scale == "kelvin") {
    Final_temp = (Number($Init_temp) - 32) * (5/9) + 273
    window.alert(`${$Init_temp} °F is equivalent to ${Final_temp} K`)
     }

  // Celsius to Fahrenheit 
  else if ($Init_scale == "celsius" && $Fin_scale == "fahrenheit") {
    Final_temp = (Number($Init_temp) * (9/5)) + 32
    window.alert(`${$Init_temp} °C is equivalent to ${Final_temp} °F`)  
  }
    // Fahrenheit to Celsius 
  else if ($Init_scale == "fahrenheit" && $Fin_scale == "celsius") {
    Final_temp = (Number($Init_temp)- 32) * (5/9)
    window.alert(`${$Init_temp} °F is equivalent to ${Final_temp} °C`)
  }
  else {
    window.alert("An Error Occurred!!!")
}
  
