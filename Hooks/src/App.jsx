import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [time,setTime]=useState(0);
  const [text,setText]= useState("");
  const [value,setValue]= useState("");
  const timeRef= useRef(null);

  useEffect(()=>{
    const intervalId= setInterval(()=>{
      setValue(text);
    },500) 
    return ()=> clearInterval(intervalId);
  },[text]);

  const handleStart= ()=>{
    if(!timeRef.current){
    timeRef.current= setInterval(()=>{
      setTime((c)=>c+1);
    },1000);
  }
  }
  const handleStop= ()=>{
    if(timeRef.current){
    clearInterval(timeRef.current);
    timeRef.current=null;
  }
  }
  return (
    <>
    <div>{time}</div>
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>

    <div>{value}</div>
    <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
    </>
  )
}

export default App
