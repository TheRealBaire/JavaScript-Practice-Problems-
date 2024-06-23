/************
Robaire Thias
*************/
function ageCalc(year, current){
  if ( year >= Number(current) || year <= 1824){
    return "Erroneous"
  }
  else 
    return Number(current)- Number(year)
}

let birthYear= prompt("Year Of Birth", "");
let newYear = prompt ("Current Year", "")
result = ageCalc(birthYear, newYear);
if (isNaN(result) == false){
  window.alert("You are" + " " +result+ " years old!")
  }
else 
  window.alert("An error occured")
