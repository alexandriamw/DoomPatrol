// First off, new User Constructor
function User(userinfo) {
  this.name = userinfo.accountName;
  this.level = userinfo.level;
  this.hp = userinfo.hp;

  let meleeArrVar = [];
  let defenceArrVar = [];
  let magicArrVar = [];

  // We want to get values from these tables, so we got to make sure that these tables exist and then fix the requests
  this.weapon = fetch(`/api/weapon`)
    .then(function(response) {
      return response.json();
    })
    .then(function(responsejson) {
      console.log("TESTING OUT THE WEAPON ID");
      console.log(responsejson);
      console.log(responsejson.Melee, ":           this is the melee factor");
      meleeArrVar.push(responsejson.Melee);
      defenceArrVar.push(responsejson.defence);
      magicArrVar.push(responsejson.magic);

      return responsejson.Melee;
    });

  this.head = fetch(`/api/helmet`)
    .then(function(response) {
      return response.json();
    })
    .then(function(responsejson) {
      console.log("TESTING OUT THE Head ID");
      console.log(responsejson);
      console.log(responsejson.Melee, ":           this is the Melee factor");
      meleeArrVar.push(responsejson.Melee);
      defenceArrVar.push(responsejson.defence);
      magicArrVar.push(responsejson.magic);
    });

  this.chest = fetch(`/api/chests`)
    .then(function(response) {
      return response.json();
    })
    .then(function(responsejson) {
      console.log("TESTING OUT THE Chest ID");
      console.log(responsejson);
      console.log(responsejson.Melee, ":           this is the Melee factor");
      meleeArrVar.push(responsejson.Melee);
      defenceArrVar.push(responsejson.defence);
      magicArrVar.push(responsejson.magic);
    });

  this.boots = fetch(`/api/boots`)
    .then(function(response) {
      return response.json();
    })
    .then(function(responsejson) {
      console.log("TESTING OUT THE Boots ID");
      console.log(responsejson);
      console.log(responsejson.Melee, ":           this is the Melee factor");
      meleeArrVar.push(responsejson.Melee);
      defenceArrVar.push(responsejson.defence);
      magicArrVar.push(responsejson.magic);
    });

  this.gloves = fetch(`/api/gloves`)
    .then(function(response) {
      return response.json();
    })
    .then(function(responsejson) {
      console.log("TESTING OUT THE gloves ID");
      console.log(responsejson);
      console.log(responsejson.melee, ":           this is the Melee factor");
      meleeArrVar.push(responsejson.melee);
      defenceArrVar.push(responsejson.defence);
      magicArrVar.push(responsejson.magic);
    });

  this.meleeArr = meleeArrVar;
  this.defenceArr = defenceArrVar;
  this.magicArr = magicArrVar;

  // this.totals = () => {
  //   let melee =
  //     this.weapon.Melee +
  //     this.head.Melee +
  //     this.chest.Melee +
  //     this.boots.Melee +
  //     this.gloves.melee +
  //     this.level;
  //   // console.log(this.weapon.Melee, ":       HOPEFULLY THIS THING WORKS");
  //   let defence =
  //     this.weapon.defence +
  //     this.head.defence +
  //     this.chest.defence +
  //     this.boots.defence +
  //     this.gloves.defence +
  //     this.level;
  //   let magic =
  //     this.weapon.magic +
  //     this.head.magic +
  //     this.chest.magic +
  //     this.boots.magic +
  //     this.gloves.magic +
  //     this.level;
  // whenever the totals function is called from a new User, it will always give an array
  // return [melee, defence, magic];
  // };
}

