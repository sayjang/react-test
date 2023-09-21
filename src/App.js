/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //var [a,b] = [10,100];
  let [글제목,글제목변경] = useState('발리를 갈까'); //[a,b]
  let [글제목2,글제목변경2] = useState('발리를 갈까2'); //[a,b]
  let [글제목3,글제목변경3] = useState(['발리를 갈까3','발리를 갈까2']); //[a,b]

  let [따봉, 따봉변경] = useState(0);
  
  //console.log(글제목3[0]);
  let posts = 'test';

  function func(){
    return 100;
  }

  function 제목바꾸기(){
    var newarray = [...글제목3]; 
    newarray[0]='호주를 갈까3';
    글제목변경3(newarray);
  }

  function 순서바꾸기(){
    var newarray = [...글제목3]; 
    newarray = newarray.sort((a,b)=> a-b);
    글제목변경3(newarray);
  }

  console.log(순서바꾸기);
  return (
    
    <div className="App">
      <div className="black-nav"> 
        <div style={{color:'blue', fontSize : '30px'}}>개발 블로그</div>
      </div>
      {/* <h4>{posts}</h4>
      <h3>{func()}</h3>
      <img src={logo}></img> */}
      <button onClick ={제목바꾸기}>버튼</button>
      <button onClick ={순서바꾸기}>버튼2</button>
      <div className='list'>
        {/* <h3>{posts}</h3> */}
        <h3>{글제목3[0]} <span onClick={ ()=>{ 따봉변경(따봉+1)} } >👍</span> {따봉} </h3>
        <p>2월12일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        {/* <h3>{posts}</h3> */}
        <h3>{글제목3[1]}</h3>
        <p>2월12일 발행</p>
        <hr/>
      </div>
      <Modal/>
    

    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
