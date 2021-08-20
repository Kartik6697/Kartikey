//for loop
document.write(`<h2> For loop </h2>`);
const jsondata1 = ["Hockey", "Badminton", "Volleyball", "Cricket", "Football"];
for (let i = 0; i < jsondata1.length; i++) {
  document.write(`array's ${i} index values is : ${(1)[i]} <br>`);
}
document.write(`<br>`);

//forEach loop
document.write(`<h2> forEach loop </h2>`);
const jsondata2 = ["Hockey", "Badminton", "Volleyball", "Cricket", "Football"];
//create a function to display value
const function1 = (Value, index) => {
  document.write(`index is: ${index} ==> Value is: ${Value} <br>`);
};
jsondata2.forEach(function1);
document.write(`<br>`);

//for_in loop
document.write(`<h2> for_in loop </h2>`);
let jsondata3 = [
  { day: "Sunday", sport: "Hockey" },
  { day: "Saturday", sport: "Football" },
];
//for access jsondata array
for (let key in jsondata3) {
  //for access jsondata array value
  for (let key1 in jsondata3[key]) {
    document.write(`${jsondata3[key][key1]} <br>`);
  }
}
document.write(`<br>`);

// for_of loop
document.write(`<h2> for_of loop </h2>`);
const jsondata4 = ["Hockey", "Badminton", "Volleyball", "Cricket", "Football"];
let a,
  i = 0;
for (a of jsondata4) {
  document.write(`${i++} index jsondata value : ${a}  <br >`);
}
document.write(`<br>`);

//while loop
document.write(`<h2> while loop </h2>`);
const myFunction = () => {
  const jsondata5 = [
    "Hockey",
    "Badminton",
    "Volleyball",
    "Cricket",
    "Football",
  ];
  let i = 0,
    sports = ""; // one container declared named sports for store value of array in it
  while (i < jsondata5.length) {
    sports += jsondata5[i] + "<br>";
    i++;
  }
  document.write(sports);
};
myFunction();
document.write(`<br>`);

// map implementation
document.write(`<h2> map function </h2>`);
let data;
const jsondata6 = [
  { name: "Manpreet", sport: "Hockey" },
  { name: "Sunil", sport: "Football" },
  { name: "Gurinder", sport: "Volleyball" },
];
//create a function to take array values
let NameDetail = (item) => {
  data = [`${item.name} is captain of Indian ${item.sport} Team <br>`];
  document.write(data);
};
//map the function
document.write(jsondata6.map(NameDetail));
document.write(`<br>`);
