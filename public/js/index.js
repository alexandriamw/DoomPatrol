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
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
document
  .getElementById("loginForm")
  .addEventListener("submit", function(event) {
    // on submitting, prevent the default
    event.preventDefault();
    // then change the displays of these id's within our index.handlebars file
    document.getElementById("loginFormPage").style.display = "none";
    document.getElementById("buffering").style.display = "block";

    // create new variables for
    // the value that the user inputs into the username input field
    let loginUName = document.getElementById("uname").value;
    // the value that the user inputs into the password input field
    let loginUnhashedPW = document.getElementById("psw").value;

    // This checks to see if we have the username in our database
    fetch(`/api/users/accountName/${loginUName}`, {
      method: "GET"
      // go to this api route and get all the information that this route will give us : FOUND at apiRoutes.js
    })
      .then(function(response) {
        // return that data to the front end
        return response.json();
      })
      .then(function(data) {
        // Then with that data, we want to check to see if the username within out DB is the same as the user's input
        if (data.accountName === loginUName) {
          // If the user input matches the db, then check to see if the passwords are the same
          checkPassword(data);
        } else {
          //otherwise display these styles back on after 1.5 seconds
          setTimeout(function() {
            document.getElementById("loginFormPage").style.display = "block";
            document.getElementById("buffering").style.display = "none";
            // this one lets user know that the username is wrong
            document.getElementById("lUNameFail").style.display = "block";
          }, 1500);
        }
      });

    // checking the password in the database
    function checkPassword(data) {
      // So after checking username, go to this route and get that info
      fetch(`/api/users/checkpw/${loginUName}/${loginUnhashedPW}`, {
        method: "GET"
      })
        .then(function(response) {
          return response.json();
          // Return whatever that route does as a json file
        })
        .then(function(bcryptCheck) {
          // Take that data and if the result is true, meaning that the pw is correct, then do these things
          if (bcryptCheck === true) {
            // instead of going back to the character selection screen, you can go to the accounts page
            document.getElementById("createCharacter").style.display = "none";
            document.getElementById("accountPage").style.display = "block";
            document.getElementById("buffering").style.display = "none";
            document.getElementById("lPswFail").style.display = "none";
            document.getElementById("lUNameFail").style.display = "none";
          } else {
            //when the password is wrong, go back to the main page
            setTimeout(function() {
              document.getElementById("loginFormPage").style.display = "block";
              document.getElementById("buffering").style.display = "none";
              document.getElementById("lPswFail").style.display = "block";
            }, 1500);
          }
        });
    }
  });

// Input validation for creation input value
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
document.addEventListener("keyup", function(event) {
  // console.log("Somehting is happening: public/index.js");

  // array to hold the values we want to check so code isn't so wet
  let inputArr =
    // login credentials
    [
      document.getElementById("uname").value,
      document.getElementById("psw").value,
      // create ACC credentials
      document.getElementById("signup_uname").value,
      document.getElementById("signup_psw").value,
      document.getElementById("email").value
    ];

  for (let i = 0; i < inputArr.length; i++) {
    // these are the coding symbols we should look out for
    // for loop to go through them and check to see if they are in the input fields
    if (
      inputArr[i].includes("/") ||
      inputArr[i].includes("/") ||
      inputArr[i].includes("<") ||
      inputArr[i].includes(">") ||
      inputArr[i].includes("(") ||
      inputArr[i].includes(")") ||
      inputArr[i].includes("%") ||
      inputArr[i].includes("*") ||
      inputArr[i].includes(":") ||
      inputArr[i].includes(";") ||
      inputArr[i].includes("'") ||
      inputArr[i].includes("{") ||
      inputArr[i].includes("}") ||
      inputArr[i].includes(",") ||
      inputArr[i].includes('"') ||
      inputArr[i].includes("[") ||
      inputArr[i].includes("]")
    ) {
      // console.log("\nyou can't do this and it works: public/index.js\n");
      // return here so we can stop the loop function so that the buttons dont reactivate when there are no values in other places
      return disable();
    } else if (
      !inputArr[i].includes("/") ||
      !inputArr[i].includes("/") ||
      !inputArr[i].includes("<") ||
      !inputArr[i].includes(">") ||
      !inputArr[i].includes("(") ||
      !inputArr[i].includes(")") ||
      !inputArr[i].includes("%") ||
      !inputArr[i].includes("*") ||
      !inputArr[i].includes(":") ||
      !inputArr[i].includes(";") ||
      !inputArr[i].includes("'") ||
      !inputArr[i].includes("{") ||
      !inputArr[i].includes("}") ||
      !inputArr[i].includes(",") ||
      !inputArr[i].includes('"') ||
      !inputArr[i].includes("[") ||
      !inputArr[i].includes("]")
    ) {
      enable();
    }
  }
  // console.log("\n\n", inputArr);
});

