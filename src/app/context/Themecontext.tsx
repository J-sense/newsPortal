'use client'
import { createContext, useEffect, useState } from "react";
interface ThemeContexttype {
    isdark: Boolean,
    toggletheme:()=> void
}
export const ThemeContext = createContext<ThemeContexttype | undefined>(undefined)
export const ThemeProvider =({children}: {children: React.ReactNode})=>{
    const [isdark,setIsdark] = useState(false)
    const toggletheme =()=>{
        setIsdark(!isdark)
    }
    useEffect(()=>{
        if(isdark){
            document.body.classList.add("dark")
        }
        else{
            document.body.classList.remove("dark")
        }
    },[isdark])
return(
    <ThemeContext.Provider value={{isdark,toggletheme}}>
         {children}
    </ThemeContext.Provider>
)
}