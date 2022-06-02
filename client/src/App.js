import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import {
  Login,
  Signup,
  HomePage,
  Fight,
  FightChoose,
  ChampionSelect,
  CreateChampion,
  Store,
  TestPage,
} from "./components/pages";

import background from "./images/brick-bg.png";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/store" element={<Store />} />
            <Route path="/championselect" element={<ChampionSelect />} />
            <Route path="/fight" element={<Fight />} />
            <Route path="/fightchoice" element={<FightChoose />} />
            <Route path="/createchampion" element={<CreateChampion />} />
            <Route path="/testpage" element={<TestPage />} />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
