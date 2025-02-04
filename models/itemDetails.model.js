const mongoose = require("mongoose");

const itemDetailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Items = mongoose.model("Items", itemDetailSchema);
module.exports = Items;
