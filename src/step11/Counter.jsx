import { useState, useEffect} from "react";



export function Counter(){
    const[num,setNum] = useState(0);
    const[num2,setNum2] = useState(0);
    const[name,setName] = useState('');
    function addNum(){
        let count = 0;
        console.log('계산중');
        for(let i=1;i<1000000;i++){
            count += i;
        }
        console.log('계산결과는 ',count);
    }
    function Myname(e){
        setName(e.target.value);
        console.log(name);
    }
    useEffect(
        () =>{
            document.title = `총${num}`;
            console.log('effect_count =>' , num);
        },[num]
    );//useEffect(이펙트 함수,[의존성 배열])
    // 컴포넌트가 마운팅 되거나
    // 의존성 배열에 있는 변수들 중 하나라도 값이 변경 되었을 때
    // 이펙트 함수 실행

    // return 함수는 의존성 배열에 있는 값이 변경 되었을때
    // useEffect함수를 실행하기 전 실행되거나
    // 컴포넌트가 언마운트 되기 전에 실행
    
    return(
        <div>
            <input type="text" value={name} onChange={Myname}/>
            <p>{name}</p>
            <p>총 {num}/{num2}번을 클릭했습니다.</p>
            <button onClick={() =>{
                setNum(num+1);
                console.log('count =>' , num+1);
            }}>클릭1</button>
            <button onClick={() =>{
                setNum2(num2+1);
                console.log('count2 =>' , num2+1);
            }}>클릭2</button>
            <button onClick={addNum}>계산 버튼 클릭</button>
        </div>
    );
}