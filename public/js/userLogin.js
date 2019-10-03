document
  .getElementById("loginForm")
  .addEventListener("submit", function(event) {
    // on submitting, prevent the default
    event.preventDefault();

    // create new variables for
    // the value that the user inputs into the username input field
    let loginUName = document.getElementById("uname").value;
    // the value that the user inputs into the password input field
    let loginUnhashedPW = document.getElementById("psw").value;

    // then change the displays of these id's within our index.handlebars file
    document.getElementById("loginFormPage").style.display = "none";
    document.getElementById("buffering").style.display = "block";

    // This checks to see if we have the username in our database
    fetch(`/api/users/accountName/${loginUName}`, {
      method: "GET"
      // go to this api route and get all the information that this route will give us : FOUND at apiRoutes.js
    })
      .then(function(response) {
        // return that data to the front end
        console.log(response);
        return response.json();
      })
      .then(function(data) {
        // Then with that data, we want to check to see if the username within out DB is the same as the user's input
        console.log(data);
        if (data === null) {
          //otherwise display these styles back on after 1.5 seconds
          console.log("\n\n WHAT IS GOING ON IN THIS ELSE IF STATEMENT\n\n");
          setTimeout(function() {
            document.getElementById("loginFormPage").style.display = "block";
            document.getElementById("buffering").style.display = "none";
            // this one lets user know that the username is wrong
            document.getElementById("lUNameFail").style.display = "block";
            document.getElementById("lPswFail").style.display = "none";
          }, 1500);
        } else {
          // If the user input matches the db, then check to see if the passwords are the same
          console.log("\n\n WHAT IS GONG ON HERE\n\n");
          checkPassword(data);
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
              document.getElementById("lUNameFail").style.display = "none";
              document.getElementById("lPswFail").style.display = "block";
            }, 1500);
          }
        });
    }
  });
