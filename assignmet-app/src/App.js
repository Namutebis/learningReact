import { useState } from "react";
import ReactDOM from "react-dom/client";
import MyToDo from "./exercise/MyToDo";
import Training from "./exercise/Training";
import TrainingTwo from "./exercise/TrainingTwo";

const App = () => {
  const [count, setCount] = useState(0);
  const [Owakabi, setOwakabi] = useState(["Nsereko", "Nakayiwa"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      return(
        <Router>
            <Routes> 
            <Route path="/" element={<Training />}>
            </Route>
            </Routes>
        </Router>

    )
    </>
  );
};

export default App;
