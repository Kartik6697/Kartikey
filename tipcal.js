// declaration of an array for individual value storage
let bill = [125, 555, 44];
let tip = [];
let total = [];
// let i, j;
// let billAmt;

// function to calculate tip
let calTip = bill => {
  bill.map((Element, index) => {
    //checking condition for 15% or 20% tip
    if (Element <= 300 && Element >= 50) {
      tip[index] = Element * 0.15;
    } else {
      tip[index] = Element * 0.2;
    }
     // get total bill amount
    total[index] = tip[index] + bill[index];
  });
};
//function called
calTip(bill);
// display values
document.write(`bill amount : ${bill} <br>`);
document.write(`tip for each bill amount : ${tip} <br>`);
document.write(`total bill amount ${total} <br>`);
