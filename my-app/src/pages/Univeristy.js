
import React from 'react';
import { Link, Routes } from 'react-router-dom';

function University() {
  return (
  
    <nav>
      <ul>
        <li><Link to="/">Nursery</Link></li>
        <li><Link to="/about">Primary</Link></li>
        <li><Link to="/contact">Secondary</Link></li>
      </ul>
    </nav>
  
  );
}

export default University;