// function to disable buttons when user uses code syntax
function disable() {
  // .disabled method allows the submit button to not go through if it returns true
  document.getElementById("loginFormButton").disabled = true;
  document.getElementById("signUpButton").disabled = true;
}

// function to enable buttons when user  code syntax
function enable() {
  document.getElementById("loginFormButton").disabled = false;
  document.getElementById("signUpButton").disabled = false;
}

//create account for new users, form data is saved
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
document
  .getElementById("createAcctForm")
  .addEventListener("submit", function(event, cb) {
    // ---- prevent the default of refreshing page and submission ----
    event.preventDefault();
    // ---- display and stop displaying these things when the submit button is clicked for create Acc ----
    document.getElementById("createAcctFormPage").style.display = "none";
    document.getElementById("buffering").style.display = "block";

    // This is a variable that is used as the req.body for BE
    let uName = document.getElementById("signup_uname").value;
    let unhashedPW = document.getElementById("signup_psw").value;
    let emailInput = document.getElementById("email").value;

    // console.log(uName + ": public/index.js\n\n\n");
    // console.log(unhashedPW + ": public/index.js\n\n\n");
    // console.log(emailInput + ":            public/index.js\n\n\n");

    // ---- FUNCTION to make sure that email is in email format ----
    ValidateEmail();

    // THEN go see if there is a current Username in the db already
    fetch(`/api/users/accountName/${uName}`, {
      method: "GET"
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        if (data === null) {
          // If there is no username there already then go see if their chosen email is already taken
          checkEmail();
        } else {
          //reset the styling if the username is already taken
          setTimeout(function() {
            document.getElementById("buffering").style.display = "none";
            document.getElementById("createAcctFormPage").style.display =
              "block";
            document.getElementById("cUNameFail").style.display = "block";
          }, 1500);
        }
      });

    // function to check emails so there are no duplicates
    function checkEmail() {
      fetch(`/api/users/email/${emailInput}`, {
        method: "GET"
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          if (data === null) {
            // If there are no duplicates on emails as well, then create a new account
            newAccount();
          } else {
            setTimeout(function() {
              // OTHERWISE do reset the styling
              document.getElementById("buffering").style.display = "none";
              document.getElementById("createAcctFormPage").style.display =
                "block";
              document.getElementById("cUNameFail").style.display = "none";
              document.getElementById("cEmailFail").style.display = "block";
            }, 1500);
          }
        });
    }

    function newAccount() {
      // Go to the route that makes a new account
      // You need the headers and body properties
      fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          accountName: uName,
          hashedPW: unhashedPW,
          email: emailInput
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          setTimeout(function() {
            // AFTER creating a new character, the set these styling
            document.getElementById("buffering").style.display = "none";
            document.getElementById("createCharacter").style.display = "block";
          }, 3000);
        });
    }
  });

document
  .getElementById("createCharacterForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    if (event.target.dad.value === "coolDad") {
      //not sure how this should be set up
    }
  });

// Validating emails
function ValidateEmail() {
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      document.getElementById("email").value
    )
  ) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}

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

document.getElementById("settings").addEventListener("click", function() {
  document.getElementById("settingsPop").style.display = "block";
});
// this is where we are updating passwords and usernames
// document.getElementById("confirmChangeBtn").addEventListener("submit")

document.getElementById("inventory").addEventListener("click", function() {
  document.getElementById("myInventoryPop").style.display = "block";
});

document
  .getElementById("cancelSettingsBtn")
  .addEventListener("click", function() {
    document.getElementById("settingsPop").style.display = "none";
  });

document.getElementById("closeInventory").addEventListener("click", function() {
  document.getElementById("myInventoryPop").style.display = "none";
});

document.getElementById("createCharBtn").addEventListener("click", function() {
  document.getElementById("createCharacter").style.display = "none";
  document.getElementById("accountPage").style.display = "block";
});

document.getElementById("battleButton").addEventListener("click", function() {
  document.getElementById("accountPage").style.display = "none";
  document.getElementById("battlePage").style.display = "block";
});

document
  .getElementById("cancelBattleBtn")
  .addEventListener("click", function() {
    document.getElementById("battlePage").style.display = "none";
    document.getElementById("accountPage").style.display = "block";
  });
