//let's assume x=chicken, y= dog, z=cow

//get value of chickens and count their legs:
var x = prompt('enter number of chickens :', x);
// console.log(x);

document.write('no. of chickens : ', x + '<br>');
let C_legs = 2 * Number(x);
let chicken = Number(C_legs) + " "+'legs';

//get value of dogs and count their legs:
var y = prompt('enter number of dogs : ', y);
// console.log(y);
document.write('no. of dogs : ', y + '<br>');
let D_legs = 4 * Number(y);
let dogs = Number(D_legs) + " "+'legs';

//get value of cows and count their legs:
var z = prompt('enter number of cows : ', z);
// console.log(z);
document.write('no. of cows : ', z + '<br>');
let CW_legs = 4 * Number(z);
let cows = Number(CW_legs) + " "+'legs';

//this will print the no of species
document.write('chicken : ', chicken + '<br>');
document.write('dogs : ', dogs + '<br>');
document.write('cows : ', cows + '<br>');


//count total no. of animals:
let total_animal = Number(x) + Number(y) + Number(z);
document.write('Total number of Species : ', total_animal + '<br>');
let total_legs = Number(C_legs) + Number(D_legs) + Number(CW_legs);
document.write('Total number of legs : ', total_legs + '<br>');
