import { useState } from "react";
import './comonents/App01.css';

export function App(){
    const [num,setNum] = useState(0);
    
    return(
        <div className="wrap">
            <h2>{num}</h2>
            <button onClick={() => setNum(num>0 ? num-1:0)}>-1</button>
            <button onClick={() => setNum(num+1)}>+1</button>
            <button onClick={() => setNum(0)}>reset</button>
        </div>
    );
}