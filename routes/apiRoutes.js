var db = require("../models");

module.exports = function(app) {
  // Get/ Read Functions
  // ==========================================================================
  // ==========================================================================
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
  // ==========================================================================
  // ==========================================================================
  // Create a new user
  app.post("/api/users/:userName", function(req, res) {
    db.Users.create({
      accountName: req.params.userName
      // hashedPW: req.body.hashedPW,
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
    });
  });

  app.post("/api/hashedPW/:psw", function(req, res) {
    db.HashedPW.create({
      hashedPW: req.params.psw
    }).then(function(dbHashedPW) {
      res.json(dbHashedPW);
    });
  });

  // Delete/ Destroy Functions
  // ==========================================================================
  // ==========================================================================
  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
