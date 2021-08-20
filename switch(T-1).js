// getting value from user
let value = prompt(`Enter value :`);
document.write(`value : ${value} <br>`);
// created function to get value as number
const dayNumber = (day) =>{
    value = Number(day);

switch (value) {
  case 1:
    document.write(`Monday <br>`);
    break;
  case 2:
    document.write(`Tuesday <br>`);
    break;
  case 3:
    document.write(`Wednessday <br>`);
    break;
  case 4:
    document.write(`Thursday <br>`);
    break;
  case 5:
    document.write(`Friday <br>`);
    break;
  case 6:
    document.write(`Saturday <br>`);
    break;
  case 7:
    document.write(`Sunday <br>`);
    break;
  default:
    document.write(`Invalid input please check <br>`);
    break;
}
}

//calling function
dayNumber(value);
