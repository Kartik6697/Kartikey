//let's assume x=chicken, y= dog, z=cow
// declaring all the variables here
let x, y, z;
let total_animal, total_legs;
let C_legs, D_legs, CW_legs;
let chicken, dogs, cows;

// get value of chickens and count their legs:
x = prompt("enter number of chickens :", x);
console.log("no. of chickens : ", x);

// get value of dogs and count their legs:
y = prompt("enter number of dogs : ", y);
console.log("no. of dogs : ", y);

// get value of cows and count their legs:
z = prompt("enter number of cows : ", z);
console.log("no. of cows : ", z);

// count total no. of animals:
total_animal = Number(x) + Number(y) + Number(z);
console.log("Total number of Species : ", total_animal);

// condition to check that total no. of animals are >10 or not
// if animals are >10 than process all the counting actions
if (total_animal >= 10) {
  // displaying from which condition it is
  document.write("total no. of animals >= 10 :" + "<br>");

  // counts legs and store values
  // used ES6 syntax of "templet string"
  C_legs = 2 * Number(x);
  chicken = ` ${Number(C_legs)} legs`;

  D_legs = 4 * Number(y);
  dogs = `  ${Number(D_legs)} legs`;

  CW_legs = 4 * Number(z);
  cows = ` ${Number(CW_legs)} legs`;

  // this will print the no of species
  document.write("chicken : ", chicken + "<br>");
  document.write("dogs : ", dogs + "<br>");
  document.write("cows : ", cows + "<br>");

  // counts total no. of legs and print them on screen
  total_legs = Number(C_legs) + Number(D_legs) + Number(CW_legs);
  document.write("Total number of legs : ", total_legs + "<br>");
} else if (total_animal < 10) {
  // displaying from which condition it is
  document.write("total no. of animals < 10 :" + "<br>");

  // counts legs and store values
  // used ES6 syntax of "templet string"
  C_legs = 2 * Number(x);
  chicken = ` ${Number(C_legs)} legs`;

  D_legs = 4 * Number(y);
  dogs = `  ${Number(D_legs)} legs`;

  CW_legs = 4 * Number(z);
  cows = ` ${Number(CW_legs)} legs`;

  // this will print the no of species
  document.write("chicken : ", chicken + "<br>");
  document.write("dogs : ", dogs + "<br>");
  document.write("cows : ", cows + "<br>");

  // counts total no. of legs and print them on screen
  total_legs = Number(C_legs) + Number(D_legs) + Number(CW_legs);
  document.write("Total number of legs : ", total_legs + "<br>");
} else {
  document.write("enter valid input !!");
}
