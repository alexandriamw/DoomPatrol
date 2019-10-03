var db = require("../models");
// let battlesys = require("../controllers/templates");

module.exports = function(app) {
  //--------------------Battle Section-------------//
  app.get("/api/random", function(req, res) {
    db.Users.findAll({}).then(function(user2) {
      res.json(user2[Math.floor(Math.random() * user2.length)]);
    });
  });

  // bcrypting things
  // ================================================================================================================
  // ================================================================================================================
  const bcrypt = require("bcryptjs");
  const saltRounds = 10;
  // get myPlaintextPassword from user
  // const myPlaintextPassword = "s0//P4$$w0rD";
  // const someOtherPlaintextPassword = "not_bacon";

  // bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  //   // Store hash in your password DB.
  // });

  // //Place holder for gettin hash
  // let hash = "Test";
  // // Load hash from your password DB.
  // bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
  //   // res == true
  // });

  // bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
  //   // res == false
  // });

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
  app.get("/api/users/accountName/:loginName", function(req, res) {
    db.Users.findOne({ where: { accountName: req.params.loginName } }).then(
      function(dbUserInfo) {
        res.json(dbUserInfo);
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
        // console.log(`\n\nBEFORE THE TINGS POPS OFF:                 ${hash}`);

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

  app.put("/api/users/updateuname/:updatename", function(req, res) {
    console.log(
      "WHAT HAppened here part1???:               routes/apiRoutes.js"
    );
    db.Users.update(
      { accountName: req.body.newUserName },
      { where: { accountName: req.body.oldUserName } }
    ).then(function(dbPost) {
      res.json(dbPost);
      console.log(
        "WHAT HAppened here Part2???:               routes/apiRoutes.js"
      );
    });
  });

  app.put("/api/users/updatepass/", function(req, res) {
    bcrypt.hash(req.body.hashedPW, saltRounds, function(err, hash) {
      // Store hash in your password DB.
      console.log("\n\n\nLet see if this console.log even comes through\n\n");
      console.log(hash + "\n\n");
      updatePassword(hash);
    });

    function updatePassword(hash) {
      console.log(hash);
      db.Users.update(
        { hashedPW: hash },
        { where: { accountName: req.body.accountName } }
      ).then(function(dbPost) {
        res.json(dbPost);
        console.log(
          "WHAT HAppened here Part2???:               routes/apiRoutes.js"
        );
      });
    }
  });

  // --------- User for battle system ----------
  app.get("/api/users/battle/:name", function(req, res) {
    db.Users.findOne({ where: { accountName: req.params.name } }).then(function(
      dbUserInfo
    ) {
      res.json(dbUserInfo);
      // console.log(`\n\ninfo about duplicate usrnames${res.json(dbUserInfo)}: routes/apiRoutes.js`)
    });
  });

  //-----------------------------------------------Equipment Section-----------------------------------

  //------Helmet Section --------//

  //getting the entire table of helmets
  app.get("/api/helmet", function(req, res) {
    db.headTable.findAll({}).then(function(dbEquipment) {
      res.json(dbEquipment[Math.floor(Math.random() * dbEquipment.length)]);
    });
  });

  // //Api for finding one type of helmet
  // app.get("/api/helmet/:id", function(req, res) {
  //   db.helmetTable
  //     .findOne({ where: { id: req.params.id } })
  //     .then(function(dbItem) {
  //       res.json(dbItem);
  //     });
  // });

  //------Chest Area---//

  //For entire table of chests
  app.get("/api/chests", function(req, res) {
    db.chestsTable.findAll({}).then(function(dbEquipment) {
      res.json(dbEquipment[Math.floor(Math.random() * dbEquipment.length)]);
    });
  });

  // //For finding one type of Chest
  // app.get("/api/chests/:id", function(req, res) {
  //   db.chestsTable
  //     .findOne({ where: { id: req.params.id } })
  //     .then(function(dbItem) {
  //       res.json(dbItem);
  //     });
  // });
  //-------Glove Section----//

  //For entire table of gloves
  app.get("/api/gloves", function(req, res) {
    db.gloveTable.findAll({}).then(function(dbEquipment) {
      res.json(dbEquipment[Math.floor(Math.random() * dbEquipment.length)]);
    });
  });

  // app.get("/api/gloves/:id", function(req, res) {
  //   db.gloveTable
  //     .findOne({ where: { id: req.params.id } })
  //     .then(function(dbItem) {
  //       res.json(dbItem);
  //     });
  // });

  //----------------------Weapon Section--------------------------//
  // fixed it, the variable here relating to the table was written wrong
  app.get("/api/weapon", function(req, res) {
    db.weaponTable.findAll({}).then(function(dbEquipment) {
      console.log(
        "\n\n",
        dbEquipment[Math.floor(Math.random() * dbEquipment.length)],
        "\n\n"
      );

      res.json(dbEquipment[Math.floor(Math.random() * dbEquipment.length)]);
    });
  });

  // app.get("/api/weapons/:id", function(req, res) {
  //   db.weaponTable
  //     .findOne({ where: { id: req.params.id } })
  //     .then(function(dbItem) {
  //       res.json(dbItem);
  //     });
  // });

  //--------------------------Boot Section------------------------//
  app.get("/api/boots", function(req, res) {
    db.bootTable.findAll({}).then(function(dbEquipment) {
      res.json(dbEquipment[Math.floor(Math.random() * dbEquipment.length)]);
    });
  });

  // app.get("/api/weapons/:id", function(req, res) {
  //   db.bootTable
  //     .findOne({ where: { id: req.params.id } })
  //     .then(function(dbItem) {
  //       res.json(dbItem);
  //     });
  // });

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
    // console.log(`\n\nHash outside of the bcrypt function${hash}\n\n`);

    function createFunc(hash) {
      // console.log(`\n\nSOme HASHING ${hash}\n\n`);
      db.Users.create({
        accountName: req.body.accountName,
        hashedPW: hash,
        email: req.body.email,
        level: 1,
        hp: 100
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
        console
          .log
          // `\nI need to know then this string of actions end ${dbExample}\n\n`
          ();
        // console.log(`\n${jsoned}\n`);
      });
    }
  });

  app.get("/api/passwordcreation", function(req, res) {
    //let hashedpw = bcrypthash(req.body.body);
  });
};

//-----------------------------------Deletion Section --------------------------------------------
