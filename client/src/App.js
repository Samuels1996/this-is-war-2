import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Login, HomePage, Fight, FightChoose, ChampionSelect, CreateChampion, Store } from './components/pages'
import './index.css'
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
            <Route
              path='/'
              element={<HomePage/>}
              />
              <Route
                path='/login'
                element={<Login/>}
                />
                <Route
                path='/store'
                element={<Store/>}
                />
                <Route
                path='/championselect'
                element={<ChampionSelect/>}
                />
                <Route
                path='/fight'
                element={<Fight/>}
                />
                <Route
                path='/fightchoice'
                element={<FightChoose/>}
                />
                <Route
                path='/createchampion'
                element={<CreateChampion/>}
                />
          </Routes>
        </Router>
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
        />
      </div>
    </ApolloProvider>
  );
}

export default App;
