function user(name, level, hp, weapon, head, chest, boots, gloves) {
  this.name = name;
  this.level = level;
  this.hp = hp;
  this.weapon = weapon;
  this.head = head;
  this.chest = chest;
  this.boots = boots;
  this.gloves = gloves;
  this.totals = function totalAttack() {
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

// function battle(fighter1, fighter2) {
//   this.fighter1 = fighter1;
//   this.fighter2 = fighter2;

//   switch (fighter1(melee)) {
//     case fighter2(defence):
//       health = fighter1[2]
//       totalDamage = fighter1.totals()[0] - fighter2.totals()[1];
//       if (health < 0) {
//         newHealth = health - totalDamage;

//         return fighter1[2] = newHealth;
//       }
//       console.log("You dead Homie");
//       break;
//   //   case fighter2(magic):
//   //     compDamage(fighter1, fighter2);
//   //     break;
//   //   case fighter2(melee):
//   //     bothDamage(fighter1, fighter2);
//   //     break;
//   // }
//   // switch (fighter1(defence)) {
//   //   case fighter2(magic):
//   //     userDamage(fighter1, fighter2);
//   //     break;
//   //   case fighter2(melee):
//   //     compDamage(fighter1, fighter2);
//   //     break;
//   //   case fighter2(defence):
//   //     bothDamage(fighter1, fighter2);
//   //     break;
//   // }
//   // switch (fighter1(magic)) {
//   //   case fighter2(melee):
//   //     userDamage(fighter1, fighter2);
//   //     break;
//   //   case fighter2(defence):
//   //     compDamage(fighter1, fighter2);
//   //     break;
//   //   case fighter2(magic):
//   //     bothDamage(fighter1, fighter2);
//   //     break;
//   }
// }

// function userDamage(fighter1, fighter2) {
//   health = fighter1[2]
//   totalDamage = fighter1.totals()[0] - fighter2.totals()[1];
//   if (health < 0) {
//     newHealth = health - totalDamage;

//     return fighter1[2] = newHealth;
//   }
//   console.log("You dead Homie");
// }

// melee, defense, magic
let doomSword = [10, 5, 2];
let doomHelm = [2, 10, 3];
let doomChest = [3, 5, 9];
let doomBoots = [8, 8, 2];
let doomgloves = [1, 1, 10];

// let newBattle = new battle(doomSword, doomHelm)
let newUser = new user(
  "thor",
  1,
  100,
  doomSword,
  doomHelm,
  doomChest,
  doomBoots,
  doomgloves
);
let comp = new user(
  "odin",
  1,
  100,
  doomSword,
  doomHelm,
  doomChest,
  doomBoots,
  doomgloves
);

// let newBattle = new battle(newUser, comp);
// let comp = new user("bro", 1, 100, stockWeapon, stockArmour);
// console.log(newBattle(melee));
console.log(newUser);
console.log(comp);
