import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
          <Routes>
            <Route path="/bayan1_level1/bayan1_level2_el1" element={<Bayan1Level2El1 />} />
            <Route path="/bayan1_level1/bayan1_level2_el2" element={<Bayan1Level2El2 />} />
            <Route path="/bayan1_level1/bayan1_level2_el3" element={<Bayan1Level2El3 />} />
            <Route path="/bayan2_level1/bayan2_level2_el1" element={<Bayan2Level2El1 />} />
            <Route path="/bayan2_level1/bayan2_level2_el2/bayan2_level3_el1" element={<Bayan2Level3El1 />} />
            <Route path="/bayan2_level1/bayan2_level2_el2/bayan2_level3_el2" element={<Bayan2Level3El2 />} />
            <Route path="/bayan2_level1/bayan2_level2_el2/bayan2_level3_el3" element={<Bayan2Level3El3 />} />
            <Route path="/" element={<div>Home Content</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
