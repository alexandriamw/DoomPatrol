module.exports = function(test) {
  const bcrypt = require("bcrypt");
  // get myPlaintextPassword from user
  const myPlaintextPassword = "s0//P4$$w0rD";
  const someOtherPlaintextPassword = "not_bacon";

  //Place holder for gettin hash
  let hash = "Test";
  // Load hash from your password DB.
  bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
    // res == true
  });

  bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
    // res == false
  });
};
