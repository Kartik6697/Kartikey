//for loop
const jsondata = ["Hockey", "Badminton", "Volleyball", "Cricket", "Football"];
for (let i = 0; i < jsondata.length; i++) {
    document.write(`array's ${i} index values is : ${jsondata[i]} <br>` );
}

// //forEach loop
// const jsondata = ["Hockey", "Badminton", "Volleyball", "Cricket", "Football"];
// jsondata.forEach(function1);
// //create a function to display value
// function function1(Value, index) {
//    document.write(`index is: ${index} ==> Value is: ${Value} <br>`);
// }

// //for_in loop
// let jsondata = [
//   { day: "Sunday", sport: "Hockey" },
//   { day: "Saturday", sport: "Football" },
// ];

// //for access jsondata array
// for (let key in jsondata) {
//   //for access jsondata array value
//   for (let key1 in jsondata[key]) {
//     document.write(`${jsondata[key][key1]} <br>`);
//   }
// }

// // for_of loop
// const jsondata = ["Hockey", "Badminton", "Volleyball", "Cricket", "Football"];
// let a , i=0;

// for (a of jsondata) {
//   document.write(`${i++} index jsondata value : ${a}  <br >`);
// }

// //while loop
// myFunction = () => {
//     const jsondata = ["Hockey", "Badminton", "Volleyball", "Cricket", "Football"];
//     let i=0, sports = "";   // one container declared named sports for store value of array in it
//     while (i < jsondata.length) {
//         sports += jsondata[i] + "<br>";
//         i++;
//     }
//     document.write(sports);
//   }
//   myFunction();

//map implementation
// let data;
// const jsondata = [
//   { name: "Manpreet", sport: "Hockey" },
//   { name: "Sunil", sport: "Football" },
//   { name: "Gurinder", sport: "Volleyball" },
// ];
// //map the function
// document.write(jsondata.map(NameDetail));
// //create a function to take array values
// function NameDetail(item) {
//   data = [`${item.name} is captain of Indian ${item.sport} Team <br>`];
//   document.write(data);
// }
