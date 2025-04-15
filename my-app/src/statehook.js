import { useState } from "react";
import App from "./App"

function LearningHooks(){
    const [names, setName] = useState("");

    const Save =()=>{alert("Entered my names")}
    console.log("The name I have set is", names)
    return (
      <form onSubmit={Save}>
        <label>Enter your name:
          <input
            type="text" 
            value ={names}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="Submit"/>
      </form>
    )
  }
  
export default LearningHooks;