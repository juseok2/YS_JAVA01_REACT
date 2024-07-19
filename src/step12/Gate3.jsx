import { useState ,useEffect} from "react";
import { useCounter } from "./useCounter";

export function Gate3(){
  const [isFull,setIsFull] = useState(false); //최대정원
  const [isEmpty,setIsEmpty] = useState(true); //정원0명
  const [count, incresae, decresae] = useCounter(0); //현재입장객

  //최대정원
  const MAX_CAPACITY = 10;

  useEffect(()=>{
    setIsFull(count >= MAX_CAPACITY);
    setIsEmpty(count <= 0);
  },[count]);
  return(
    <div style={{padding:16}}>
      <p>총 {count}명 수용했습니다.</p>
      <button onClick={incresae} disabled={isFull}>입장</button>
      <button onClick={decresae} disabled={isEmpty}>퇴장</button>

      
      { isFull && <p style={{color: 'red'}}>정원이 가득 찼습니다.</p> }
      { isEmpty && <p style={{color: 'red'}}>입장객이 없습니다.</p>}
  
  </div>
  );
}