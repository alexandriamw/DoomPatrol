var db = require("../models");

module.exports = function(app) {
  // Get all User Information
  app.get("/api/users", function(req, res) {
    db.users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
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

  // Create a new user
  app.post("/api/users", function(req, res) {
    db.users.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
