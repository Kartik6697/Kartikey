const Data_1 = [17, 21, 23];
const Data_2 = [12, 5, -5, 0, 4];
let display = '';

function printforecast(item) {
  item.map(
    (x, index) => (display += `${x} °C is ${index} day's temprature <br>`)
  );
}

// used forEach() method to display the array values
printforecast(Data_1);
document.getElementById('trial').innerHTML = display;
