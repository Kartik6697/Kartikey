let x, y, z;

//getting elements from user
x = prompt("enter x : ", x);
document.write("x = ", x + "<br>");
y = prompt("enter y : ", y);
document.write("y = ", y + "<br>");
z = prompt("enter z : ", z);
document.write("z = ", z + "<br>");

//this will check that the all inputs are positive than shows this message
if (x > 0 && y > 0 && z > 0) {
  alert("The sign is +");
}
//check any of the input value is negative then it shows this message
else if (x < 0 || y < 0 || z < 0) {
  alert("The sign is -");
}
//if the input is not proper this message will pop-up
else {
  alert("Enter Valid Values !!");
}

// let result= x < 0 ? "x" : credits < 0 ? "y" : credits < 0 ? "z" : "check input";
