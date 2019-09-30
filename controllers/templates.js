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
      this.weapon[0] +
      this.head[0] +
      this.chest[0] +
      this.boots[0] +
      this.gloves[0] +
      this.level;
    let defence =
      this.weapon[1] +
      this.head[1] +
      this.chest[1] +
      this.boots[1] +
      this.gloves[1] +
      this.level;
    let magic =
      this.weapon[2] +
      this.head[2] +
      this.chest[2] +
      this.boots[2] +
      this.gloves[2] +
      this.level;

    return [melee, defence, magic];
  };
}

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

    let boob = 0;
    function mainLoop() {
      boob++;
      let compAction = actions[Math.floor(Math.random() * actions.length)];
      let userAction = actions[Math.floor(Math.random() * actions.length)];
      console.log(`The User Did ${userAction}`);
      console.log(`The Computer Did ${compAction}`);
      console.log(boob);
      console.log(
        "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      );
      if (userAction === "melee" && compAction === "melee") {
        let damage = Math.abs(userMelee - compMelee);
        fighter1.hp = fighter1.hp - damage;
        fighter2.hp = fighter2.hp - damage;
        checkHp(fighter1.hp, fighter2.hp);
      } else if (userAction === "defend" && compAction === "melee") {
        let damage = Math.abs(userDefend - compMelee);

        fighter2.hp = fighter1.hp - damage;
        checkHp(fighter1.hp, fighter2.hp);
      } else if (userAction === "magic" && compAction === "melee") {
        let damage = Math.abs(userMagic - compMelee);

        fighter1.hp = fighter1.hp - damage;
        checkHp(fighter1.hp, fighter2.hp);
      } else if (userAction === "melee" && compAction === "defend") {
        let damage = Math.abs(userMelee - compDefend);

        fighter1.hp = fighter1.hp - damage;
        checkHp(fighter1.hp, fighter2.hp);
      } else if (userAction === "defend" && compAction === "defend") {
        let damage = Math.abs(userDefend - compDefend);

        fighter1.hp = fighter1.hp - damage;
        fighter2.hp = fighter2.hp - damage;
        checkHp(fighter1.hp, fighter2.hp);
      } else if (userAction === "magic" && compAction === "defend") {
        let damage = Math.abs(userMagic - compDefend);

        fighter2.hp = fighter2.hp - damage;
        checkHp(fighter1.hp, fighter2.hp);
      } else if (userAction === "melee" && compAction === "magic") {
        let damage = Math.abs(userMelee - compMagic);

        fighter2.hp = fighter2.hp - damage;
        checkHp(fighter1.hp, fighter2.hp);
      } else if (userAction === "defend" && compAction === "magic") {
        let damage = Math.abs(userDefend - compMagic);

        fighter1.hp = fighter1.hp - damage;
        checkHp(fighter1.hp, fighter2.hp);
      } else if (userAction === "magic" && compAction === "magic") {
        let damage = Math.abs(userMagic - compMagic);

        fighter1.hp = fighter1.hp - damage;
        fighter2.hp = fighter2.hp - damage;
        checkHp(fighter1.hp, fighter2.hp);
      }
    }
    mainLoop();
    function checkHp(value1, value2) {
      this.value1 = value1;
      this.value2 = value2;
      if (value1 && value2 > 0) {
        return mainLoop();
      }
      endLoop();
    }
  }
  function endLoop() {
    console.log("GAME OVER");
    return (eitherDead = true);
  }
}

let doomShirt = [2, 8, 6];
let doomBoots = [8, 2, 7];
let doomHammer = [10, 2, 2];
let doomHat = [1, 9, 7];
let doomGloves = [5, 5, 5];

let cletus = new user(
  "cletus",
  1,
  100,
  doomHammer,
  doomHat,
  doomShirt,
  doomBoots,
  doomGloves
);
let jimBob = new user(
  "jimBob",
  1,
  100,
  doomHammer,
  doomHat,
  doomShirt,
  doomBoots,
  doomGloves
);

let testBattle = new battle(cletus, jimBob);

console.log(testBattle);

module.exports = user;
module.exports = battle;
