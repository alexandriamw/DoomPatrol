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
      console.log("\nyou can't do this and it works: public/index.js\n");
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

  console.log("\n\n", inputArr);
});

// function to disable buttons when user uses code syntax
function disable() {
  document.getElementById("loginFormButton").disabled = true;
  console.log(
    "\nYUP YUP YUP YUP got the Login button disabled: public/index.js\n"
  );
  document.getElementById("signUpButton").disabled = true;
}

// function to enable buttons when user  code syntax
function enable() {
  document.getElementById("loginFormButton").disabled = false;
  console.log(
    "\nGO GO GO GO got the Login button enabled again: public/index.js\n"
  );
  document.getElementById("signUpButton").disabled = false;
}

//create account for new users, form data is saved
document
  .getElementById("createAcctForm")
  .addEventListener("submit", function(event, cb) {
    event.preventDefault();
    document.getElementById("createAcctFormPage").style.display = "none";
    document.getElementById("buffering").style.display = "block";

    // This is a variable that is used as the req.body for BE
    let uName = document.getElementById("signup_uname").value;
    let unhashedPW = document.getElementById("signup_psw").value;
    let emailInput = document.getElementById("email").value;

    // console.log(uName + ": public/index.js\n\n\n");
    // console.log(unhashedPW + ": public/index.js\n\n\n");
    console.log(emailInput + ":            public/index.js\n\n\n");

    // make sure that email is in email format
    ValidateEmail();

    // console.log(`\n\n/api/users/${uName}:               index.js\n`);

    // go see if there is a current Username in the db already
    fetch(`/api/users/accountName/${uName}`, {
      method: "GET"
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // console.log(data, "DID SOMETHING ACTUALLY HAPPEN?");
        if (data === null) {
          // If there is no username there already then go see if their chosen email is already taken
          checkEmail();
        } else {
          //to-do: when sign up fails
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
          // console.log(data, "DID SOMETHING ACTUALLY HAPPEN?");
          if (data === null) {
            // If there are no duplicates on emails as well, then create a new account
            newAccount();
          } else {
            setTimeout(function() {
              //to-do: when sign up fails
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
      //BACKEND: you'll need to change BACKEND_END_POINT to whatever you name the API
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
            // console.log(
            //   "\n\nThis is the end of the function of the button: public/index.js" +
            //   data
            // );

            //to-do: change screen upon signup
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

document.getElementById("buyWeapons").addEventListener("click", function() {
  document.getElementById("buyWeaponPop").style.display = "block";
});

document.getElementById("buyArmor").addEventListener("click", function() {
  document.getElementById("buyArmorPop").style.display = "block";
});

//add inventory here ----------
document.getElementById("settings").addEventListener("click", function() {
  document.getElementById("settingsPop").style.display = "block";
});

document.getElementById("inventory").addEventListener("click", function() {
  document.getElementById("myInventoryPop").style.display = "block";
});

document
  .getElementById("cancelWeaponBtn")
  .addEventListener("click", function() {
    document.getElementById("buyWeaponPop").style.display = "none";
  });

document.getElementById("cancelArmorBtn").addEventListener("click", function() {
  document.getElementById("buyArmorPop").style.display = "none";
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
