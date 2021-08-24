//static data
let person = [
{firstname: "raj", lastneme:"patel", age:24, email:"raj@patel.com"},
{firstname: "het", lastneme:"soni", age:27, email:"het@soni.com"},
{firstname: "jatin", lastneme:"sonkusle", age:34, email:"jatin@sonkusle.com"},
{firstname: "nikhil", lastneme:"sharma", age:36, email:"nikhil@sharma.com"},
{firstname: "manan", lastneme:"yadav", age:56, email:"manan@yadav.com"}
];

//push value
person.push({firstname: "rohit", lastneme: "sharma", age: 35, email: "rohit@sharma.com"});
console.log(`push method`);
console.log(person);

//assign value
let newArray = Object.assign([], person);
person = newArray;
console.log(`assign method`);
console.log(person);

//filter method
const personfilter = person.filter((value) => {
  return value.age >=35;
});
console.log(`filter method`);
console.log(personfilter);

//map method
let mapnames = person.map((value) => {
  return value.firstname;
});
console.log(`map method`);
console.log(mapnames);

//find
const findname = person.find((value) => {
  return value.firstname === "jatin";
});
console.log(`find method`);
console.log(findname);

//delete value using splice
let newArray1 = Object.assign([],person)
newArray1.splice(1, 1);
person = newArray1;
console.log(`delete(splice) method`);
console.log(person);


// //dynamic way to get input and perform (but got some problems in this way)
// let person = [];
// const addvalues = (ev) => {
//     ev.preventDefault(); //to stop the form submitting
//     let person1 = {
//       id: Date.now(),
//       fname: document.getElementById("fname").value,
//       lname: document.getElementById("lname").value,
//       age: document.getElementById("age").value,
//       email: document.getElementById("email").value,
//     };
//     person.push(person1);
//     document.forms[0].reset(); // to clear the form for the next entries
  
//     //for display purposes only
//     console.warn("added", { person });
//     let pre = document.querySelector("#msg pre");
//     pre.textContent = "\n" + JSON.stringify(person, "\t", 2);
  
  
//   // //push value
//   // person.push({firstname: "rohit", lastneme: "sharma", age: 35, email: "rohit@sharma.com"});
//   // console.log(person);
  
//   //assign value
//   person1 = Object.assign([], person);
//   person = person1;
//   console.log(person);
  
//   //filter method
//   const personfilter = person.filter((value) => {
//     return value.age == 23;
//   });
//   console.log(personfilter);
  
//   //map method
//   let mapnames = person.map((value) => {
//     console.log(value.fname);
//   });
//   console.log(mapnames);
  
//   //find
//   const findname = person.find((value) => {
//     value.fname === "abc";
//   //   console.log(findname);
//   });
//   console.log(findname);
  
//   };
//   //delete value using splice
//   person1 = Object.assign([],person)
//   person1.splice(1, 1);
//   person = person1;
//   console.log(person);
  
//   document.addEventListener("DOMContentLoaded", () => {
//       document.getElementById("btn").addEventListener("click", addvalues);
  
//   });
  