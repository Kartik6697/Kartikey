(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

// const username = document.getElementById("username");
// const password = document.getElementById("pass");

// const addClickFunction =
// document.getElementById("submit")
//   .addEventListener("click", (e) => {
//     debugger
//     e.preventDefault();
//       if (username.value === "" || password.value ===""){
//         username.setAttribute("class","invalid");
//         password.setAttribute("class","invalid");
//         console.log(`invalid input please check`);
//       }
//       else{
//         username.setAttribute("class","valid");
//         password.setAttribute("class","valid");
//         alert(`Username : ${username.value} ,Password : ${password.value}`);
//         console.log(`Username : ${username.value} ,Password : ${password.value}`);
//       }

// });
