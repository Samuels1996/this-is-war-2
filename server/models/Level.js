const { Schema, model, Types } = require("mongoose");

const levelSchema = new Schema({
  level: Number,
  exp: Number,
  money: Number,
  hp: Number,
  attack: Number,
  defense: Number,
});

const Level = model("Level", levelSchema);
module.exports = Level;
