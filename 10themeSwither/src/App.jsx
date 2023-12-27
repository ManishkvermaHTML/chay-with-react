import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './component/ThemeBtn'
import Cart from '../src/component/Cart'

function App() {
const [themeMode, setThemeMode] = useState("light")

const lightTheme = () => {
  setThemeMode("light")
}

const darkTheme = ()=>{
  setThemeMode("dark")
}

// actual them change kaise hoga
useEffect(()=>{
let cList = document.querySelector('html').classList;
cList.remove("light", "dark");
cList.add(themeMode)
},[themeMode])


  return ( 
          <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Cart/>
                    </div>
                </div>
            </div>
          </ThemeProvider>
  )
      
}

export default App
