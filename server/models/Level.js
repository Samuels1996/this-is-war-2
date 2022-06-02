const { Schema, model, Types } = require("mongoose");

const levelSchema = new Schema({
  level: {
    type: Number,
  },
  exp: { type: Number },
  money: { type: Number },
  hp: { type: Number },
  attack: { type: Number },
  defense: { type: Number },
});

const Level = model("Level", levelSchema);
module.exports = Level;
