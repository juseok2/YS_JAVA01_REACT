import { useState } from "react";

export function InputBox(props){
  const [score,setScore] = useState(0);
  const changeScore = (e) =>{
    let score = e.target.value;
    setScore(score);
  }
  
  return(
    <>
      <p>{props.subject}: <input type="number" onChange={(e) => changeScore(e)}/></p>
    </>
    ,[score]
  );
}