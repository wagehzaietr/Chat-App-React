import React, {  useState } from 'react'
import {signOut} from 'firebase/auth'
import { auth } from '../config/firsebase.config';


const Logout = () => {
  const [loading,setloading] = useState(false);

  const logout = async () => {
   await signOut(auth);
  }

  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout