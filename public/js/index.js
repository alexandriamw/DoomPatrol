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
// found in public/js/userLogin.js
// ----------------------------------------------------------------------------------------------------------------

// Input validation for creation input value
// ----------------------------------------------------------------------------------------------------------------
// found in public/js/userInputValidation.js
// ----------------------------------------------------------------------------------------------------------------

//create account for new users, form data is saved
// ----------------------------------------------------------------------------------------------------------------
// found in public/js/userCreate.js
// ----------------------------------------------------------------------------------------------------------------

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

// document.getElementById("buyWeapons").addEventListener("click", function() {
//   document.getElementById("buyWeaponPop").style.display = "block";
// });

// document.getElementById("buyArmor").addEventListener("click", function() {
//   document.getElementById("buyArmorPop").style.display = "block";
// });

//add inventory here ----------
document.getElementById("settings").addEventListener("click", function() {
  document.getElementById("settingsPop").style.display = "block";
});

// this is where we are updating passwords and usernames
// ----------------------------------------------------------------------------------------------------------------
// found in public/js/userUpdate.js
// ----------------------------------------------------------------------------------------------------------------

document.getElementById("inventory").addEventListener("click", function() {
  document.getElementById("myInventoryPop").style.display = "block";
});

// document
//   .getElementById("cancelWeaponBtn")
//   .addEventListener("click", function() {
//     document.getElementById("buyWeaponPop").style.display = "none";
//   });

// document.getElementById("cancelArmorBtn").addEventListener("click", function() {
//   document.getElementById("buyArmorPop").style.display = "none";
// });

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

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

function user(userinfo) {
  this.name = userinfo.name;
  this.level = userinfo.level;
  this.hp = userinfo.hp;
  this.weapon = fetch(`/api/helmet/${userinfo.weaponID}`).then(function(
    response
  ) {
    response.json();
  });

  this.head = fetch(`/api/head/${userinfo.headID}`).then(function(response) {
    response.json();
  });

  this.chest = fetch(`/api/chest/${userinfo.chestID}`).then(function(response) {
    response.json();
  });

  this.boots = fetch(`/api/boots/${userinfo.bootsID}`).then(function(response) {
    response.json();
  });

  this.gloves = fetch(`/api/gloves/${userinfo.glovesID}`).then(function(
    response
  ) {
    response.json();
  });

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

function battle(fighter1, fighter2, userAction) {
  async function f() {
    let promise = new Promise((resolve, reject) => {
      document.querySelectorAll(".actionButtons").forEach(el => {
        resolve(el.value);
      });
    });

    let result = await promise; // wait till the promise resolves (*)

    return result;
  }
  this.fighter1 = fighter1;
  this.fighter2 = fighter2;

  let eitherDead = false;

  // let userAction; // this needs to be tied to a button selection on the UI

  let userMelee = fighter1.totals()[0];
  let userDefend = fighter1.totals()[1];
  let userMagic = fighter1.totals()[2];

  let compMelee = fighter2.totals()[0];
  let compDefend = fighter2.totals()[1];
  let compMagic = fighter2.totals()[2];

  let actions = ["melee", "defend", "magic"];
  while (eitherDead === false) {
    f();
    console.log(
      `${fighter1.name} LVL ${fighter1.level} VS. ${fighter2.name} LVL ${fighter2.level}`
    );
    console.log(`${fighter1.name} Has ${fighter1.hp} Remaining`);
    console.log(`${fighter2.name} Has ${fighter2.hp} Remaining`);

    let fighter1Hp = fighter1.hp;
    let fighter2Hp = fighter2.hp;

    let counter = 0;

    userAction.forEach(el => {
      el.addEventListener("click", event => {
        event.preventDefault();

        console.log(el.value);
        mainLoop();
      });
    });
    function mainLoop() {
      counter++;

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
        let crit = (2 * fighter1.level + 4 / 2 + userMelee + 2) * 1.12;

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
        let crit = (2 * fighter1.level + 4 / 2 + userDefend + 2) * 1.12;

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
        let crit = (2 * fighter1.level + 4 / 2 + compMelee + 2) * 1.12;

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
        let crit = (2 * fighter1.level + 4 / 2 + compDefend + 2) * 1.12;

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
        let crit = (2 * fighter1.level + 4 / 2 + userDefend + 2) * 1.12;

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
        let crit = (2 * fighter1.level + 4 / 2 + userMagic + 2) * 1.12;

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
        let crit = (2 * fighter1.level + 4 / 2 + userMelee + 2) * 1.12;

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
        let crit = (2 * fighter1.level + 4 / 2 + compMagic + 2) * 1.12;

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
        let crit = (2 * fighter1.level + 4 / 2 + userMagic + 2) * 1.12;

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

    function checkHp(value1, value2) {
      this.value1 = value1;
      this.value2 = value2;
      if (value1 < 0 || value2 < 0) {
        return endLoop(fighter1Hp, fighter2Hp);
      }
      return mainLoop();
    }
  }

  function endLoop(fighter1Hp, fighter2Hp) {
    console.log("GAME OVER");
    if (fighter1Hp > fighter2Hp) {
      fighter1.level++;
      fighter1.hp = fighter1.hp * 1.05;
      fighter1.gold = fighter1.gold + 25;
    } else {
      fighter2.level++;
      fighter2.hp = fighter2.hp * 1.05;
      fighter2.gold = fighter2.gold + 25;
    }
    return (eitherDead = true);
  }
}

let doomHelm = {
  melee: 5,
  defend: 5,
  magic: 5
};
let doomGloves = {
  melee: 5,
  defend: 5,
  magic: 5
};
let doomChest = {
  melee: 5,
  defend: 5,
  magic: 5
};
let doomWeapon = {
  melee: 5,
  defend: 5,
  magic: 5
};
let doomBoots = {
  melee: 5,
  defend: 5,
  magic: 5
};

// document.getElementById("startBattle").addEventListener("click", event => {
//   event.preventDefault();

//   let testUser1 = new user(
//     "Cletus",
//     1,
//     100,
//     doomWeapon,
//     doomHelm,
//     doomChest,
//     doomBoots,
//     doomGloves
//   );
//   let testUser2 = new user(
//     "JimBob",
//     1,
//     100,
//     doomWeapon,
//     doomHelm,
//     doomChest,
//     doomBoots,
//     doomGloves
//   );
//   let testBattle = new battle(testUser1, testUser2, event);

//   testBattle();
// });
