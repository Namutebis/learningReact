import logo from './logo.svg';
import './App.css';
import Training from './Training';
import React, {useState} from 'react';

function App(props) {
  const [color, setLangi] = useState("Blue");
  const Sarah=()=>{
    setLangi("Red")
  }

  console.log("The current color is" ,color)

  return (
   <>
   {color == "Blue"? <Training/> : null}
   <button id='new' style={{backgroundColor: "blue"}} onClick={Sarah}>Click Here!</button>
   </>
  );
}
//training should only render when color is red
//change button background color to red if color is red else to blue
export default App;
