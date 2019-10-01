require("dotenv").config();
let express = require("express");
let exphbs = require("express-handlebars");
let db = require("./models");
var sassMiddleware = require("node-sass-middleware");
var path = require("path");
<<<<<<< HEAD


=======
>>>>>>> 14626bc397adcd3cf676638032582686b36d66e4
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(
  sassMiddleware({
    src: path.join(__dirname, "public/scss"),
    dest: path.join(__dirname, "public/styles")
  })
);

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

let syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
// Starting the server, syncing our models ------------------------------------/

module.exports = app;
