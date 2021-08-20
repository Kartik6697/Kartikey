// // declaring all the variables and methods in DOMContentLoaded
// window.onload = () => {
//   const List1 = document.querySelector("#addForm"); //perform task of showing inserted items

//   let items = document.getElementById("items"); // items is for the input values
//   let submit = document.getElementById("submit"); // declaring submit

//   let editItem = null; // declaring editItem

//   List1.addEventListener("submit", addItem); // activates querySelector on click of submit button
//   items.addEventListener("click", removeItem); // perform particular operation on click of the button else remove the item directly
// };

// // process getting inputs from user
// function addItem(x) {
//   x.preventDefault();

//   // properties for submit button
//   // if you performing updation task and during that perform deletion than this msg shows
//   if (submit.value != "Submit") {
//     console.log("Hello");

//     //this will set items as per sequence
//     editItem.target.parentNode.childNodes[0].data =
//       document.getElementById("item").value;

//     submit.value = "Submit";
//     document.getElementById("item").value = "";

//     // displays messge for update task
//     document.getElementById("lblsuccess").innerHTML =
//       "Text updated successfully";

//     document.getElementById("lblsuccess").style.display = "block";

//     // time set for display message of operation
//     setTimeout(function () {
//       document.getElementById("lblsuccess").style.display = "none";
//     }, 1000);

//     return false;
//   }

//   // this will remove extra spacs in input values
//   let newItem = document.getElementById("item").value;
//   if (newItem.trim() == "" || newItem.trim() == null) return false;
//   else document.getElementById("item").value = "";

//   // it shows items in list way
//   let li = document.createElement("li");
//   li.className = "list-group-item";

//   // delte button properties
//   let deleteButton = document.createElement("button");
//   deleteButton.className = "btn-danger btn btn-sm float-right delete";
//   deleteButton.appendChild(document.createTextNode("Delete"));

//   // update button properties
//   let editButton = document.createElement("button");
//   editButton.className = "btn btn-info btn btn-sm float-right edit";
//   editButton.appendChild(document.createTextNode("Update"));

//   // this properties for make changes in the input list
//   li.appendChild(document.createTextNode(newItem));
//   li.appendChild(deleteButton);
//   li.appendChild(editButton);
//   items.appendChild(li);
// }

// // this is for confirmation of deletion operation
// function removeItem(e) {
//   e.preventDefault();
//   if (e.target.classList.contains("delete")) {
//     if (confirm("Are you Sure?")) {
//       // verify the condition from user
//       // if operation is successful than print this message
//       let li = e.target.parentNode;
//       items.removeChild(li);
//       document.getElementById("lblsuccess").innerHTML =
//         "Text deleted successfully";

//       document.getElementById("lblsuccess").style.display = "block";

//       // time stamp for showing message
//       setTimeout(function () {
//         document.getElementById("lblsuccess").style.display = "none";
//       }, 1000);
//     }
//   }

//   // this is the property  during input update
//   if (e.target.classList.contains("edit")) {
//     document.getElementById("item").value =
//       e.target.parentNode.childNodes[0].data;
//     submit.value = "EDIT";
//     editItem = e;
//   }
// }

// // function for activate submit button
// function toggleButton(ref, btnID) {
//   document.getElementById(btnID).disabled = false;
// }
