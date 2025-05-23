import { useEffect, useState } from "react";

function LearningUseEffect(){
        const [count, setCount] = useState(0);
        const [calculation, setCalculation] = useState(0);
      
        useEffect(() => {
          setCalculation(() => count * 2);
        }, []); // <- add the count variable here
      
        return (
          <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>
          </>
    )
}

export default LearningUseEffect;
// create a state that changes when you click a button 