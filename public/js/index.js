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

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// const handleDeleteBtnClick = function (event) {
//   const idToDelete = event.target.parentElement.getAttribute("data-id");
//   debugger
//   API.deleteExample(idToDelete).then(function () {
//     refreshExamples();
//   });
// };
