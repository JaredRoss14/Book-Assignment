const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

// Add routes, for both API and view
app.use(routes);

// Configure promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`Now listening on Port: ${PORT}!`);
});
