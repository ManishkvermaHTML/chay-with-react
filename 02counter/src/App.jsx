import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  const increment = ()=>{
    console.log("clicked", counter);
    if(counter <=20){
    // counter = counter + 1;
    
    setCounter(prevcounter=>prevcounter + 1);//inline js
    setCounter((prevcounter)=> { return(prevcounter + 1)});
    setCounter((prevcounter)=> { return(prevcounter + 1)});
    // setCounter(counter +1);
    // setCounter(counter +1);
    // setCounter(counter +1);

    console.log(" clicked after increment ", counter);
    }
  }
  const decrement = ()=>{
    console.log("counter", counter);
    if(counter>=1){
    // counter = counter - 1;
    setCounter(counter-1);
    }
  }

  return (
    <>
     <h1>Chai aur react {counter}</h1>
     <h3>counter : {counter} </h3>
     <button onClick ={increment} >Increment : {counter} </button>
     <br></br>
     <button onClick={decrement} >Decrement : {counter} </button>
     <footer> {counter} </footer>
    </>
  )
}

export default App
