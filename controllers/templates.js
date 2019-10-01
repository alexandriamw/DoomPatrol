let user = require("./test");

function battle(fighter1, fighter2) {
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
      let compAction = actions[Math.floor(Math.random() * actions.length)];
      let userAction = actions[Math.floor(Math.random() * actions.length)];
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
    mainLoop();
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

let test1 = new user();
let test2 = new user();

let testBattle = new battle(test1, test2);

console.log(testBattle);

module.exports = battle;
