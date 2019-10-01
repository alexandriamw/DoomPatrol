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
