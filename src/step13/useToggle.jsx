import { useState } from "react";

export function useToggle (inivalue){
  let texts = ['방송중단','방송중'];
  const [onAir, setOnAir] = useState(inivalue);
  const[text,setText] = useState(texts[0]);
  const[count,setCount] = useState(1);
  function toggle(e){
    setCount(count+1);
    setOnAir(!onAir);
    setText(texts[count%2]);
    console.log(count);
    console.log(e.target.textContent);

  }
    return[text,toggle];
}
    

  