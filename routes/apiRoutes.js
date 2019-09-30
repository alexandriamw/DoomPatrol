var db = require("../models");

module.exports = function(app) {
  // Get/ Read Functions
  // ==========================================================================
  // ==========================================================================
  // Get all User Information
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  //getting information for one user
  app.get("/api/users/:accountName", function(req, res) {
    db.User.findOne({ where: { id: req.params.accountName } }).then(function(
      dbUserInfo
    ) {
      res.json(dbUserInfo);
    });
  });

  //getting the entire table of equipment
  app.get("/api/equipment", function(req, res) {
    db.equipment.findAll({}).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  //Api for finding one piece of equipment
  app.get("/api/equipment/:equipID", function(req, res) {
    db.equipment
      .findOne({ where: { id: req.params.id } })
      .then(function(dbItem) {
        res.json(dbItem);
      });
  });

  // Post/ Create Functions
  // ==========================================================================
  // ==========================================================================
  // Create a new user
  app.post("/api/users", function(req, res) {
    db.User.create({
      accountName: req.body.accountName,
      hashedPW: req.body.hashedPW,
      wins: req.body.wins,
      loses: req.body.loses,
      weaponID: req.body.weaponID,
      headID: req.body.headID,
      chestID: req.body.chestID,
      pantsID: req.body.pantsID,
      feetID: req.body.feetID,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(function(dbExample) {
      res.json(dbExample);
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
