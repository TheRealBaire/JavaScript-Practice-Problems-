const calculator= {
  add : function(a,b){
    return a + b;
  },
  subtract: function(a,b){
    return a - b;
  },
  multiply: function(a,b){
    return a * b;
  },
  divide: function(a,b){
    return a / b;
  }
};

let num1 = parseFloat(prompt("Enter the first number", ""));
let operation = prompt("Enter the operator", "+").toLowerCase().trim();
let num2 = parseFloat(prompt("Enter the second number", ""));

if (operation == "+" || operation == "plus" ) {
  window.alert(calculator.add(num1,num2));
}
else if (operation == "-" || operation == "minus") {
  window.alert(calculator.subtract(num1,num2));
}
else if (operation == "*" || operation == "multiplication") {
  window.alert(calculator.multiply(num1,num2));
}
else if (operation == "/" || operation == "÷" || operation == "division") {
  window.alert(calculator.divide(num1, num2));
}
else {
  window.alert("An error occurred");
}
