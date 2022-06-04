const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Character {
    _id: ID!
    name: String!
    equipment: [Item]
    level: Int
    classType: String!
    hp: Int
    attack: Int
    defense: Int
    exp: Int
    active: Boolean
    boss: Boolean
  }
  input CharacterInput {
    _id: ID!
    name: String!
    equipment: [ItemInput]
    level: Int
    classType: String!
    hp: Int
    attack: Int
    defense: Int
    exp: Int
    active: Boolean
    boss: Boolean
  }
  type Level {
    _id: ID!
    level: Int
    exp: Int
    money: Int
    hp: Int
    attack: Int
    defense: Int
  }

  type Item {
    _id: ID!
    category: String!
    name: String!
    description: String!
    price: Int
    hp: Int
    attack: Int
    defense: Int
  }
  input ItemInput {
    _id: ID!
    category: String!
    name: String!
    description: String!
    price: Int
    hp: Int
    attack: Int
    defense: Int
  }
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    wealth: Int
    characters: [Character]
    inventory: [Item]
    wins: Int
    loses: Int
    online: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(_id: String): [User]
    characters: [Character]
    character(_id: String): [Character]
    items: [Item]
    item(_id: String): [Item]
    level: [Level]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createCharacter(name: String!, classType: String!): Character
    addCharacterToUser(userId: ID!, name: String!, classType: String!): User
  }
`;

module.exports = typeDefs;
