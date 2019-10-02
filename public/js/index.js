//computer waits for user to press login, then hides intro and shows login form

document.getElementById("loginButton").addEventListener("click", function() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("loginFormPage").style.display = "block";
});

//computer waits for user to press create an account button, then hides intro and shows create account form
document.getElementById("createButton").addEventListener("click", function() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("loginFormPage").style.display = "none";
  document.getElementById("createAcctFormPage").style.display = "block";
});

//login form for existing users is clicked, form data saved
document
  .getElementById("loginForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("loginFormPage").style.display = "none";
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
        setTimeout(function() {
          document.getElementById("buffering").style.display = "none";
          document.getElementById("createCharacter").style.display = "block";
        }, 3000);
        //to-do: change screen upon login
      });
    });
  });

// Input validation for creation input value
document.addEventListener("keyup", function(event) {
  console.log(document.getElementById("signup_uname").value);
  console.log("Somehting is happening");

  // array to hold the values we want to check so code isn't so wet
  let inputArr =
    // login credentials
    [
      document.getElementById("uname").value,
      document.getElementById("psw").value,
      // create ACC credentials
      document.getElementById("signup_uname").value,
      document.getElementById("signup_psw").value
    ];

  console.log("\n\n", inputArr);

  // let createUNStr = document.getElementById("signup_uname").value;

  // let frontSlashChecker = userNameStr.includes("/");
  // let questionMarkChecker = userNameStr.includes("?");
  // let lessThanChecker = userNameStr.includes("<");
  // let greaterThanChecker = userNameStr.includes(">");
  // let leftParanthesesChceker = userNameStr.includes("(");
  // let rightParantheseChecker = userNameStr.includes(")");
  // let percentageChecker = userNameStr.includes("%");
  // let asterickChecker = userNameStr.includes("*");
  // let colonChecker = userNameStr.includes(":");
  // let semicolonChecker = userNameStr.includes(";");
  // let stringChecker = userNameStr.includes("'");
  // let leftCurlyBracketsChecker = userNameStr.includes("{");
  // let rightCurlyBracketsChecker = userNameStr.includes("}");
  // let commaChecker = userNameStr.includes(",");

  function myFunction() {
    var str = "Hello world, welcome to the universe.";
    var n = str.includes("world");
    document.getElementById("demo").innerHTML = n;
  }
});

//create account for new users, form data is saved
document
  .getElementById("createAcctForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("createAcctFormPage").style.display = "none";
    document.getElementById("buffering").style.display = "block";

    // const formData = {
    //   uName: event.target.uname.value,
    //   psw: event.target.psw.value
    // };

    // This is a variable that is used as the req.params.(whatever) for the backend
    let uName = document.getElementById("signup_uname").value;
    let unhashedPW = document.getElementById("signup_psw").value;
    console.log(uName + "\n\n\n");
    console.log(unhashedPW + "\n\n\n");

    //BACKEND: you'll need to change BACKEND_END_POINT to whatever you name the API
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        accountName: uName,
        hashedPW: unhashedPW
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function(response) {
      response.json().then(function(data) {
        setTimeout(function() {
          document.getElementById("buffering").style.display = "none";
          document.getElementById("createCharacter").style.display = "block";
        }, 3000);
        //to-do: change screen upon signup
      });
    });
  });

document.getElementById("cancelButton").addEventListener("click", function() {
  document.getElementById("createAcctFormPage").style.display = "none";
  document.getElementById("intro").style.display = "block";
});

document
  .getElementById("cancelBattleButton")
  .addEventListener("click", function() {
    document.getElementById("buffering").style.display = "none";
    document.getElementById("intro").style.display = "block";
  });

document
  .getElementById("cancelLogButton")
  .addEventListener("click", function() {
    document.getElementById("loginFormPage").style.display = "none";
    document.getElementById("intro").style.display = "block";
  });

document
  .getElementById("cancelCreateButton")
  .addEventListener("click", function() {
    document.getElementById("createCharacter").style.display = "none";
    document.getElementById("intro").style.display = "block";
  });
