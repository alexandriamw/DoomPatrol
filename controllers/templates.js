function user(name, level, hp, battle) {
  this.name = name;
  this.level = level;
  this.hp = hp;
  this.battle = function battle(weapon, armour) {
    this.weapon = weapon;
    this.armour = armour;
    let battleDefence = weapon[1] + armour[1];
    let battleAttack = weapon[0] + armour[0];
    let battleCounter = weapon[2] + armour[2];
  };
}
let doomSword = [10, 5, 2];
let doomHelm = [2, 10, 3];

// let newBattle = new battle(doomSword, doomHelm)
let newUser = new user("thor", 1, 100, doomSword, doomHelm);

console.log(newUser);
