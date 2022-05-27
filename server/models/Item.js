const { Schema, Types, model } = require("mongoose");

const itemSchema = new Schema({
  category: String,
  name: String,
  description: String,
  price: Number,
  hp: Number,
  attack: Number,
  defense: Number,
});

const Item = model("Item", itemSchema);

module.exports = Item;
