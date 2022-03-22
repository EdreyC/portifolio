import { Children, ReactChildren, useState, ReactNode, useEffect } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
import {MdDarkMode,MdLightMode} from "react-icons/md"
import { toggleMode } from '../../toggleMode';


export default function ToggleSwitch(){
    
    const [toggleModeSwitch, setToggleModeSwitch] = useState(
        () => localStorage.theme === "light"
    )
    const toggleModeTheme = () => {
        setToggleModeSwitch(!toggleModeSwitch)

    }

    const themes = {
        colors: {
            light: "#ffb52b",
            dark: "#766eff"
        },
       
    }
    useEffect(() => {
        localStorage.theme = toggleModeSwitch ? "light" : "dark"
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

    }, [toggleModeSwitch])
    return(
        <div className='flex w-full sticky top-0 bg-white justify-end items-center  px-10 py-5 border border-slate-300 dark:border-transparent dark:bg-slate-900'>
           
                <button className="flex border-2 transition-all ease-in-out delay-50  
                text-slate-500
                border-slate-400 rounded p-2 items-center gap-2 focus:border-blue-300 
                dark:focus:border-blue-500
                dark:text-slate-50 dark:border-slate-600 dark:bg-transparent" onClick={toggleModeTheme}>
                {
                toggleModeSwitch? (<MdDarkMode size={25}/>) : (<MdLightMode size={25} color={themes.colors.light}/>)
                }
                    {/* {toggleModeSwitch? "Dark" :"Light"}  */}
               
                </button>
               
        </div>

       
    )
}