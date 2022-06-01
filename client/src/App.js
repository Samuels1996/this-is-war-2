import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login, HomePage, Fight, FightChoose, ChampionSelect, CreateChampion, Store } from './components/pages'

function App() {
  return (
    <div className="App">
      <Router>
        <h1>link navbar element here</h1>

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
    </div>
  );
}

export default App;
