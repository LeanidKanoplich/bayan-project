import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Aside from './components/Aside';
import './styles/styles.css';
import Bayan1Level2El1 from './pages/Bayan1Level2El1';
import Bayan1Level2El2 from './pages/Bayan1Level2El2';
import Bayan1Level2El3 from './pages/Bayan1Level2El3';
import Bayan2Level2El1 from './pages/Bayan2Level2El1';
import Bayan2Level3El1 from './pages/Bayan2Level3El1';
import Bayan2Level3El2 from './pages/Bayan2Level3El2';
import Bayan2Level3El3 from './pages/Bayan2Level3El3';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Aside />
        <main className="main-content">
          <Switch>
            <Route path="/bayan1_level1/bayan1_level2_el1">
              <Bayan1Level2El1 />
            </Route>
            <Route path="/bayan1_level1/bayan1_level2_el2">
              <Bayan1Level2El2 />
            </Route>
            <Route path="/bayan1_level1/bayan1_level2_el3">
              <Bayan1Level2El3 />
            </Route>
            <Route path="/bayan2_level1/bayan2_level2_el1">
              <Bayan2Level2El1 />
            </Route>
            <Route path="/bayan2_level1/bayan2_level2_el2/bayan2_level3_el1">
              <Bayan2Level3El1 />
            </Route>
            <Route path="/bayan2_level1/bayan2_level2_el2/bayan2_level3_el2">
              <Bayan2Level3El2 />
            </Route>
            <Route path="/bayan2_level1/bayan2_level2_el2/bayan2_level3_el3">
              <Bayan2Level3El3 />
            </Route>
            <Route path="/">
              <div>Home Content</div>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
