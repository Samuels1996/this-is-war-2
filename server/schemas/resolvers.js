const { Character, User, Item, Level } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.findAll({});
    },
    user: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find(params);
    },
    items: async () => {
      return Item.findAll({});
    },
    item: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Item.find(params);
    },
    level: async () => {
      return Level.findAll({});
    },
    characters: async () => {
      return Character.findAll({});
    },
    character: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Character.find(params);
    },
  },
  // Mutation: {
  //   createUser: async (parent, args) => {
  //     const user = await User.create(args);
  //     return user;
  //   },
  //   createCharacter: async (parent, args) => {
  //     const character = await Character.create(args);
  //     return character;
  //   },
  //   createItem: async (parent, args) => {
  //     const item = await Item.create(args);
  //     return item;
  //   },
  // },
};

module.exports = resolvers;
