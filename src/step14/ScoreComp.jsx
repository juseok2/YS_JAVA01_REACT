import { useState } from "react";

function Grade(props){
  if(props.score>60){
    return(<p>합격입니다.</p>);
  }
  return(<p>불합격입니다.</p>);
}

export function ScoreComp(props){
  const [score,setScore] = useState(50);
  function changeScore(e){
    setScore(e.target.value);
  }
  return(
    <>
      <input type="number" onChange={(e) => {changeScore(e)}}/>
      <Grade score={score}></Grade>
    </>
  );
}