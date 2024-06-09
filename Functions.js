/* This file is a compilation of practice problems solved using functions.
Function Expression and Function Declaration are the practices employes in thus compilation. 
The functions here would be imported and used  later on in other problems. */

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
