module.exports = function(text) {
  const bcrypt = require("bcrypt");
  const saltRounds = 10;
  // get myPlaintextPassword from user
  const myPlaintextPassword = text;

  bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    return hash;
  });
};
