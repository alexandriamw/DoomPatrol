var db = require("../models");
let Sequelize = require("sequelize");

module.exports = function(app) {
  //--------------------Battle Section-------------//
  app.get("/api/random", function(req, res) {
    db.users
      .findAll({
        order: [Sequelize.litteral("RAND")]
      })
      .then(function(user2) {
        res.json(user2);
      });
  });

  // bcrypting things
  // ================================================================================================================
  // ================================================================================================================
  const bcrypt = require("bcryptjs");
  const saltRounds = 10;
  // get myPlaintextPassword from user
  const myPlaintextPassword = "s0//P4$$w0rD";
  const someOtherPlaintextPassword = "not_bacon";

  bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
  });

  //Place holder for gettin hash
  let hash = "Test";
  // Load hash from your password DB.
  bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
    // res == true
  });

  bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
    // res == false
  });

  // ================================================================================================================
  // ================================================================================================================

  // Get/ Read Functions
  // =================================================
  // =================================================
  // Get all User Information
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  //-----------------------------------Battle System -----------------------------------------

  //------------------------------------User Section ------------------------------------------
  //for testing password
  app.get("/api/password/:id/:hashedPW", function(req, res) {
    db.users
      .findOne({
        where: { id: req.params.id }
      })
      .then(function(dbUserInfo) {
        if (
          dbUserInfo === undefined ||
          dbUserInfo.name === undefined ||
          dbUserInfo.hashedPW !== req.params.hashedPW
        ) {
          return false;
        } else {
          return true;
        }
      });
  });

  //getting information for one user
  app.get("/api/users/:accountName", function(req, res) {
    db.users
      .findOne({ where: { id: req.params.accountName } })
      .then(function(dbUserInfo) {
        res.json(dbUserInfo);
      });
  });

  //-----------------------------------------------Equipment Section-----------------------------------

  //------Helmet Section --------//

  //getting the entire table of helmets
  app.get("/api/helmet", function(req, res) {
    db.helmetTables.findAll({}).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  //Api for finding one type of helmet
  app.get("/api/helmet/:id", function(req, res) {
    db.helmetTables
      .findOne({ where: { id: req.params.id } })
      .then(function(dbItem) {
        res.json(dbItem);
      });
  });

  //------Chest Area---//

  //For entire table of chests
  app.get("/api/chests", function(req, res) {
    db.chestTables.findAll({}).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  //For finding one type of Chest
  app.get("/api/chests/:id", function(req, res) {
    db.chestTables
      .findOne({ where: { id: req.params.id } })
      .then(function(dbItem) {
        res.json(dbItem);
      });
  });
  //-------Glove Section----//

  //For entire table of gloves
  app.get("/api/gloves", function(req, res) {
    db.gloveTables.findAll({}).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  app.get("/api/gloves/:id", function(req, res) {
    db.gloveTables
      .findOne({ where: { id: req.params.id } })
      .then(function(dbItem) {
        res.json(dbItem);
      });
  });

  //----------------------Weapon Section--------------------------//
  app.get("/api/weapons", function(req, res) {
    db.weaponsTables.findAll({}).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  app.get("/api/weapons/:id", function(req, res) {
    db.weaponsTables
      .findOne({ where: { id: req.params.id } })
      .then(function(dbItem) {
        res.json(dbItem);
      });
  });

  //--------------------------Boot Section------------------------//
  app.get("/api/boots", function(req, res) {
    db.bootsTables.findAll({}).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  app.get("/api/weapons/:id", function(req, res) {
    db.bootsTables
      .findOne({ where: { id: req.params.id } })
      .then(function(dbItem) {
        res.json(dbItem);
      });
  });

  app.get("/api/randomItem", function(req, res) {
    let choices = Math.random() * 5 + 1;
    if (choices === 1) {
      db.headtables
        .findAll({
          order: [Sequelize.litteral("RAND")]
        })
        .then(function(user2) {
          res.json(user2);
        });
    }
    if (choices === 2) {
      db.weapontables
        .findAll({
          order: [Sequelize.litteral("RAND")]
        })
        .then(function(user2) {
          res.json(user2);
        });
    }
    if (choices === 3) {
      db.glovetables
        .findAll({
          order: [Sequelize.litteral("RAND")]
        })
        .then(function(user2) {
          res.json(user2);
        });
    }
    if (choices === 4) {
      db.cheststables
        .findAll({
          order: [Sequelize.litteral("RAND")]
        })
        .then(function(user2) {
          res.json(user2);
        });
    }
    if (choices === 5) {
      db.boottables
        .findAll({
          order: [Sequelize.litteral("RAND")]
        })
        .then(function(user2) {
          res.json(user2);
        });
    }
  });

  //---------------------------------Creation Section (In Progress)---------------------------------------------
  // Create a new user
  app.post("/api/register", function(req, res) {
    console.log("$$$$$", req.body);

    bcrypt.hash(req.body.hashedPW, saltRounds, function(err, hash) {
      // Store hash in your password DB.
      console.log("\n\n\nLet see if this console.log even comes through\n\n");
      console.log(hash + "\n\n");
      createFunc(hash);
    });
    console.log(`\n\nHash outside of the bcrypt function${hash}\n\n`);

    function createFunc(hash) {
      console.log(`\n\nSOme HASHING ${hash}\n\n`);
      db.Users.create({
        accountName: req.body.accountName,
        hashedPW: hash
        // wins: req.body.wins,
        // loses: req.body.loses,
        // weaponID: req.body.weaponID,
        // headID: req.body.headID,
        // chestID: req.body.chestID,
        // pantsID: req.body.pantsID,
        // feetID: req.body.feetID,
        // createdAt: new Date(),
        // updatedAt: new Date()
      }).then(function(dbExample) {
        res.json(dbExample);
        console.log(
          `\nI need to know then this string of actions end ${dbExample}\n\n`
        );
        // console.log(`\n${jsoned}\n`);
      });
    }
  });

  app.post("/api/inventory", function(req, res) {
    db.InventoryTables.create({
      itemname: req.body.itemname,
      itemid: req.body.itemID,
      itemslot: req.body.itemslot,
      melee: req.body.melee,
      Defence: req.body.defence,
      magic: req.body.magic,
      ownerID: req.body.ownerID
    }).then(function(dbExample) {
      res.json(dbExample);
      console.log("Added to Inventory");
    });
  });
  app.get("/api/passwordcreation", function(req, res) {
    //let hashedpw = bcrypthash(req.body.body);
  });
};

//-----------------------------------Deletion Section --------------------------------------------
