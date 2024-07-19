import { useState } from "react";
export function useCounter(inivalue){
  const [count,setCount]=useState(inivalue);
  const incresae = () => {setCount((count) =>(count+1))}
  const decresae = () => {setCount((count) =>Math.max(count-1, 0))}
  return [count, incresae, decresae];
}