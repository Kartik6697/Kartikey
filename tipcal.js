let bill = [];
//let tip = [];
let total = [];
let i, j;
let tip;

calTip = () => {
  for (i = 0; i < 3; i++) {
    bill[i] = prompt('Enter your bill amount : '); // Note 2
  }
};
calTip();
document.getElementById('app').innerHTML = `bill amount are : ${bill}`;

tipcalculate = item => {
  console.log(
    'Total bill amount with the tip amount is : ',
    bill <= 300 && bill >= 50 ? (tip = bill * 0.15) : (tip = bill * 0.2)
  );

  // item.map(
  //   (j,index) => (tip[j] += (bill[i]<=300 && bill[i]>=50) ? tip[j]=bill[i]*0.15: tip[j]=bill[i]*0.2 ))

  // // for (j = 0; j < 3; j++) {
  // //   tip[j] = prompt('Enter your tip amount : '); // Note 2
  // // }
  // const myMap = new Map(tip)
  //  myMap.get((bill[i]<=300 && bill[i]>=50) ? tip[j]=bill[i]*0.15: tip[j]=bill[i]*0.2 );
};
tipcalculate();
document.getElementById('app').innerHTML = `tip3 amount are : ${tip}`;
