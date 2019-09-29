//computer waits for user to press login, then hides intro and shows login form
document.getElementById("loginButton").addEventListener("click", function() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
});

//computer waits for user to press create an account button, then hides intro and shows create account form
document.getElementById("createButton").addEventListener("click", function() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("createAccountForm").style.display = "block";
});

document
  .getElementById("loginFormButton")
  .addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("buffering").style.display = "block";

    const formData = {
      uname: event.target.uname.value,
      psw: event.target.psw.value
    };

    //BACKEND: you'll need to change BACKEND_END_POINT to whatever you name the API
    fetch("/api/BACKEND_END_POINT", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    }).then(function(response) {
      response.json().then(function(data) {
        //to-do: change screen upon login
      });
    });
  });

// The API object contains methods for each kind of request we'll make
// const API = {
//   saveExample: function (example) {
//     return fetch("/api/examples", {
//       headers: {
//         "Content-Type": "application/json"
//       },
//       method: "POST",
//       body: JSON.stringify(example)
//     }).then(res => res.json());
//   },
//   getExamples: function () {
//     return fetch("/api/examples").then(res => res.json());
//   },
//   deleteExample: function (id) {
//     return fetch("/api/examples/" + id, {
//       method: "DELETE"
//     }).then(res => res.json);
//   }
// };

// refreshExamples gets new examples from the db and repopulates the list
// const refreshExamples = function () {
//   API.getExamples().then(function (data) {
//     const exampleEls = data.map(function (example) {
//       const aEl = document.createElement("a")
//       aEl.innerHTML = example.text;
//       aEl.setAttribute("href", "/example/" + example.id);

//       const liEl = document.createElement("li")
//       liEl.classList.add("list-group-item")
//       liEl.setAttribute("data-id", example.id)
//       liEl.append(aEl);

//       const buttonEl = document.createElement("button")
//       buttonEl.classList.add("btn", "btn-danger", "float-right", "delete")
//       buttonEl.innerHTML = "ｘ";
//       buttonEl.addEventListener("click", handleDeleteBtnClick);

//       liEl.append(buttonEl);

//       return liEl;
//     });

//   });
// };

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
// const handleFormSubmit = function (event) {
//   event.preventDefault();

//   API.saveExample(example).then(function () {
//     refreshExamples();
//   });

// };
