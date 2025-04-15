
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TermOne from './myPages/TermOne';
import TermTwo from './myPages/TermTwo';
import TermThree from './myPages/TermThree';
import TermFour from './myPages/TermFour';
import Practicingcss from './myPages/Practicingcss';
import MyWork from './myPages/MyWork';


function App() {
  return (

    <Router>
      <div>  
        <Routes>
          <Route path="/" element={<TermOne />} />
           <Route path="/first" element={<TermTwo />} />
          <Route path="/second" element={<TermThree />} /> 
          <Route path="/third" element={<TermFour />} />
          <Route path="/four" element={<Practicingcss />} />
          <Route path='five' element={<MyWork />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;