// const results = () => {
    // const username = document.getElementById('username').value;
    // const password = document.getElementById('pass').value;

//     document.write(`username : ${username} <br>`);
//     document.write(`password : ${password} <br>`);
// }

const username = document.getElementById("username");
const password = document.getElementById("pass");


const addClickFunction = 
document.getElementById("submit")
  .addEventListener("click", (e) => {
    debugger  
    e.preventDefault();
      if (username.value === "" || password.value ===""){
        username.setAttribute("class","invalid");
        password.setAttribute("class","invalid");
        console.log(`invalid input please check`);
      }
      else{
        username.setAttribute("class","valid");
        password.setAttribute("class","valid");
        alert(`Username : ${username.value} ,Password : ${password.value}`);
        console.log(`Username : ${username.value} ,Password : ${password.value}`);
      }

});