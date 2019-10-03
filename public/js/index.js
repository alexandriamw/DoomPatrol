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


function user(name, level, hp, weapon, head, chest, boots, gloves) {
  this.name = name;
  this.level = level;
  this.hp = hp;
  this.weapon = weapon;
  this.head = head;
  this.chest = chest;
  this.boots = boots;
  this.gloves = gloves;
  this.totals = () => {
    let melee =
      this.weapon.attack +
      this.head.attack +
      this.chest.attack +
      this.boots.attack +
      this.gloves.attack +
      this.level;
    let defence =
      this.weapon.defence +
      this.head.defence +
      this.chest.defence +
      this.boots.defence +
      this.gloves.defence +
      this.level;
    let magic =
      this.weapon.magic +
      this.head.magic +
      this.chest.magic +
      this.boots.magic +
      this.gloves.magic +
      this.level;

    return [melee, defence, magic];
  };
}

function battle(fighter1, fighter2) {
  this.fighter1 = fighter1;
  this.fighter2 = fighter2;

  let eitherDead = false;

  let userMelee = fighter1.totals()[0];
  let userDefend = fighter1.totals()[1];
  let userMagic = fighter1.totals()[2];

  let compMelee = fighter2.totals()[0];
  let compDefend = fighter2.totals()[1];
  let compMagic = fighter2.totals()[2];

  let actions = ["melee", "defend", "magic"];

  document.addEventListener("click", event => {
    event.preventDefault();

    while (eitherDead === false) {
      // userAction = fn();
      console.log(
        `${fighter1.name} LVL ${fighter1.level} VS. ${fighter2.name} LVL ${fighter2.level}`
      );
      console.log(`${fighter1.name} Has ${fighter1.hp} Remaining`);
      console.log(`${fighter2.name} Has ${fighter2.hp} Remaining`);

      let fighter1Hp = fighter1.hp;
      let fighter2Hp = fighter2.hp;

      let counter = 0;

      function mainLoop() {
        counter++;
        // let userAction = actions[Math.floor(Math.random() * actions.length)];

        let userAction = document.querySelectorAll(".actions").forEach(el => {
          el.addEventListener("click", event => {
            event.preventDefault();

            userAction = el.value;
          });
        });
        let compAction = actions[Math.floor(Math.random() * actions.length)];

        console.log(`The User Did ${userAction}`);
        console.log(`The Computer Did ${compAction}`);
        console.log(`${fighter1.name} Has ${fighter1Hp} Left`);
        console.log(`${fighter2.name} Has ${fighter2Hp} Left`);

        console.log(counter);
        console.log(
          "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        if (userAction === "melee" && compAction === "melee") {
          let damage = Math.floor(Math.abs(userMelee - compMelee * 1.25));
          let crit = (2 * fighter1.level + 4 / 2 + userMelee + 2) * 1.05;
          console.log(damage);

          if (Math.floor(Math.random() * 25) === 5) {
            console.log("You Missed, I'm Not Mad, I'm Just Disapointed...");
          } else if (Math.floor(Math.random() * 25) === 7) {
            fighter1Hp = fighter1Hp - crit;
            fighter2Hp = fighter2Hp - crit;
            console.log(`${crit} THis is the crit`);
          } else {
            fighter1Hp = fighter1Hp - damage;
            fighter2Hp = fighter2Hp - damage;
          }
          checkHp(fighter1Hp, fighter2Hp);
        } else if (userAction === "defend" && compAction === "melee") {
          let damage = Math.floor(Math.abs(userDefend - compMelee * 1.15));
          let crit = (2 * fighter1.level + 4 / 2 + userDefend + 2) * 1.05;

          if (Math.floor(Math.random() * 25) === 5) {
            console.log("You Missed, I'm Not Mad, I'm Just Disapointed...");
          } else if (Math.floor(Math.random() * 25) === 7) {
            fighter2Hp = fighter2Hp - crit;
            console.log(`${crit} THis is the crit`);
          } else {
            fighter2Hp = fighter2Hp - damage;
          }
          checkHp(fighter1Hp, fighter2Hp);
        } else if (userAction === "magic" && compAction === "melee") {
          let damage = Math.floor(Math.abs(userMagic - compMelee * 1.3));
          let crit = (2 * fighter1.level + 4 / 2 + compMelee + 2) * 1.05;

          if (Math.floor(Math.random() * 25) === 5) {
            console.log("You Missed, I'm Not Mad, I'm Just Disapointed...");
          } else if (Math.floor(Math.random() * 25) === 7) {
            fighter1Hp = fighter1Hp - crit;
            console.log(`${crit} THis is the crit`);
          } else {
            fighter1Hp = fighter1Hp - damage;
          }
          checkHp(fighter1Hp, fighter2Hp);
        } else if (userAction === "melee" && compAction === "defend") {
          let damage = Math.floor(Math.abs(userMelee - compDefend * 1.15));
          let crit = (2 * fighter1.level + 4 / 2 + compDefend + 2) * 1.05;

          if (Math.floor(Math.random() * 25) === 5) {
            console.log("You Missed, I'm Not Mad, I'm Just Disapointed...");
          } else if (Math.floor(Math.random() * 25) === 7) {
            fighter1Hp = fighter1Hp - crit;
            console.log(`${crit} THis is the crit`);
          } else {
            fighter1Hp = fighter1Hp - damage;
          }
          checkHp(fighter1Hp, fighter2Hp);
        } else if (userAction === "defend" && compAction === "defend") {
          let damage = Math.floor(Math.abs(userDefend - compDefend * 1.09));
          let crit = (2 * fighter1.level + 4 / 2 + userDefend + 2) * 1.05;

          if (Math.floor(Math.random() * 25) === 5) {
            console.log("You Missed, I'm Not Mad, I'm Just Disapointed...");
          } else if (Math.floor(Math.random() * 25) === 7) {
            fighter1Hp = fighter1Hp - crit;
            fighter2Hp = fighter2Hp - crit;
            console.log(`${crit} THis is the crit`);
          } else {
            fighter1Hp = fighter1Hp - damage;
            fighter2Hp = fighter2Hp - damage;
          }
          checkHp(fighter1Hp, fighter2Hp);
        } else if (userAction === "magic" && compAction === "defend") {
          let damage = Math.floor(Math.abs(userMagic - compDefend * 1.3));
          let crit = (2 * fighter1.level + 4 / 2 + userMagic + 2) * 1.05;

          if (Math.floor(Math.random() * 25) === 5) {
            console.log("You Missed, I'm Not Mad, I'm Just Disapointed...");
          } else if (Math.floor(Math.random() * 25) === 7) {
            fighter2Hp = fighter2Hp - crit;
            console.log(`${crit} THis is the crit`);
          } else {
            fighter2Hp = fighter2Hp - damage;
          }
          checkHp(fighter1Hp, fighter2Hp);
        } else if (userAction === "melee" && compAction === "magic") {
          let damage = Math.floor(Math.abs(userMelee - compMagic * 1.3));
          let crit = (2 * fighter1.level + 4 / 2 + userMelee + 2) * 1.05;

          if (Math.floor(Math.random() * 25) === 5) {
            console.log("You Missed, I'm Not Mad, I'm Just Disapointed...");
          } else if (Math.floor(Math.random() * 25) === 7) {
            fighter2Hp = fighter2Hp - crit;
            console.log(`${crit} THis is the crit`);
          } else {
            fighter2Hp = fighter2Hp - damage;
          }
          checkHp(fighter1Hp, fighter2Hp);
        } else if (userAction === "defend" && compAction === "magic") {
          let damage = Math.floor(Math.abs(userDefend - compMagic * 1.3));
          let crit = (2 * fighter1.level + 4 / 2 + compMagic + 2) * 1.05;

          if (Math.floor(Math.random() * 25) === 5) {
            console.log("You Missed, I'm Not Mad, I'm Just Disapointed...");
          } else if (Math.floor(Math.random() * 25) === 7) {
            fighter1Hp = fighter1Hp - crit;
            console.log(`${crit} THis is the crit`);
          } else {
            fighter1Hp = fighter1Hp - damage;
          }
          checkHp(fighter1Hp, fighter2Hp);
        } else if (userAction === "magic" && compAction === "magic") {
          let damage = Math.floor(Math.abs(userMagic - compMagic * 1.25));
          let crit = (2 * fighter1.level + 4 / 2 + userMagic + 2) * 1.05;

          if (Math.floor(Math.random() * 25) === 5) {
            console.log("You Missed, I'm Not Mad, I'm Just Disapointed...");
          } else if (Math.floor(Math.random() * 25) === 7) {
            fighter1Hp = fighter1Hp - crit;
            fighter2Hp = fighter2Hp - crit;
            console.log(`${crit} THis is the crit`);
          } else {
            fighter1Hp = fighter1Hp - damage;
            fighter2Hp = fighter2Hp - damage;
          }
          checkHp(fighter1Hp, fighter2Hp);
        }
      }
      mainLoop();
      function checkHp(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
        if (value1 <= 0 || value2 <= 0) {
          return endLoop(fighter1Hp, fighter2Hp);
        }
        return mainLoop();
      }
    }
  });
  function endLoop(fighter1Hp, fighter2Hp) {
    console.log("GAME OVER");
    if (fighter1Hp > fighter2Hp) {
      fighter1.level++;
      fighter1.hp = fighter1.hp * 1.05;
    } else {
      fighter2.level++;
      fighter2.hp = fighter2.hp * 1.05;
    }
    return (eitherDead = true);
  }
}
// make call herer

document.getElementById("startBattle").addEventListener("click", event => {
  event.preventDefault();

  let accountInfo = fetch(`./api/users/`).then(response => {
    return response.json;
  });
  let random = fetch(`./api/random`).then(response => {
    return response.json;
  });

  let testUser1 = new user(accountInfo);
  let testUser2 = new user(random);

  let testBattle = new battle(testUser1, testUser2);

  testBattle();
});

document
  .getElementById("cancelBattleBtn")
  .addEventListener("click", function() {
    document.getElementById("battlePage").style.display = "none";
    document.getElementById("accountPage").style.display = "block";
  });
