import { useState } from "react";

export function ToggleButton(){
  const [onAir,setOnAir] = useState(true);
  const [onAir2,setOnAir2] = useState(true);
  function func1 (){
    setOnAir(!onAir);
  }
  const func2 = () =>{
    setOnAir2(!onAir2);
  }

  return(
    <>
    <button onClick={(e)=>func1(e.target.value)}>
      {onAir ? '방송중':'방송중단'}
    </button>
    <button onClick={func2}>
      {onAir2 ? '방송중':'방송중단'}
    </button>
    </>
  );
}