const db = require("../config/connection");
const { Character, User, Item, Level } = require("../models");

// const itemsData = require("./Items.json");
// const characterData = require("./Character.json");
const userData = require("./Users.json");
// const levelData = require("./Levels.json");

db.once("open", async () => {
  try {
    // await Character.deleteMany({});
    await User.deleteMany({});
    // await Item.deleteMany({});
    // await Level.deleteMany({});

    // const items = await Item.insertMany(itemsData);
    // const characters = await Character.insertMany(characterData);
    await User.create(userData);
    // const levels = await Level.insertMany(levelData);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("Seeding complete");
  process.exit(0);
});
