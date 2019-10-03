document
  .getElementById("confirmChangeBtn")
  .addEventListener("click", function(event) {
    event.preventDefault();

    let oldUName = document.getElementById("olduname").value;
    let newUName = document.getElementById("newuname").value;
    let currentUName = document.getElementById("currentuname").value;
    let newPsw = document.getElementById("newpsw").value;

    if (
      oldUName !== "" &&
      newUName !== "" &&
      newPsw === "" &&
      currentUName === ""
    ) {
      console.log("--------------------- BREAK -----------------------");
      console.log("PASSWORD and CURRENT INPUT FIELD SHOULD BE EMPTY");
      // This checks to see if we have the username in our database
      fetch(`/api/users/accountName/${oldUName}`, {
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
            console.log(
              "\n\n If you get this one, then it means that the old username here is wrong\n\n"
            );
            document.getElementById("wrongOldUName").style.display = "block";
          } else {
            checkNewUserName();
          }
        });
    } else if (
      newPsw !== "" &&
      currentUName !== "" &&
      oldUName === "" &&
      newUName === ""
    ) {
      console.log("--------------------- BREAK -----------------------");
      console.log("USERNAME INPUT FIELD SHOULD BE EMPTY");
      fetch(`/api/users/accountName/${currentUName}`, {
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
            document.getElementById("wrongCurrentUName").style.display =
              "block";
            console.log(
              "\n\n If you get this one, then it means that the current username here is wrong\n\n"
            );
          } else {
            updatePassword();
          }
        });
    } else if (
      newPsw !== "" &&
      oldUName !== "" &&
      newUName !== "" &&
      currentUName !== ""
    ) {
      console.log("--------------------- BREAK -----------------------");
      console.log("DONT ALLOW IT TO GO THROUGH");
    }

    // This is code for updating the username
    // ------------------------------------------------------------------------------------------
    function checkNewUserName() {
      fetch(`/api/users/accountName/${newUName}`, {
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
            console.log(
              "\n\n THIS MEANS USER'S CHOSEN NEW NAME IS NOT PICKED YET\n\n"
            );
            updateUserName(data);
          } else {
            console.log(
              "IF YOU ARE HERE then it means that that username is already taken"
            );
            document.getElementById("wrongOldUName").style.display = "none";
            document.getElementById("takenNewUName").style.display = "block";
          }
        });
    }

    function updateUserName(data) {
      console.log(
        data,
        ":         this is the data sent from the checkNewUserName function"
      );
      console.log(oldUName, ":       this is the old username");
      console.log(newUName, ":       this is the new username");

      fetch(`/api/users/updateUName/${oldUName}`, {
        method: "PUT",
        body: JSON.stringify({
          oldUserName: oldUName,
          newUserName: newUName
        }),
        headers: {
          "Content-Type": "application/json"
        }
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
            console.log(
              "\n\n this MUST MEAN that the username has changed, but still need to check it out\n\n"
            );
          } else {
            console.log(
              "If you are HERE then you have reached teh updateUSERNAME function"
            );
            document.getElementById("intro").style.display = "none";
            document.getElementById("accountPage").style.display = "none";
            document.getElementById("loginFormPage").style.display = "block";
            document.getElementById("settingsPop").style.display = "none";

            document.getElementById("olduname").value = "";
            document.getElementById("newuname").value = "";
            document.getElementById("currentuname").value = "";
            document.getElementById("newpsw").value = "";
            document.getElementById("newpsw").value = "";
            document.getElementById("uname").value = "";
            document.getElementById("psw").value = "";
            document.getElementById("signup_uname").value = "";
            document.getElementById("signup_psw").value = "";
            document.getElementById("email").value = "";
          }
        });
    }

    // This is code for updating the password
    // ------------------------------------------------------------------------------------------
    function updatePassword() {
      fetch(`/api/users/updatepass/`, {
        method: "PUT",
        body: JSON.stringify({
          accountName: currentUName,
          hashedPW: newPsw
        }),
        headers: {
          "Content-Type": "application/json"
        }
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
            console.log(
              "\n\n this MUST MEAN that the username has changed, but still need to check it out\n\n"
            );
          } else {
            console.log(
              "If you are HERE then you have reached teh updatePASSWORD function"
            );
            document.getElementById("intro").style.display = "none";
            document.getElementById("accountPage").style.display = "none";
            document.getElementById("loginFormPage").style.display = "block";
            document.getElementById("settingsPop").style.display = "none";

            document.getElementById("olduname").value = "";
            document.getElementById("newuname").value = "";
            document.getElementById("currentuname").value = "";
            document.getElementById("newpsw").value = "";
            document.getElementById("newpsw").value = "";
            document.getElementById("uname").value = "";
            document.getElementById("psw").value = "";
            document.getElementById("signup_uname").value = "";
            document.getElementById("signup_psw").value = "";
            document.getElementById("email").value = "";
          }
        });
    }
  });
