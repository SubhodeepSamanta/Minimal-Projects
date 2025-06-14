import React, { useContext } from 'react'
import { userContext } from './context/userContext'

const ChildC = () => {
    const user= useContext(userContext);
  return (
    <div>ChildC {user.name}</div>
  )
}

export default ChildC