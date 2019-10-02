var db = require("../models");
var bcrypthash = require("../controllers/bcrypthash");
let bcrypttest = require("../controllers/bcryptTest");
// let Sequelize = require("sequelize");
// let battlesys = require("../controllers/templates");

module.exports = function(app) {
  //--------------------Battle Section-------------//
  // app.get("/api/random", function(req, res) {
  //   db.users
  //     .findAll({
  //       order: [Sequelize.litteral("RAND")]
  //     })
  //     .then(function(user2) {
  //       res.json(user2);
  //     });
  // });

  // app.get("/api/battleConstruct", function(req, res) {
  //   res(battlesys(req.body.user1, req.body.user2));
  // });

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

  // Get all User Information
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

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

  //getting information for one user using req.params.accountName
  app.get("/api/users/accountName/:accountName", function(req, res) {
    db.Users.findOne({ where: { accountName: req.params.accountName } }).then(
      function(dbUserInfo) {
        res.json(dbUserInfo);
        // console.log(`\n\ninfo about duplicate usrnames${res.json(dbUserInfo)}: routes/apiRoutes.js`)
      }
    );
  });

  //getting information for one user using req.params.accountName
  app.get("/api/users/email/:email", function(req, res) {
    db.Users.findOne({ where: { email: req.params.email } }).then(function(
      dbUserInfo
    ) {
      res.json(dbUserInfo);
      // console.log(`\n\ninfo about duplicate usrnames${res.json(dbUserInfo)}: routes/apiRoutes.js`)
    });
  });

  //getting information for one user using req.params.accountName
  app.get("/api/users/checkpw/:loginName/:loginPw", function(req, res) {
    console.log("\n\n WE GOT HERE YAYAYAYAYAYA\n\n");

    db.Users.findOne({ where: { accountName: req.params.loginName } }).then(
      function(dbUserInfo) {
        // res.json(dbUserInfo);
        console.log(dbUserInfo.hashedPW);
        console.log(`\n\nBEFORE THE TINGS POPS OFF:                 ${hash}`);

        // this compares the passwords
        bcrypt.compare(req.params.loginPw, dbUserInfo.hashedPW, function(
          err,
          hash
        ) {
          // Store hash in your password DB.
          console.log(
            "\n\n\nLet see if this console.log even comes through\n\n"
          );
          console.log(hash + "\n\n");
          // then send that value here to get it back to being synchronous
          valueOfHash(hash);
          // createFunc(hash);
        });

        function valueOfHash(hash) {
          console.log(
            `\n\nPLEASE LET THIS THING WORK:                 ${hash}`
          );
          // then send it back to the front end
          res.json(hash);
        }
      }
    );
  });
  //-----------------------------------------------Equipment Section-----------------------------------

  //------Helmet Section --------//

  //getting the entire table of helmets
  app.get("/api/helmet", function(req, res) {
    db.helmetTable.findAll({}).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  //Api for finding one type of helmet
  app.get("/api/helmet/:id", function(req, res) {
    db.helmetTable
      .findOne({ where: { id: req.params.id } })
      .then(function(dbItem) {
        res.json(dbItem);
      });
  });

  //------Chest Area---//

  //For entire table of chests
  app.get("/api/chests", function(req, res) {
    db.chestTable.findAll({}).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  //For finding one type of Chest
  app.get("/api/chests/:id", function(req, res) {
    db.chestTable
      .findOne({ where: { id: req.params.id } })
      .then(function(dbItem) {
        res.json(dbItem);
      });
  });
  //-------Glove Section----//

  //For entire table of gloves
  app.get("/api/gloves", function(req, res) {
    db.chestTable.findAll({}).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  app.get("/api/gloves/:id", function(req, res) {
    db.glovesTable
      .findOne({ where: { id: req.params.id } })
      .then(function(dbItem) {
        res.json(dbItem);
      });
  });

  //----------------------Weapon Section--------------------------//
  app.get("/api/weapons", function(req, res) {
    db.weaponsTable.findAll({}).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  app.get("/api/weapons/:id", function(req, res) {
    db.weaponsTable
      .findOne({ where: { id: req.params.id } })
      .then(function(dbItem) {
        res.json(dbItem);
      });
  });

  //--------------------------Boot Section------------------------//
  app.get("/api/boots", function(req, res) {
    db.bootsTable.findAll({}).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  app.get("/api/weapons/:id", function(req, res) {
    db.bootsTable
      .findOne({ where: { id: req.params.id } })
      .then(function(dbItem) {
        res.json(dbItem);
      });
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
        hashedPW: hash,
        email: req.body.email
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

  app.get("/api/passwordcreation", function(req, res) {
    //let hashedpw = bcrypthash(req.body.body);
  });
};

//-----------------------------------Deletion Section --------------------------------------------
