import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;