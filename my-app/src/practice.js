// this hook allows you to add state to the Twoinputvalues

import { use, useState } from "react";

//component to create variable inputs
function TwoInputValues() {

  //keeps track of the changes in inputs 
  const [inputs, setInputs] = useState({});
  console.log(inputs)
  
  //triggered everytime the value of an input field changes
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  //function that is triggered everytime the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs.age);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export default TwoInputValues;