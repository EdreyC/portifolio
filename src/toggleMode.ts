import { useEffect } from "react";

  
  export function toggleMode(toggleModeSwitch:boolean){
    
    useEffect(() => {

      let html = window.document.documentElement;

      let prevThemeMode = toggleModeSwitch ? "dark" : "light"
      html.classList.remove(prevThemeMode)
      
      let nextThemeMode = toggleModeSwitch ? "light" : "dark" 
      html.classList.add(nextThemeMode)

      localStorage.setItem("theme",nextThemeMode)

  }, [toggleModeSwitch])

  }
   