import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
   let myObj = {
    "user1": "humesh",
    "user2": "laxman" 
   }
  return (
    <>
       <h1 className='bg-green-900 font-bolt text-white p-4 rounded'>tailwind test</h1>
       <Card userName="manish"/>
       <Card />
    </>
  )
}

export default App
