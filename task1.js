let a;
let result;
a = prompt("enter value", +a);
console.log("value a = ", a);
document.write("a = ", a + "<br>");
let b = 25;
document.write("b = ", b + "<br>");
// const b = prompt("enter value", +b);
console.log("value b = ", b);

//addition of two numbers
result = Number(a) + Number(b);
document.write("Adition of numbers : ", result + "<br>");
// document.write("\n");

//subtraction of two numbers
result = Number(a) - Number(b);
document.write("Subtraction of numbers : ", result + "<br>");
// document.write("\n");

//multiplication of two numbers
result = Number(a) * Number(b);
document.write("Multiplication of numbers :", result + "<br>");
// document.write("\n");

// division of two numbers round of 2 digits after "."
result = Number(a) / Number(b);
const num = result.toFixed(2);
document.write("Division of numbers :", num + "<br>");

//reminder
result = Number(a) % Number(b);
document.write("Reminder of numbers :", result + "<br>");

//exponentiation of digit
result = Number(a) ** 2 ;
document.write("Exponential of numbers :", result + "<br>");

//increment of digit
result = Number(++a);
document.write("Incremented number is : ", result + "<br>");

//decrement of digit
result = Number(--a);
document.write("Decremented number is : ", result + "<br");