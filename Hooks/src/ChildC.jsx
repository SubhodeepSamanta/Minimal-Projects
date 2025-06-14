import React, { useContext } from 'react'
import { userContext } from './context/userContext'
import { useForm } from './useForm';

const ChildC = () => {
    const user={
        name:"",
        email:"",
        password:""
    }
    const {value,handleChange,resetChange}= useForm(user);
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(value);
    }
  return (
    <div>
        <form action="submit" onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" value={value.name} name='name' onChange={handleChange}/>
            <input type="text" value={value.email} name='email' onChange={handleChange}/>
            <input type="password" value={value.password} name='password' onChange={handleChange}/>
            <button type='button' onClick={resetChange}>Reset</button>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ChildC