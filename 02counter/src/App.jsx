import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter = 15;
  const increment = ()=>{
    console.log("clicked", counter);
    counter = counter + 1;
  }

  return (
    <>
     <h1>Chai aur react {counter}</h1>
     <h3>counter : {counter} </h3>
     <button onClick ={increment} >Increment : {counter}</button>
     <br></br>
     <button>Decrement : {counter} </button>
     <footer> {counter} </footer>
    </>
  )
}

export default App
