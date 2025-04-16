import { useState } from "react";
import styles from "./Sarah.scss";

function Sarah() {
    const [color, setColor] = useState("red")
    const [widthSize, setWidth] = useState("100px ")
    const [heigthSize, setHeight] = useState("100px")
    const [myBody, setBodyColor] = useState("pink")
    const LearningHooks = () =>{
        setColor("blue");
        setWidth("200px");
        setHeight("200px")
        setBodyColor("grey")
    }

    console.log(color)
    return (
        <>
            <body style={{
                backgroundColor: myBody
                }}>
                <button style={{ 
                    backgroundColor: color, 
                    width: widthSize, 
                    height: heigthSize,
                }}
                    id="myButton" onClick={LearningHooks}>Submit</button>
            </body>
        </>
    )
}
export default Sarah;
// when the button is clicked background color  of the body changes from maroon to grey