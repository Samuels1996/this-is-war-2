const express = require("express");

const { ApolloServer } = require("apollo-server-express");

const db = require("./config/connection");
const models = require("./models");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  // typeDefs,
  // resolvers
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};
