import React from 'react'
import ChildB from './ChildB'
import { userContext } from './context/userContext'

const ChildA = () => {
    const user={
        name:"Subhodeep",
        city:"Delhi"
    }
  return (
    <userContext.Provider value={user}>
    <ChildB/>
    </userContext.Provider>
  )
}

export default ChildA