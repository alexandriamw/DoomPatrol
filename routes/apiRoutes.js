var db = require("../models");
var bcrypthash = require("../controllers/bcrypthash");
let bcrypttest = require("../controllers/bcryptTest");

module.exports = function(app) {
  // Get all User Information
  app.get("/api/users", function(req, res) {
    db.users.findAll({}).then(function(dbUsers) {
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

  //getting information for one user
  app.get("/api/users/:accountName", function(req, res) {
    db.users
      .findOne({ where: { id: req.params.accountName } })
      .then(function(dbUserInfo) {
        res.json(dbUserInfo);
      });
  });

  //-----------------------------------------------Equipment Section-----------------------------------
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

  //For entire table of gloves
  app.get("/api/gloves", function(req, res) {
    db.chestTable.findAll({}).then(function(dbEquipment) {
      res.json(dbEquipment);
    });
  });

  //---------------------------------Creation Section (In Progress)---------------------------------------------
  // Create a new user
  app.post("/api/users", function(req, res) {
    db.users.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/passwordcreation", function(req, res) {
    //let hashedpw = bcrypthash(req.body.body);
  });

  //-----------------------------------Deletion Section ---------------------------------------------
  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
