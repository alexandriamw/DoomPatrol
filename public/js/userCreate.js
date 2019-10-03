document
  .getElementById("createAcctForm")
  .addEventListener("submit", function(event, cb) {
    // ---- prevent the default of refreshing page and submission ----
    event.preventDefault();

    // This is a variable that is used as the req.body for BE
    let uName = document.getElementById("signup_uname").value;
    let unhashedPW = document.getElementById("signup_psw").value;
    let emailInput = document.getElementById("email").value;

    // ---- display and stop displaying these things when the submit button is clicked for create Acc ----
    document.getElementById("createAcctFormPage").style.display = "none";
    document.getElementById("buffering").style.display = "block";

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
