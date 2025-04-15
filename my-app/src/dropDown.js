//useState hook allows you to add state to my functional component
import { useState } from "react";

//Dropdown component that will render the dropdown 
// select input where the user selects a favorite fruit
function MyDropDown() {
    //usestate intialises the variable fruits with an empty value
    //setFruits is a function used to update fruits
    const [fruits, setFruits] = useState(" ")
    console.log(fruits)
    //event handler that is triggered 
    // when the user selects a fruit
    const handleChange = (e) => {
        //e.target captures a new value and then 
        // setFruits updates the fruits to a new value
        setFruits(e.target.value)
    }
    
    /*Title for the dropDown*/
    /*Allows the user to select one of the fruits*/
    return (
        <form>
            
            <h4>Choose a favorite fruit</h4>
            
            <select value={(fruits)} onChange={handleChange}>
                <option value="Pineapple">Pineapples</option>
                <option value="Apples">Apples</option>
                <option value="Oranges">Oranges</option>
                <option value="Mangoes">Mangoes</option>
            </select>
        </form>
    )
}
export default MyDropDown;