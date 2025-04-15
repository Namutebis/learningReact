import {useState} from 'react'
function MyTextArea(){
    const [myTextArea, setTextArea] = useState(" ")
    console.log(myTextArea)

    const handleChange =(e) =>{
        setTextArea(e.target.value)
    
    }
    return(
        <textarea value = {myTextArea} onChange={handleChange} />
    )
}
export default MyTextArea;