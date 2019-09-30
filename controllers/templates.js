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

  let fighter1Dead = false;
  let fighter2Dead = false;

  // let userAction; // this needs to be tied to a button selection on the UI

  let actions = ["melee", "defend", "magic"];

  while (fighter1Dead && fighter2Dead === false) {
    console.log(
      `${fighter1.name} LVL ${fighter1.level} VS. ${fighter2.name} LVL ${fighter2.level}`
    );
    console.log(`${fighter1.name} Has ${fighter1.hp} Remaining`);
    console.log(`${fighter2.name} Has ${fighter2.hp} Remaining`);

    let compAction = actions[Math.floor(Math.random() * actions.length)];
    let userAction = actions[Math.floor(Math.random() * actions.length)];
  }
}

module.exports = user;
module.exports = battle;

function userDamage() {}

function compDamage() {}
