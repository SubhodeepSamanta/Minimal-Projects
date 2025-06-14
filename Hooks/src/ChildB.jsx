import React, { useContext } from 'react'
import { userContext } from './context/userContext'
import ChildC from './ChildC';

const ChildB = () => {
    const user= useContext(userContext);
  return (
    <div>ChildB {user.name}{user.city} <ChildC/></div>
  )
}

export default ChildB