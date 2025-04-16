import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nursery from './bags/Nursery';
import Primary from './bags/Primary';
import Secondary from './bags/Secondary';
import University from './bags/Univeristy';
import Work from './bags/work';
import MySchool from './bags/Myschool';


function App() {
  return (
    <Router>
      <div>
        <Work/>
        <Routes>
          <Route path="/sarah" element={<Nursery />} />
          <Route path='/levelone' element={<Primary />} />
          <Route path='leveltwo' element={<Secondary />} />
          <Route path='end' element={<University />} />
          <Route path='start' element={<MySchool />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;

