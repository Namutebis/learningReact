import { memo } from "react";
function Sarah(props){
    return(<h2>Learning memo {props.names}</h2>)
}
export default memo (Sarah);