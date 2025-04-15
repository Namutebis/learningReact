
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import University from './pages/University';  
import Nursery from './pages/Nursery';
import Primary from './pages/Primary';
import Secondary from './pages/Secondary';

function App() {
  return (
    <Router>
      <div>
        <University/>  
        <Routes>
          <Route path="/" element={<Nursery />} />
          <Route path="/levelone" element={<Primary />} />
          <Route path="/leveltwo" element={<Secondary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

