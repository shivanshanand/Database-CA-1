const express = require("express");
const mongoose = require("mongoose");
const Restaurants = require("./models/restaurant.model");
const Items = require("./models/itemDetails.model");

const app = express();

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
