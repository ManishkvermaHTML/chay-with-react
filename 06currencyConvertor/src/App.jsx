import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
     <> 
     <h1 className='text-3xl text-semibold text-slate-700 bg-purple-400 p-4 mb-2 text-center'>currency convertor</h1>
     <p>with chai</p>
     </>
  )
}

export default App
