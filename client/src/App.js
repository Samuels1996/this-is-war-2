import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/MainNav";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import $ from "jquery";
import Popper from "popper.js";

// Styling imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

// Page backgrounds
import mainBg from "./images/brick-bg.png";
import loginBg from "./images/login-bg.png";
import storeBg from "./images/store-bg.png";

// Page imports
import {
  Login,
  HomePage,
  Fight,
  FightChoose,
  ChampionSelect,
  CreateChampion,
  Store,
} from "./components/pages";
import { useState } from "react";

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
  const [bgImage, setBgImage] = useState();

  const updateBgImage = (sitepath) => {
    if (sitepath === "/store") {
      return setBgImage(storeBg);
    } else if (sitepath === "/login") {
      return setBgImage(loginBg);
    } else {
      return setBgImage(mainBg);
    }
  };

  useEffect(() => {
    let pathUrl = window.location.pathname;

    updateBgImage(pathUrl);
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <div
          className="site-bg"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
          }}
        >
          <>
            <Navbar />

            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/store" element={<Store />} />
              <Route
                exact
                path="/championselect"
                element={<ChampionSelect />}
              />
              <Route exact path="/fight" element={<Fight />} />
              <Route exact path="/fightchoice" element={<FightChoose />} />
              <Route
                exact
                path="/createchampion"
                element={<CreateChampion />}
              />
            </Routes>
          </>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
