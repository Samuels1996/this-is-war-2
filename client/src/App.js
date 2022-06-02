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
import "./App.css";

import {
  Login,
  Signup,
  HomePage,
  Fight,
  FightChoose,
  ChampionSelect,
  CreateChampion,
  Store,
} from "./components/pages";
<<<<<<< HEAD
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import Popper from "popper.js";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
=======

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
>>>>>>> 3be4d4a40f926f6aefaf44003b293bf10daad09f
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
<<<<<<< HEAD
      <div className="App login-background">
        <Router>
          <Navbar />
=======
      <Router>
        <>
          <h1>Link navbar element here</h1>
>>>>>>> 3be4d4a40f926f6aefaf44003b293bf10daad09f

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
<<<<<<< HEAD
=======
            <Route path="/signup" element={<Signup />} />
>>>>>>> 3be4d4a40f926f6aefaf44003b293bf10daad09f
            <Route path="/store" element={<Store />} />
            <Route path="/championselect" element={<ChampionSelect />} />
            <Route path="/fight" element={<Fight />} />
            <Route path="/fightchoice" element={<FightChoose />} />
            <Route path="/createchampion" element={<CreateChampion />} />
          </Routes>
<<<<<<< HEAD
        </Router>
      </div>
=======
        </>
      </Router>
>>>>>>> 3be4d4a40f926f6aefaf44003b293bf10daad09f
    </ApolloProvider>
  );
}

export default App;
