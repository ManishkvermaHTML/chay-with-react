import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContex';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext)

const submithandler = (mj)=>{
    mj.preventDefault();
    setUser({userName, password});
}

  return (
    <div>
        <h1>Login : </h1>
        <input 
        type="text"
        placeholder='username'
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
         
        />
        <input 
        type="text"
        placeholder='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />  
        <button onClick={submithandler}> Submit </button>
    </div>
  )
}

export default Login