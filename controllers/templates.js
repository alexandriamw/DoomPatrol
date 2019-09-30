function user(name, level, hp, weapon, armour) {
  this.name = name;
  this.level = level;
  this.hp = hp;
  this.weapon = weapon;
  this.armour = armour;
  this.totals = function totalAttack() {
    let damage = this.weapon[0] + this.armour[0] + this.level;
    let defence = this.weapon[1] + this.armour[1] + this.level;
    let brawl = this.weapon[2] + this.armour[2] + this.level;

    return [damage, defence, brawl];
  };
}
// attack, defense, brawl
let doomSword = [89, 5, 2];
let doomHelm = [2, 10, 3];

// let newBattle = new battle(doomSword, doomHelm)
let newUser = new user("thor", 1, 100, doomSword, doomHelm);
console.log(newUser.totals());
