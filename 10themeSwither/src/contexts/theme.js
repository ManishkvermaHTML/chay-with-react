import {createContext, useContext} from 'react'

export const ThemeContext = createContext({

    themeMode : "true",
    darkTheme : ()=>{},
    lightTheme : ()=>{},
});

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}

// export default useTheme = ()=>{
//     return useContext(ThemeContext)
// }