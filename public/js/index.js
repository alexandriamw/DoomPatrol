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
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setTimeout(function() {
          console.log(
            "\n\nThis is the end of the function of the button" + data
          );

          //to-do: change screen upon signup
          document.getElementById("buffering").style.display = "none";
          document.getElementById("createCharacter").style.display = "block";
        }, 3000);
      });
  });

document
  .getElementById("createCharacterForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    if (event.target.dad.value === "coolDad") {
      //not sure how this should be set up
    }
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

document.getElementById("buyWeapons").addEventListener("click", function() {
  document.getElementById("buyWeaponPop").style.display = "block";
});

document.getElementById("buyArmor").addEventListener("click", function() {
  document.getElementById("buyArmorPop").style.display = "block";
});

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
