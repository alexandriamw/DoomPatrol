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
      this.weapon.melee +
      this.head.melee +
      this.chest.melee +
      this.boots.melee +
      this.gloves.melee +
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
      console.log(
        `${fighter1.name} LVL ${fighter1.level} VS. ${fighter2.name} LVL ${fighter2.level}`
      );
      console.log(`${fighter1.name} Has ${fighter1.hp} Remaining`);
      console.log(`${fighter2.name} Has ${fighter2.hp} Remaining`);

      let fighter1Hp = fighter1.hp;
      let fighter2Hp = fighter2.hp;

      let counter = 0;
      mainLoop();
      function mainLoop() {
        counter++;
        if (counter >= 30) {
          return endLoop();
        }

        let userAction = actions[Math.floor(Math.random() * actions.length)];
        let compAction = actions[Math.floor(Math.random() * actions.length)];

        console.log(`The User Did ${userAction}`);
        console.log(`The Computer Did ${compAction}`);
        console.log(`${fighter1.name} Has ${fighter1Hp} Left`);
        console.log(`${fighter2.name} Has ${fighter2Hp} Left`);

        console.log(counter);

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
      function checkHp(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
        if (value1 <= 0 || value2 <= 0) {
          return endLoop(fighter1Hp, fighter2Hp);
        }
        return;
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

// document
//   .getElementById("cancelBattleBtn")
//   .addEventListener("click", function() {
//     document.getElementById("battlePage").style.display = "none";
//     document.getElementById("accountPage").style.display = "block";
//   });

let Users = [
  {
    accountName: "JohnsAccount",
    hashedPW: null,
    loses: 2,
    weaponID: 1,
    headID: 1,
    chestID: 1,
    pantsID: 1,
    feetID: 1,
    email: "wwwwwwww@yahooo.com",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    accountName: "Another Account",
    hashedPW: null,
    loses: 70,
    weaponID: 1,
    headID: 1,
    chestID: 1,
    pantsID: 1,
    feetID: 1,
    email: "wwwwwwww@yahooo.com",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    accountName: "Account Three",
    hashedPW: null,
    wins: 1,
    loses: 3000,
    headID: 1,
    chestID: 1,
    pantsID: 1,
    feetID: 1,
    email: "wwwwwwww@yahooo.com",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let headTables = [
  {
    name: "Beer Hat",
    melee: 0,
    defence: 2,
    magic: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Baseball Hat",
    melee: 6,
    defence: 1,
    magic: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Visor",
    melee: 10,
    defence: 1,
    magic: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Man Bun",
    melee: 0,
    defence: 1,
    magic: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Fedora",
    melee: -9,
    defence: 10,
    magic: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Viking Helm",
    melee: 7,
    defence: 7,
    magic: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Bald",
    melee: 10,
    defence: 10,
    magic: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Chef Hat",
    melee: 2,
    defence: 9,
    magic: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Helm Of Doom",
    melee: 10,
    defence: 10,
    magic: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Bear Skin Hat",
    melee: 4,
    defence: 6,
    magic: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Straw Hat",
    melee: 2,
    defence: 2,
    magic: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Doofus Hat",
    melee: 0,
    defence: 0,
    magic: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Party Hat",
    melee: 0,
    defence: 2,
    magic: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Hard Hat",
    melee: 0,
    defence: 10,
    magic: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Ski Mask",
    melee: 10,
    defence: 10,
    magic: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Wizard Hat",
    melee: 7,
    defence: 0,
    magic: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Shoe",
    melee: 5,
    defence: 5,
    magic: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "ZipLock Bag",
    melee: 0,
    defence: 10,
    magic: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Male Pattern Baldness",
    melee: 10,
    defence: -3,
    magic: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Hoodie",
    melee: 6,
    defence: 7,
    magic: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Cowboy Hat",
    melee: 3,
    defence: 6,
    magic: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Welding Mask",
    melee: -2,
    defence: 10,
    magic: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Beer Goggles",
    melee: 2,
    defence: 2,
    magic: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Black Hat",
    melee: 6,
    defence: 7,
    magic: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Blue Hat",
    melee: 0,
    defence: 2,
    magic: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Green Hat",
    melee: 0,
    defence: 2,
    magic: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Red Hat",
    melee: 15,
    defence: 4,
    magic: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Oil Stained Hat",
    melee: 7,
    defence: 7,
    magic: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Worlds Best Dad Hat",
    melee: 5,
    defence: 8,
    magic: 11,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "I Love NY",
    melee: 0,
    defence: 0,
    magic: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "MAGA Hat",
    melee: 5,
    defence: 5,
    magic: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Sweat Band",
    melee: 8,
    defence: 8,
    magic: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let gloveTables = [
  {
    name: "Beer Bottle",
    melee: 1,
    defence: 4,
    magic: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Motorcycle Gloves",
    melee: 3,
    defence: 2,
    magic: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Plastic Gloves",
    melee: 0,
    defence: 5,
    magic: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Work Leather Gloves",
    melee: 3,
    defence: 8,
    magic: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Cooking Gloves",
    melee: 10,
    defence: 0,
    magic: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Red Gloves",
    melee: 1,
    defence: 4,
    magic: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Blue Gloves",
    melee: 0,
    defence: 1,
    magic: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Green Gloves",
    melee: 4,
    defence: 1,
    magic: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let weaponTables = [
  {
    Name: "Spatula",
    melee: 5,
    defence: 2,
    magic: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Tongs",
    melee: 2,
    defence: 8,
    magic: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Beer Can",
    melee: 8,
    defence: 8,
    magic: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Lawn Mower",
    melee: 5,
    defence: 4,
    magic: 11,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Not Mad, Just Disappointed",
    melee: 10,
    defence: 10,
    magic: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Dad Humor",
    melee: -2,
    defence: 0,
    magic: 15,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "The Thermostat",
    melee: 9,
    defence: 2,
    magic: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Braided Belt",
    melee: 9,
    defence: 2,
    magic: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Clip On Phone",
    melee: 2,
    defence: 11,
    magic: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Car He Loves More Than You",
    melee: 10,
    defence: 9,
    magic: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Pool Cue",
    melee: 7,
    defence: 7,
    magic: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Favorite Mug",
    melee: 9,
    defence: 2,
    magic: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "The Worst Gatorade Flavor",
    melee: 8,
    defence: 4,
    magic: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Fishing Pole",
    melee: 2,
    defence: 8,
    magic: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Webber Grill",
    melee: 6,
    defence: 10,
    magic: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Cast Iron",
    melee: 10,
    defence: 1,
    magic: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "FootBall",
    melee: 4,
    defence: 4,
    magic: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Baseball",
    melee: 6,
    defence: 6,
    magic: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Hockey Stick",
    melee: 8,
    defence: 8,
    magic: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Monkey Wrench",
    melee: 10,
    defence: 0,
    magic: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Crow Bar",
    melee: 5,
    defence: 3,
    magic: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Fiscal Conservatism",
    melee: 4,
    defence: 10,
    magic: 15,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Old Man Watch",
    melee: 3,
    defence: 3,
    magic: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "SI From 2004",
    melee: 11,
    defence: 2,
    magic: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Cribbage Board",
    melee: 5,
    defence: 7,
    magic: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "The Remote",
    melee: 5,
    defence: 2,
    magic: 11,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Too Many Keys",
    melee: 3,
    defence: 8,
    magic: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Recliner",
    melee: 0,
    defence: 6,
    magic: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Antiquated Advice",
    melee: 3,
    defence: 4,
    magic: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Oil Change Punch Card",
    melee: 6,
    defence: 7,
    magic: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "BlockBuster Card",
    melee: 2,
    defence: 1,
    magic: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Busch Latte",
    melee: 12,
    defence: 12,
    magic: 12,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Golden Retriever",
    melee: 5,
    defence: 2,
    magic: 20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Oversized Text",
    melee: 2,
    defence: 7,
    magic: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Fishing Lure",
    melee: 8,
    defence: 9,
    magic: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let chestsTables = [
  {
    Name: "Too Small T-Shirt",
    melee: 7,
    defence: -2,
    magic: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Sweater",
    melee: 1,
    defence: 6,
    magic: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Beer Gut",
    melee: -2,
    defence: 9,
    magic: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "I'm With Stupid Shirt",
    melee: 5,
    defence: 5,
    magic: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Golf Shirt",
    melee: 2,
    defence: 4,
    magic: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Grill Apron",
    melee: 1,
    defence: 10,
    magic: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Hoodie",
    melee: 4,
    defence: 8,
    magic: -2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Grill Plate Armor",
    melee: 7,
    defence: 12,
    magic: -4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Polo",
    melee: 5,
    defence: 2,
    magic: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Tuexdeo",
    melee: 0,
    defence: 2,
    magic: 12,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Mustard Stained Shirt",
    melee: 4,
    defence: 2,
    magic: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Coffee Stained Shirt",
    melee: 7,
    defence: 4,
    magic: -2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Borat Bikini",
    melee: 10,
    defence: -7,
    magic: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "Red shirt",
    melee: 2,
    defence: 5,
    magic: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    Name: "FootBall Jersey",
    melee: 6,
    defence: 1,
    magic: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let bootTables = [
  {
    name: "Socks and Sandals",
    melee: 2,
    defence: 2,
    magic: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Crocks",
    melee: 2,
    defence: 2,
    magic: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "New Balance",
    melee: 2,
    defence: 2,
    magic: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Slippers",
    melee: 2,
    defence: 2,
    magic: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Bare",
    melee: 2,
    defence: 2,
    magic: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Steel Toe",
    melee: 2,
    defence: 2,
    magic: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

document.getElementById("startBattle").addEventListener("click", event => {
  event.preventDefault();

  console.log("clicked!");

  // let accountInfo = fetch(`./api/users/1`).then(response => {
  //   return response.json;
  // });
  // let random = fetch(`./api/random`).then(response => {
  //   return response.json;
  // });

  let userInfo = Users[Math.floor(Math.random() * Users.length)];
  let weapon = weaponTables[Math.floor(Math.random() * weaponTables.length)];
  let head = headTables[Math.floor(Math.random() * headTables.length)];
  let chest = chestsTables[Math.floor(Math.random() * chestsTables.length)];
  let boots = bootTables[Math.floor(Math.random() * bootTables.length)];
  let gloves = gloveTables[Math.floor(Math.random() * gloveTables.length)];

  let randomName = Users[Math.floor(Math.random() * Users.length)];
  let randomW = weaponTables[Math.floor(Math.random() * weaponTables.length)];
  let randomH = headTables[Math.floor(Math.random() * headTables.length)];
  let randomC = chestsTables[Math.floor(Math.random() * chestsTables.length)];
  let randomB = bootTables[Math.floor(Math.random() * bootTables.length)];
  let randomG = gloveTables[Math.floor(Math.random() * gloveTables.length)];

  let theUser = new user(
    userInfo.name,
    userInfo.level,
    userInfo.hp,
    weapon,
    head,
    chest,
    boots,
    gloves
  );
  let theComp = new user(
    randomName.name,
    randomName.level,
    randomName.hp,
    randomW,
    randomH,
    randomC,
    randomB,
    randomG
  );

  console.log(theUser);
  console.log(theComp);
  // let testBattle = new battle(theUser, theComp);

  // testBattle();
});
