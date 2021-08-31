//function called here to display list eveytime
// showtask function
const showtask =() => {
  const webtask = localStorage.getItem("localtask");
  if (webtask == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(webtask);
  }
  let html = ""; //empty string variable
  let addedtasklist = document.getElementById("addedtasklist");
  taskObj.forEach((item, index) => {
    if (item.completeStatus) {
      taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
    } else {
      taskCompleteValue = `<td>${item.task_name}</td>`;
    }
    //table to display values / tr will repeat every time in loop
    html += `<tr>
                    <th scope="row">${index + 1}</th>
                    ${taskCompleteValue}
                    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
  });
  //innerHTML of table is equal to html and the vlaue will go into the html
  addedtasklist.innerHTML = html;
}

showtask();
const addtaskinput = document.getElementById("addtaskinput");
const addtaskbtn = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click", function () {
  let addtaskinputval = addtaskinput.value; //get input value
  //check the input is blank or not / if not than this task will perform
  if (addtaskinputval.trim() != 0) {
    //check that any value is already in local storage or not / if not then create one array to store value
     webtask = localStorage.getItem("localtask");
    if (webtask == null) {
      taskObj = [];
    }
    //if not empty then we parse that variable to apply diff methods on that data
    else {
      taskObj = JSON.parse(webtask);
    }
    taskObj.push({ task_name: addtaskinputval, completeStatus: false });
    //we create obj through parse and for now get value we use stringify
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    addtaskinput.value = "";
  }
  showtask();
});



// edittask
const edittask = (index) => {
  //get buttons of add and save
  const saveindex = document.getElementById("saveindex"); //text of hidden input is get through this line
  const addtaskbtn = document.getElementById("addtaskbtn");
  const savetaskbtn = document.getElementById("savetaskbtn");
  //set value of hidden input as index
  saveindex.value = index;
  //get data stored in localstorage
  webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);
  addtaskinput.value = taskObj[index]["task_name"];
  //style property to display buttons simulteniously
  addtaskbtn.style.display = "none";
  savetaskbtn.style.display = "block";
}

// savetask
savetaskbtn = document.getElementById("savetaskbtn");
savetaskbtn.addEventListener("click", function () {
  //get from local storage
  let addtaskbtn = document.getElementById("addtaskbtn");
  webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);
  let saveindex = document.getElementById("saveindex").value; //same index type became value for hidden input, that value stored in this variable
  //to store edited value in local storage
  for (keys in taskObj[saveindex]) {
    if (keys == "task_name") {
      taskObj[saveindex].task_name = addtaskinput.value;
    }
  }
  savetaskbtn.style.display = "none";
  addtaskbtn.style.display = "block";
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  addtaskinput.value = "";
  showtask();
});
// deleteitem
const deleteitem = (index) => {
  //first we get value from local storage
  webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);
  //if we know we can use splice to perform deletion
  //in bracate index= value stored in array and 1=no of vlaues to be deleted
  taskObj.splice(index, 1);
  //after delete value we set the array so it is delete
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  showtask();
}

// deleteall
const deleteallbtn = document.getElementById("deleteallbtn");
deleteallbtn.addEventListener("click", function () {
  //we get those elements from add and save
  savetaskbtn = document.getElementById("savetaskbtn");
  addtaskbtn = document.getElementById("addtaskbtn");
  webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);
  if (webtask == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(webtask);
    taskObj = [];
  }
  savetaskbtn.style.display = "none";
  addtaskbtn.style.display = "block";
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  showtask();
});