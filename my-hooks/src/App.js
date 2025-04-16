import logo from './logo.svg';
import './App.css';
import Sarah from './Sarah';
import "./Sarah.scss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LearningUseEffect from './LearningUseEffect';
import Timer from './Timer';
import Ada from './Ada';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/One" element={<Sarah />} />
        <Route path= "/Two" element={<LearningUseEffect />} />
        <Route path="/Three" element={<Timer />} />
        <Route path="/Four" element={<Ada />} />
    </Routes>
    </Router>
  );

}

export default App;



