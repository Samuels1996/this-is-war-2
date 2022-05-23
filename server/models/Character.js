const { Schema, model } = require("mongoose");
const Item = require("./Item");
const characterSchema = new Schema({
  name: {
    type: String,
    minlength: 1,
    maxlength: 15,
    required: true,
  },
  equipment: [
    {
      type: Schema.Types.ObjectId,
      ref: Item,
    },
  ],
  level: {
    type: Number,
    default: 1,
  },
  classType: {
    type: String,
    required: true,
  },
  hp: {
    type: Number,
    default: 100,
  },
  attack: {
    type: Number,
    default: 25,
  },
  defense: {
    type: Number,
    default: 25,
  },
  exp: {
    type: Number,
    default: 0,
  },
  active: {
    type: Boolean,
    default: false,
  },
  boss: {
    type: Boolean,
    default: false,
  },
});

const Character = model("Character", characterSchema);

module.exports = Character;
