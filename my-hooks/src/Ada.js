import React, { useState, useEffect } from 'react';
function Ada() {
    //declare a variable age with intial value of 10
    //setAge is a function that updates age

    const [age, setAge] = useState(10);

    //declare a variable changeAge to check if the button is clicked
    //setClicked is the function that updates changeAge 
    const [changeAge, setClicked] = useState(false);

    const [lifeSpan, setLifeSpan] = useState(70);
    const [promoted, setPromotion] = useState("passed")
    const [married, setMarried] = useState(true)
    //const [go, setGoToAmerica] = useState(true)
    const[rich, setRich] = useState
    const[go, setGo ]= useState

const Josiah =()=>{
    setAge(14)
}
    //useffect hook that runs
    useEffect(() => {
        setLifeSpan(lifeSpan + 4)
    
    }, [age]);

    useEffect(()=>{
        setPromotion(Primary one)
    }, [passed])

    useEffect(() => {
        getChildren(true)
    }, [married])

   useEffect(() =>{
    setRich(true)
   },[go])

   useEffect(()=>{
    sethealty(true)
   },[go])

   }
    return (
        <>
            <h1>Changing Josiah's age.</h1>
            <p>Age : {age}</p>
            <p>current lifespan: {lifeSpan} </p>
            <button onClick={Josiah}>Age changed!</button>
        </>
    )
}
export default Ada;
//when the button is clicked, Josiah's age should change from 10 to 13
//when age changes Josiah's life span increases by 4
//add a paragraph to show the current age and life span
// when you get married you have children
//when I go to America, i will become rich
//when i go to the village, i will be healthy




