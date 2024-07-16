import ReactDOM from 'react-dom/client';
import {App} from './App';

// 람다식
// const App = () =>{
//   return (
//     <p>안녕하세요</p>
//   );
// }

// // 함수방식
// // 태그 하나로 감싸야 함
// function App(){
//   const divStyle = {
//     border: '1px solid blue'
//   }
//   return (
//     <div style = {divStyle}>
//       <p>안녕하세요</p>
//       <p>안녕</p>
//     </div>
//   );
// }

// ReactDom.render(<App/>,document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App/>
  </>
);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();
