import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import {
  Login,
  HomePage,
  Fight,
  FightChoose,
  ChampionSelect,
  CreateChampion,
  Store,
} from "./components/pages";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import Popper from "popper.js";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App login-background">
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/store" element={<Store />} />
            <Route path="/championselect" element={<ChampionSelect />} />
            <Route path="/fight" element={<Fight />} />
            <Route path="/fightchoice" element={<FightChoose />} />
            <Route path="/createchampion" element={<CreateChampion />} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
