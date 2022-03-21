// powershell에 작성 npm install bootstrap후
import 'bootstrap/dist/css/bootstrap.min.css'; // 리액트에 부트스트랩연결시 
import React from 'react';
import { Route, Routes} from 'react-router-dom';  //라우터
import { Main, Login, Regester, Info,Dos } from './pages';
import Header2 from './pages/Header2';
import {Button} from "react-bootstrap"; //부트스트랩중 버튼  연결

//console.log(React.version);     //리엑트버전확인


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Header2></Header2>
        <Routes>
            <Route exact ={true} path="/" element={<Main/>}/>
            <Route path="/Dos" element={<Dos/>} />
            <Route path="/Regester" element={<Regester/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/info" element={<Info/>} />
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
