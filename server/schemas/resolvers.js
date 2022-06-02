const { AuthenticationError } = require("apollo-server-express");
const { Character, User, Item, Level } = require("../models");
const { signToken } = require("../utils/auth");

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
      return Item.find({});
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

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Email or password incorrect");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Email or password incorrect");
      }

      const token = signToken(user);

      return { token, user };
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
