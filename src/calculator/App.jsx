import { useEffect, useState } from "react";
export function App() {
  let styles = {
    wrap:{
      width:600,
      height:800,
      backgroundColor:'blue',
      margin: '0 auto',
      padding: 20
    },
    numpad:{
      width:560,
      height:550,
      backgroundColor:'red',
      padding: 20,
      marginTop:20
    },
    numbtn:{
      width:130,
      height:130,
      display:'inline-block',
      backgroundColor:'green',
      margin:5,
      fontSize:36,
      textAlign:'center',
      lineHeight:4
    },
    numbtn0:{
      width:270,
      height:130,
      display:'inline-block',
      backgroundColor:'green',
      margin:5,
      fontSize:36,
      textAlign:'center',
      lineHeight:4
    },
    result:{
      width:580,
      height:180,
      backgroundColor:'yellow',
      textAlign:'right',
      fontSize:56,
      lineHeight:3,
      paddingRight:20
    }
  }
  const [num1,setNum1] =useState('');
  const [num2,setNum2] =useState('');
  const [text,setText] =useState('');
  const [result,setResult] =useState(0);
  const [operator,setOperator] =useState('');
  const [isClick,setIsClick] =useState(false);

  const numSet = (num) =>{ 
    if(!isClick){
      const newnum1 = num1 === '' ? num: num1+num;
      setNum1(newnum1);
      setText(newnum1);
    } else{
      const newnum2 = num2 === '' ? num: num2+num;
      setNum2(newnum2);
      setText(num1+operator+newnum2);
    }
    
  };
  const operatorSet = (op) =>{
    setOperator(op);
    setIsClick(true);
    setText(num1+op);
  }
  const calculate = () =>{
    let res;
    const _num1 = parseInt(num1)
    const _num2 = parseInt(num2)
    switch(operator){
      case'+':
        res = _num1+_num2;
        break;
      case'-':
        res = _num1-_num2;
        break;
      case'X':
        res = _num1*_num2;
        break;
      case'/':
        res = _num1/_num2;
        break;
    }
    setResult(res);
    setText(res);
    setNum1(res.toString());
    setNum2('');
    setOperator('');
    setIsClick(false);
  }
  const buttons = [
    '7', '8', '9', 'X',
    '4', '5', '6', '/',
    '1', '2', '3', '+',
    '0', '=', '-'
  ]
    return (
        <>
          <div style={styles.wrap}>
            <div style={styles.result}>{text}</div>
            <div style={styles.numpad}>
              {buttons.map((btn, index) =>(
                <p style={{...styles.numbtn,...(btn === '0' ? styles.numbtn0 : {})}}
                onClick={() => btn === '=' ? calculate() : (['+', '-', 'X', '/'].includes(btn) ? operatorSet(btn) : numSet(btn))}
                >
                  {btn}
              </p>
              ))}
            </div>
          </div>
        </>
    );
}   