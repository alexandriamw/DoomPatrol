var db = require("../models");

// bcrypting things
// ================================================================================================================
// ================================================================================================================
const bcrypt = require("bcrypt");
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

module.exports = function(app) {
  // Get/ Read Functions
  // =================================================
  // =================================================
  // Get all User Information
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  app.get("/api/hashedPW", function(req, res) {
    db.HashedPW.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Post/ Create Functions
  // =================================================
  // =================================================
  // Create a new user
  app.post("/api/register", function(req, res) {
    bcrypt.hash(req.body.hashedPW, saltRounds, function(err, hash) {
      // Store hash in your password DB.
      console.log("\n\n\nLet see if this console.log even comes through\n\n");
      console.log(hash + "\n\n");
      createFunc(hash);
    });
    console.log(`\n\nHash outside of the bcrypt function${hash}\n\n`);

    function createFunc(hash) {
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

  // Delete/ Destroy Functions
  // =================================================
  // =================================================
  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
