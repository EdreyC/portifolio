import { Children, ReactChildren, useState, ReactNode, useEffect } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
import Switch  from 'react-switch';
import { toggleMode } from '../../toggleMode';


export default function ToggleSwitch(){
    
    const [toggleModeSwitch, setToggleModeSwitch] = useState(
        ()=>localStorage.theme === "light"
    )
    const toggleModeTheme = () => {
        setToggleModeSwitch(!toggleModeSwitch)
       
    }

    const themes = {
        colors:{
            light:"#ffb52b",
            dark:"#312e81"
        },
        handleColor:{
            dark:"#04030f"
        }
    }
    useEffect(()=>{
        localStorage.theme = toggleModeSwitch?  "light": "dark"
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        
    },[toggleModeSwitch])
    
    return(
  
        <div  className='flex w-full justify-end items-center px-10 py-5 border border-slate-300 dark:border-none'>
        <Switch 
                checked={toggleModeSwitch}
                checkedIcon={false}
                uncheckedIcon={false}
                checkedHandleIcon={(<div className=" w-full h-full flex items-center justify-center"><BiSun color={themes.colors.light} size={20}/></div>)}
                uncheckedHandleIcon={(<div className=" w-full h-full flex items-center justify-center"><BiMoon color="white" size={20}/></div>)}
                offHandleColor={themes.colors.dark}

                onColor={themes.colors.light}
                offColor={themes.handleColor.dark}

                onChange={toggleModeTheme}
        />
       </div>
    
        
    )
}