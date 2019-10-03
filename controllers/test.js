function user(
  name,
  level,
  hp,
  weapon,
  head,
  chest,
  boots,
  gloves,
  gold,
  emeralds
) {
  this.name = name;
  this.level = level;
  this.hp = hp;
  this.weapon = weapon;
  this.head = head;
  this.chest = chest;
  this.boots = boots;
  this.gloves = gloves;
  this.gold = gold;
  this.emeralds = emeralds;
  this.totals = () => {
    let melee = 1 + 1 + 1 + 1 + 1 + 1;
    // this.weapon.attack +
    // this.head.attack +
    // this.chest.attack +
    // this.boots.attack +
    // this.gloves.attack +
    // this.level;
    let defence = 1 + 1 + 1 + 1 + 1 + 1;
    // this.weapon.defence +
    // this.head.defence +
    // this.chest.defence +
    // this.boots.defence +
    // this.gloves.defence +
    // this.level;
    let magic = 1 + 1 + 1 + 1 + 1 + 1;
    // this.weapon.magic +
    // this.head.magic +
    // this.chest.magic +
    // this.boots.magic +
    // this.gloves.magic +
    // this.level;

    return [melee, defence, magic];
  };
}

module.exports = user;
