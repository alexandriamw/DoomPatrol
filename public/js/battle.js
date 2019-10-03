// First off, new User Constructor
function User(userinfo) {
  this.name = userinfo.accountName;
  this.level = userinfo.level;
  this.hp = userinfo.hp;
  // We want to get values from these tables, so we got to make sure that these tables exist and then fix the requests
  this.weapon = fetch(`/api/weapon/`)
    .then(function(response) {
      return response.json();
    })
    .then(function(responsejson) {
      console.log("TESTING OUT THE WEAPON ID");
      console.log(responsejson);
      // console.log(responsejson.Melee, ":           this is the melee factor");
      return responsejson;
    });

  this.totals = () => {
    let melee = this.weapon.Melee;
    // console.log(this.weapon.Melee, ":       HOPEFULLY THIS THING WORKS");

    // whenever the totals function is called from a new User, it will always give an array
    return [melee];
  };
}

// Then create a new contructor called battle that takes in two arguements that represents the fighters
// This constructor is the one that handles the whole battle when called to be activated through a endless loop until someone dies
function Battle(fighter1, fighter2) {
  this.fighter1 = fighter1;
  this.fighter2 = fighter2;

  // This variable is the one that lets us know when someone dies, when it switches to true
  let eitherDead = false;

  // Again these array values pertain to the totals function from earlier [0] = melee [1] = defend [2] = magic
  let userMelee = fighter1.totals()[0];
  let userDefend = fighter1.totals()[1];
  let userMagic = fighter1.totals()[2];

  let compMelee = fighter2.totals()[0];
  let compDefend = fighter2.totals()[1];
  let compMagic = fighter2.totals()[2];

  // We then created a new array that are strings that correlate to the totals function array
  // notice how they are in the same index numbers as well so that we can reference them correctly
  let actions = ["melee", "defend", "magic"];

  // THEN when all of this prep work is finished, we apparently just want to click anywhere and trigger the fighting loop
  // We still have the buttons on the FE, so I'm not sure how we can change this yet
  this.loopedBattle = function() {
    // after the click, we are checking to see if our death variable is still false, and while it is, it's gonna do these things
    // while (eitherDead === false) {
    // console.logging for our own sakes to see what's going on
    console.log(
      `${fighter1.name} LVL ${fighter1.level} VS. ${fighter2.name} LVL ${fighter2.level}`
    );
    console.log(`${fighter1.name} Has ${fighter1.hp} Remaining`);
    console.log(`${fighter2.name} Has ${fighter2.hp} Remaining`);

    // create new variables to use independently and to save some chars
    let fighter1Hp = fighter1.hp;
    let fighter2Hp = fighter2.hp;

    // Create a limit to how many *rounds* goes by before its a mandatory stop
    let counter = 0;
    // Then trigger this main loop function
    function mainLoopRestraint() {
      setTimeout(() => {
        mainLoop();
      }, 4000);
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

    // This function checks the hp of both avatars
    function checkHp(value1, value2) {
      this.value1 = value1;
      this.value2 = value2;
      // if their hp is 0 or lower, then just go to the end loop
      if (value1 <= 0 || value2 <= 0) {
        return endLoop(fighter1Hp, fighter2Hp);
      }
      return mainLoopRestraint();
    }
    // }
    // THIS IS THE END OF THE ONCLICK FUNCTION, a bit confusing if we are supposed to start based off of the startbattle button
    // onclick fucntion just a bit further below
  };

  // This function ends the loop and whoever wins gets these bonuses
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
// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------SO everything before here is in our battle contructor ------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------

// So this is meant to start the whole battle, but what if we didn't click this?
// We would be not be creating new contructors to base off of -- just a hypothesis
// ------------------------------------------------------------------------------------
// But when we click the button
document.getElementById("startBattle").addEventListener("click", event => {
  // we prevent the button default
  event.preventDefault();

  // We then go to fetch the table where the logged in user is at
  let accountInfo = fetch(`/api/users/battle/daniel`)
    .then(function(response) {
      return response.json();
    })
    .then(function(responsejson) {
      console.log(
        "IF YOU SEE THIS, THEN That means that the fetch request for the player worked"
      );
      console.log(responsejson);
      newUser(responsejson);
    });
  // We then go fetch a random comp to fight
  let random = fetch(`./api/random`).then(response => {
    return response.json;
  });

  function newUser(accountInfo) {
    let theUser = new User(accountInfo);
    console.log("\n\n\n This is the new function I created for the promise");
    console.log(theUser.weapon, "\n");
    console.log(accountInfo);
  }
  // Then we create new constructors for them
  let theUser = new User(accountInfo);
  let theComp = new User(random);

  // then another new contructor with their arguements
  let testBattle = new Battle(theUser, theComp);

  console.log("\n YOu can find this at the bottom of the battle.js");
  console.log(theUser.weapon, "\n");
  console.log(accountInfo);

  // Then start that battle I think
  testBattle.loopedBattle();
});

document
  .getElementById("cancelBattleBtn")
  .addEventListener("click", function() {
    document.getElementById("battlePage").style.display = "none";
    document.getElementById("accountPage").style.display = "block";
  });
