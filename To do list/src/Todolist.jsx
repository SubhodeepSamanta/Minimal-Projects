import React from 'react'
import { useState } from 'react'

const Todolist = () => {
    const [task,setTask]= useState([]);
    const [newTask,setNewTask]= useState("");
    function handleNewTask(e){
        setNewTask(e.target.value);
    }
    function handleAdd(){
        const tasknew= newTask;
        setTask(t=>[...t,tasknew]);
        setNewTask("");
    }
    function handleDelete(index){
        setTask(t=> t.filter((_,i)=> i!==index));
    }
    function handleUp(index){
        const updatedTask=[...task];
        if(index>0){
        [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
        setTask(updatedTask);
        }
    }
    function handleDown(index){
        const updatedTask=[...task];
        if(index<task.length-1){
        [updatedTask[index+1],updatedTask[index]]=[updatedTask[index],updatedTask[index+1]];
        setTask(updatedTask);
        }
    }
  return (
    <div>
        <h1>To Do List</h1>
        <input type="text" placeholder='Enter your task... ' value={newTask} onChange={(e)=>handleNewTask(e)} />
        <button onClick={handleAdd}>Add</button>
        <div><ol>
            {task.map((element,index)=>{
                return <>
                <li key={index}>{element}</li> 
                <button onClick={()=>handleDelete(index)}>Delete</button>
                <button onClick={()=>handleUp(index)}>UP</button>
                <button onClick={()=>handleDown(index)}>Down</button>
                </>
})}</ol>
        </div>
    </div>
  )
}

export default Todolist