// Then create a new contructor called battle that takes in two arguements that represents the fighters
// This constructor is the one that handles the whole battle when called to be activated through a endless loop until someone dies
function Battle(fighter1, fighter2) {
  this.fighter1 = fighter1;
  this.fighter2 = fighter2;
  // This variable is the one that lets us know when someone dies, when it switches to true
  let eitherDead = false;
  console.log(fighter1.weapon, "I hope that this is not 0 ZERO");
  console.log(fighter2, "I hope that this is not 0 ZERO");
  console.log(fighter1.meleeArr, fighter1.defenceArr, fighter1.magicArr);

  // THIS FUNCTION is for the reduce method for arrays, without it, it breaks
  function addValues(total, num) {
    return total + num;
  }

  // This is how I handled Chris' this.total function since it always either came up as NaN or undefined
  let userMelee = fighter1.meleeArr.reduce(addValues);
  let userDefend = fighter1.defenceArr.reduce(addValues);
  let userMagic = fighter1.magicArr.reduce(addValues);
  console.log(userMelee, userDefend, userMagic);

  let compMelee = fighter2.meleeArr.reduce(addValues);
  let compDefend = fighter2.defenceArr.reduce(addValues);
  let compMagic = fighter2.magicArr.reduce(addValues);

  console.log(compMelee, compDefend, compMagic);

  // Again these array values pertain to the totals function from earlier [0] = melee [1] = defend [2] = magic
  // let userMelee = fighter1.totals()[0];
  // let userDefend = fighter1.totals()[1];
  // let userMagic = fighter1.totals()[2];

  // let compMelee = fighter2.totals()[0];
  // let compDefend = fighter2.totals()[1];
  // let compMagic = fighter2.totals()[2];

  // We then created a new array that are strings that correlate to the totals function array
  // notice how they are in the same index numbers as well so that we can reference them correctly
  let actions = ["melee", "defend", "magic"];

  // THEN when all of this prep work is finished, we apparently just want to click anywhere and trigger the fighting loop
  // We still have the buttons on the FE, so I'm not sure how we can change this yet
  this.loopedBattle = function() {
    // after the click, we are checking to see if our death variable is still false, and while it is, it's gonna do these things
    // ------------------------------------------------------------------------------------------------------------------------------
    // while (eitherDead === false) {
    // ------------------------------------------------------------------------------------------------------------------------------
    // console.logging for our own sakes to see what's going on
    console.log(`\n\n\n ${userMelee}:   ${userDefend}:   ${userMagic}\n\n\n`);
    console.log(
      `${fighter1.name} LVL ${fighter1.level} VS. ${fighter2.name} LVL ${fighter2.level}`
    );
    console.log(`${fighter1.name} Has ${fighter1.hp} Remaining`);
    console.log(`${fighter2.name} Has ${fighter2.hp} Remaining`);

    // create new variables to use independently and to save some chars
    let fighter1Hp = fighter1.hp;
    let fighter2Hp = fighter2.hp;

    setInterval(() => {
      document.getElementById("u1hp").innerHTML = fighter1Hp;
    }, 300);

    setInterval(() => {
      document.getElementById("u2hp").innerHTML = fighter2Hp;
    }, 300);

    // Create a limit to how many *rounds* goes by before its a mandatory stop
    let counter = 0;

    // Then trigger this main loop function
    // added a set timeout to stop it from going rampant
    function mainLoopRestraint() {
      setTimeout(() => {
        mainLoop();
      }, 1500);
    }

    function mainLoop() {
      // in here, it will increase our rounds counter
      counter++;
      // mandatory stop at 30 rounds
      if (counter >= 30) {
        // then when it reaches this point, end it via this function
        return endLoop();
      }

      // BUT while it is still running, we have a random generator dictating what the comp and the user is doing
      let userAction = actions[Math.floor(Math.random() * actions.length)];
      // This is basically saying, choose between 0,1,2 randomly WHICH CORRESPONDS with the melle, defend, and magic choices
      let compAction = actions[Math.floor(Math.random() * actions.length)];

      // Got some more console.logs to help us know what is going on
      console.log(`The User Did ${userAction}`);
      console.log(`The Computer Did ${compAction}`);
      console.log(`${fighter1.name} Has ${fighter1Hp} Left`);
      console.log(`${fighter2.name} Has ${fighter2Hp} Left`);

      console.log(counter);
      // THIS is where the math happens
      // if both the player and the comp get melee, then this happens
      if (userAction === "melee" && compAction === "melee") {
        let damage = Math.floor(Math.abs(userMelee - compMelee * 1.25));
        let crit = (2 * fighter1.level + 4 / 2 + userMelee + 2) * 1.05;
        console.log(damage);

        // You also have a chance of missing -- sadlyfe
        if (Math.floor(Math.random() * 25) === 5) {
          console.log("You Missed, I'm Not Mad, I'm Just Disapointed...");
          // BUTTTTTT you also have a chance of doing a crit
        } else if (Math.floor(Math.random() * 25) === 7) {
          fighter1Hp = fighter1Hp - crit;
          fighter2Hp = fighter2Hp - crit;
          console.log(`${crit} THis is the crit`);
          // otherwise normal things just happen
        } else {
          fighter1Hp = fighter1Hp - damage;
          fighter2Hp = fighter2Hp - damage;
        }
        // THEN after all of this, check the life of each avatar to see if the death variable has turned true
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
      // This bracket is the end of the main loop
    }
    mainLoop();

    // This function checks the hp of both avatars
    function checkHp(value1, value2) {
      this.value1 = value1;
      this.value2 = value2;

      // if their hp is 0 or lower, then just go to the end loop
      if (value1 <= 0 || value2 <= 0 || isNaN(value1) || isNaN(value2)) {
        return endLoop(fighter1Hp, fighter2Hp);
      }
      return mainLoopRestraint();
    }
    // ------------------------------------------------------------------------------------------------------------------------------
    // }
    // ------------------------------------------------------------------------------------------------------------------------------
    // THIS IS THE END OF THE ONCLICK FUNCTION, a bit confusing if we are supposed to start based off of the startbattle button
    // onclick fucntion just a bit further below
  };

  // This function ends the loop and whoever wins gets these bonuses
  function endLoop(fighter1Hp, fighter2Hp) {
    console.log("GAME OVER");
    if (fighter1Hp > fighter2Hp) {
      fighter1.level++;
      fighter1.hp = fighter1.hp * 1.05;
      document.getElementById("battleText").style.display = "none";
      document.getElementById("winning").style.display = "block";
      document.getElementById("losing").style.display = "none";
    } else {
      fighter2.level++;
      fighter2.hp = fighter2.hp * 1.05;
      document.getElementById("battleText").style.display = "none";
      document.getElementById("winning").style.display = "none";
      document.getElementById("losing").style.display = "block";
    }
    return (eitherDead = true);
  }
}
// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------SO everything before here is in our battle contructor ------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------

// So this is meant to start the whole battle, but what if we didn't click this?
// We would be not be creating new contructors to base off of -- just a hypothesis
// ------------------------------------------------------------------------------------
// But when we click the button
document.getElementById("startBattle").addEventListener("click", event => {
  // we prevent the button default,
  event.preventDefault();

  if (document.getElementById("uname") !== "") {
    usingLogin();
  }
  if (document.getElementById("signup_uname").value !== "") {
    usingCALogin();
  }
});

function usingLogin() {
  let battleLogin = document.getElementById("uname").value;
  let battleCALogin = document.getElementById("signup_uname").value;

  console.log(`\n\n\n${battleLogin}`);
  console.log(`\n\n\n${battleCALogin}`);
  // We then go to fetch the table where the logged in user is at
  fetch(`/api/users/battle/${battleLogin}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(responsejson) {
      console.log(
        "IF YOU SEE THIS, THEN That means that the USER fetch request for the player worked"
      );
      console.log(responsejson);
      let theUser = new User(responsejson);
      getOtherPlayer(theUser);
    });

  function getOtherPlayer(theUser) {
    // We then go fetch a random comp to fight
    fetch(`/api/random`)
      .then(function(response) {
        return response.json();
      })
      .then(function(responsejson) {
        console.log(
          "\n\n\n\nIF YOU SEE THIS, THEN That means that the COMP fetch request for the player worked"
        );
        console.log(responsejson);
        // Then we create new constructors for them
        let theComp = new User(responsejson);

        generateInstance(theUser, theComp);
      });
  }

  function generateInstance(theUser, theComp) {
    function waitABit() {
      setTimeout(() => {
        // console.log(theUser.weapon, ":           this is a test to see what comes out factor");
        let testBattle = new Battle(theUser, theComp);
        wait(testBattle);
      }, 1000);
    }

    // Then start that battle I think
    function wait(testBattle) {
      setTimeout(() => {
        testBattle.loopedBattle();
      }, 1000);
    }
    waitABit();
  }
}

function usingCALogin() {
  let battleLogin = document.getElementById("uname").value;
  let battleCALogin = document.getElementById("signup_uname").value;

  console.log(`\n\n\n${battleLogin}`);
  console.log(`\n\n\n${battleCALogin}`);
  // We then go to fetch the table where the logged in user is at
  fetch(`/api/users/battle/${battleCALogin}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(responsejson) {
      console.log(
        "IF YOU SEE THIS, THEN That means that the USER fetch request for the player worked"
      );
      console.log(responsejson);
      let theUser = new User(responsejson);
      getOtherPlayer(theUser);
    });

  function getOtherPlayer(theUser) {
    // We then go fetch a random comp to fight
    fetch(`/api/random`)
      .then(function(response) {
        return response.json();
      })
      .then(function(responsejson) {
        console.log(
          "\n\n\n\nIF YOU SEE THIS, THEN That means that the COMP fetch request for the player worked"
        );
        console.log(responsejson);
        // Then we create new constructors for them
        let theComp = new User(responsejson);

        generateInstance(theUser, theComp);
      });
  }

  function generateInstance(theUser, theComp) {
    function waitABit() {
      setTimeout(() => {
        // console.log(theUser.weapon, ":           this is a test to see what comes out factor");
        let testBattle = new Battle(theUser, theComp);
        wait(testBattle);
      }, 1000);
    }

    // Then start that battle I think
    function wait(testBattle) {
      setTimeout(() => {
        testBattle.loopedBattle();
      }, 1000);
    }
    waitABit();
  }
}

document
  .getElementById("cancelBattleBtn")
  .addEventListener("click", function() {
    document.getElementById("battlePage").style.display = "none";
    document.getElementById("accountPage").style.display = "block";
  });
