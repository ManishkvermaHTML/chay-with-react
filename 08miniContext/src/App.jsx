import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import UserProfile from './components/UserProfile'
import UserContextProvider from './context/UserContextProvider'
function App() {
   
  return (
    <UserContextProvider>
    <h1>hellow everyone</h1>
    <Login/>
    <UserProfile />
    </UserContextProvider>
  )
}

export default App
