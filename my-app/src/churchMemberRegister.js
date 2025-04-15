import { useState } from "react";

function ChurchRegister(){
const [inputs, setInputs] = useState({})
    
//Gets triggered everytime the value is changed

    const handleChange = (event) =>{
        const fullName = event.target.fullName;
        const familyName = event.target.familyName;
        const id = event.target.id;
        setInputs(values =>({...values, [fullName]: fullName}))
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert("Correct inputs");
    }
return(
    <form onSubmit={handleSubmit}>
    
    <p>Church Registration Form</p>

        <input type="text" placeholder="Enter your name" name="fullName" 
        onChange={handleChange}/> <br></br>
        
        <input type="text" placeholder="Enter your family name" name="familyName" 
        onChange={handleChange}/><br></br>
       
        <input type="text" placeholder="Enter your ID" name="id"
        onChange={handleChange}/><br></br>
        <button type="Submit">submit</button><br></br>

    </form>
)
//input name attributes and onchange
}

export default ChurchRegister;
