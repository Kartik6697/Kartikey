const dayNumber = (day) =>{
    value = Number(day);

switch (value) {
  case 1:
    document.write(`Sunday <br>`);
    break;
  case 2:
    document.write(`Monday <br>`);
    break;
  case 3:
    document.write(`Tuesday <br>`);
    break;
  case 4:
    document.write(`Wednesday <br>`);
    break;
  case 5:
    document.write(`Thrusday <br>`);
    break;
  case 6:
    document.write(`Friday <br>`);
    break;
  case 7:
    document.write(`Saturday <br>`);
    break;
  default:
    document.write(`Invalid input please check <br>`);
    break;
}
}

let value = prompt(`Enter value :`);
document.write(`value : ${value} <br>`);

let weekday = dayNumber(value);
