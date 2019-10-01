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

//login form for existing users is clicked, form data saved
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

//create account for new users, form data is saved
document
  .getElementById("signUpButton")
  .addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("createAccountForm").style.display = "none";
    document.getElementById("buffering").style.display = "block";

    // const formData = {
    //   uName: event.target.uname.value,
    //   psw: event.target.psw.value
    // };

    // This is a variable that is used as the req.params.(whatever) for the backend
    let uName = document.getElementById("signup_uname").value;
    let hashedpsw = document.getElementById("signup_psw").value;
    console.log("\n\n\n" + "/api/users/" + uName + "\n\n\n");
    console.log("\n\n\n" + "/api/users/" + hashedpsw + "\n\n\n");

    //BACKEND: you'll need to change BACKEND_END_POINT to whatever you name the API
    fetch("/api/register/", {
      method: "POST",
      body: { accountName: uName, hashedPW: hashedpsw }
      // headers: {
      //   "Content-Type": "application/json; charset=utf-8"
      // }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        //to-do: change screen upon signup
      });

    fetch("/api/hashedPW/" + hashedpsw, {
      method: "POST",
      body: { hashedPW: hashedpsw }
      // headers: {
      //   "Content-Type": "application/json; charset=utf-8"
      // }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        //to-do: change screen upon signup
      });
  });

document.getElementById("cancelButton").addEventListener("click", function() {
  document.getElementById("createAccountForm").style.display = "none";
  document.getElementById("intro").style.display = "block";
});

document
  .getElementById("cancelLogButton")
  .addEventListener("click", function() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("intro").style.display = "block";
  });
