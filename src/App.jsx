// 함수방식

import { ColoredMessage } from "./comonents/coloredMessage";
import { ColoredMessage2 } from "./comonents/ColoredMessage2";
// State
import { useState } from "react";

// 태그 하나로 감싸야 함
export function App(){
  const [num,setNum] = useState(0);
    const divStyle = {
      border: '1px solid blue'
    }
    const aaa = () =>{
        // alert('강아지');
        // let num2 = num + 2;
    }
    const redStyle ={
      color:'red',
      backgroundColor:'yellow'
    }
    const pinkStyle ={
      color:'pink',
      fontSize:'20px'
    }
    return (
      <div style = {divStyle}>
        {console.log('test')}
        <p style={{color:'blue',fontSize:'32px'}}>안녕하세요</p>
        {/* <p style={redStyle}>반갑습니다. 잘 지내시죠?</p> */}
        <ColoredMessage color='orange' message = '잘 지내시죠?'/>
        <ColoredMessage color='red' message = 'How do you do?'/>
        <ColoredMessage2 color='blue'>잘 지내시죠?</ColoredMessage2>
        <p style={pinkStyle}>잘 지내고 있습니다.</p>
        <button onClick={aaa}>버튼</button>
      </div>
    );
  }

//   <script>
//     function aaa(param){
//         alert(param);
//     }
// </script>

// <div>
//     <p>안녕하세요</p>
//     <p>안녕</p>
//     <button onclick="javascript:aaa('강아지')">버튼</button>
//   </div>