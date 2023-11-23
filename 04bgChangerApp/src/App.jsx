import { useState } from "react"



function App() {
  const [color, setColor] = useState("#7a7a7a");

  return (
    <>
    {/* main container */}
      <div className="w-full h-screen flex justify-center flex-wrap " style={{ backgroundColor: color }}>

        {/* bottom color bar position */}
        <div className="flex flex-wrap justify-center fixed bottom-10 px-2 mx-3 bg-white rounded gap-2">
          {/* red */}
          <button className="flex flex-wrap justify-center bg-red-700 px-4 py-1 my-2 font-bold rounded-full" onClick = {()=>{setColor("red")}}>Red</button>

          {/* green  */}
          <button className="flex flex-wrap justify-center bg-green-700 px-4 py-1 my-2 font-bold rounded-full gap-1" onClick = {()=>{setColor("green")}}>Green</button>

          {/* blue  */}
          <button className="flex flex-wrap justify-center bg-blue-700 px-4 py-1 my-2 font-bold rounded-full gap-1" onClick = {()=>{setColor("blue")}} >Blue</button>

          {/* yellow  */}
          <button className="flex flex-wrap justify-center bg-yellow-700 px-4 py-1 my-2 font-bold rounded-full gap-1" onClick = {()=>{setColor("yellow")}}>yellow</button>


          {/*  magenta  */}
          <button className="flex flex-wrap justify-center px-4 py-1 my-2 font-bold rounded-full gap-1 bg-[#ff00ff]  " onClick = {()=>{setColor("magenta")}} >magenta</button>


          {/*  cyan  */}
          <button className="flex flex-wrap justify-center bg-cyan-700 px-4 py-1 my-2 font-bold rounded-full gap-1" onClick = {()=>{setColor("cyan")}} >cyan</button>

          

         {/* gray  */}
          <button className="flex flex-wrap justify-center bg-[#555] px-4 py-1 my-2 font-bold rounded-full gap-1" onClick = {()=>{setColor("gray")}} >gray</button>

          {/* pink  */}
          <button className="flex flex-wrap justify-center bg-pink-700 px-4 py-1 my-2 font-bold rounded-full gap-1" onClick = {()=>{setColor("pink")}} >pink</button>

          {/* orange  */}
          <button className="flex flex-wrap justify-center bg-orange-700 px-4 py-1 my-2 font-bold rounded-full gap-1" onClick = {()=>{setColor("orange")}} >orange</button>

        </div>
      </div>
    </>
  )
}

export default App
