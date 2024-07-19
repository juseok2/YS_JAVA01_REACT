import { useState } from "react";
export function Grading2(props){
  const [total,setTotal] =useState(0);
  const [avg,setAvg] =useState(0);
  const [fff,setFff] =useState(0);
  const [pass,setPass] =useState(true);

  function grading(){
  let _total = props.kor+props.eng+props.math;
  let _avg = Math.floor(_total/3);
  let _fff = 0;
  if(props.kor < 40){_fff++;}
  if(props.eng < 40){_fff++;}
  if(props.math < 40){_fff++;}
    if(_avg > 60 && _fff === 0){
      setPass(true);
    }else{
      setPass(false);
    }
    setTotal(_total);
    setAvg(_avg);
    setFff(_fff);
}
  
  return (
    <>
      <div>
        <button onClick={grading}>판정</button>
        <p>국어{props.kor} 영어{props.eng} 수학{props.math}</p>
        <p>총점: {total}점, 평균: {avg}점,과락 {fff}건</p>
        <p>{pass ? "합격":"불합격"}하셨습니다.</p>
      </div>
    </>
  );
}