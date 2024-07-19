import { InputBox } from "./InputBox";
import {Grading} from "./Grading"
import { useState } from "react";

export function Exam(){
  const [Korscore,setKorScore] = useState(0);
  const [Engscore,setEngScore] = useState(0);
  const [Mathscore,setMathScore] = useState(0);
  
  const changeKorScore = (e) =>{
    let Kscore = Number(e.target.value);
    setKorScore(Kscore);
  }
  const changeEngScore = (e) =>{
    let Escore = Number(e.target.value);
    setEngScore(Escore);
  }
  const changeMathScore = (e) =>{
    let Mscore = Number(e.target.value);
    setMathScore(Mscore);
  }
  return(
    <>
      <p>국어: <input type="number" onChange={(e) => changeKorScore(e)}/></p>
      <p>영어: <input type="number" onChange={(e) => changeEngScore(e)}/></p>
      <p>수학: <input type="number" onChange={(e) => changeMathScore(e)}/></p>
      <button style={{padding:20}}>판정</button>
      <Grading Eng={Engscore} Math={Mathscore} Kor={Korscore}></Grading>
    </>
  );
}