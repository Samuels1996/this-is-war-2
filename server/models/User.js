const { Schema, model, Types } = require("mongoose");
const Character = require("./Character");
const Item = require("./Item");
const userSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  userName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxlength: 15,
    minlength: 1,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 20,
  },
  wealth: {
    type: Number,
    default: 500,
  },
  characters: [
    {
      type: Schema.Types.ObjectId,
      ref: Character,
    },
  ],
  inventory: [
    {
      type: Schema.Types.ObjectId,
      ref: Item,
    },
  ],
  wins: {
    type: Number,
    default: 0,
  },
  loses: {
    type: Number,
    default: 0,
  },
});

const User = model("User", userSchema);

module.exports = User;
