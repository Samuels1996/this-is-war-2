const { Schema, model, Types } = require("mongoose");
const Character = require("./Character");
const Item = require("./Item");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
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
  online: {
    type: Boolean,
    default: false,
  },
});

// Pre-save middleware to encrypt password with bcrypt
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
