import ReactDOM from "react-dom/client"
import{Router, Routes, Route} from "react-router-dom";
import Training from "./exercise/Training" 
function TrainingTwo(){
    return(
        <Router>
            <Routes> 
            <Route path="/" element={<Training />}>
            </Route>
            </Routes>
        </Router>

    )
}
export default TrainingTwo;

// when you click on the button the page should turn blue
