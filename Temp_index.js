const Data_1 = [17, 21, 23];
const Data_2 = [12, 5, -5, 0, 4];
let display1 = "";
let display2 = "";

const printforecast = (item) => {
  // for take individual values and index numbers of first Array Data_1
  item.map(
    (x, index1) => (display1 += `${x} °C is ${index1} day's temprature <br>`)
  );
  // for take individual values and index numbers of second Array Data_2
  item.map(
    (y, index2) => (display2 += `${y} °C is ${index2} day's temprature <br>`)
  );
}
// display the output of first Array
printforecast(Data_1);
document.getElementById("trial").innerHTML = display1;
// display the output of second Array
printforecast(Data_2);
document.getElementById("trial").innerHTML = display2;
