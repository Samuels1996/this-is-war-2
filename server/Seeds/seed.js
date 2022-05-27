const db = require("../config/connection");
const { Character, User, Item, Level } = require("../models");

const itemsData = require("./Items.json");
const characterData = require("./Character.json");
const userData = require("./Users.json");
const levelData = require("./Levels.json");

db.once("open", async () => {
  await Character.deleteMany({});
  await User.deleteMany({});
  await Item.deleteMany({});
  await Level.deleteMany({});

  const items = await Item.insertMany(itemsData);
  const characters = await Character.insertMany(characterData);
  const users = await User.insertMany(userData);
  const levels = await Level.insertMany(levelData);

  process.exit(0);
});
