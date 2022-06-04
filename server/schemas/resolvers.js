const { AuthenticationError } = require("apollo-server-express");
const { Character, User, Item, Level } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
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
      return Level.find({});
    },
    characters: async () => {
      return Character.find({});
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
      console.log(`Login route hit`);
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
    createCharacter: async (parent, args) => {
      const character = await Character.create(args);
      return character;
    },
    addItem: async (parent, { userId, itemId }) => {
      console.log(itemId);
      console.log(userId);
      return await User.findByIdAndUpdate(
        { _id: userId },
        { $push: { inventory: itemId } },
        { new: true }
      );
    },
    // createItem: async (parent, args) => {
    //   const item = await Item.create(args);
    //   return item;
    // },
    addCharacterToUser: async (parent, args) => {
      console.log(args);
      const character = {
        name: args.name,
        classType: args.classType,
      };
      const userId = args.userId;
      const user = User.find({ userId }).populate(character).exec();
      return user;
    },
  },
};

module.exports = resolvers;
