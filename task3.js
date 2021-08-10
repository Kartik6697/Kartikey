// loop created for get 16 input values in sequence of 0-15
for (let x = 0; x <= 15; x++) {
  // check the condition if value is 0 or reminder of value is 0 then print the statement
  if (x === 0 || x % 2 === 0) {
    document.write(x + " is even" + "<br>");
  }

  // if the condition won't be fulfilled then print this statement
  else {
    document.write(x + " is odd" + "<br>");
  }
}
