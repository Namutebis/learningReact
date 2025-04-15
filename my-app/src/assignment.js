
import { useState } from "react";

function CreatePassword(){
    const [userName, setUserName] = useState(" ")
    const [passWord, setPassword] = useState(" ")
    const [emailaddress, setEmail] = useState(" ")
    console.log(userName +" " +passWord + " "+emailaddress)

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert("You have logged in: ")
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label> Enter username:
                <input type="text"
                value={userName}
                onChange ={(e) => setUserName(e.target.value)}/>
            </label>
           
            <label> Enter password: 
                <input type="password"
                value={passWord}
                onChange={(e) => setPassword(e.target.value)}/>
            </label>

            <label> Enter emailAddress:
                <input type="email"
                value={emailaddress}
                onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <button type="submit">Login</button>
        </form>
    )
}
export default CreatePassword;