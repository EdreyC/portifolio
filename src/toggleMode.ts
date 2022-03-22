import { useEffect } from "react";

  
export function toggleMode(toggleModeSwitch:boolean){
    
//     useEffect(() => {

//       let html = window.document.documentElement;

//       html.classList.remove(prevThemeMode)
      
//       let nextThemeMode = toggleModeSwitch ? "light" : "dark" 
//       html.classList.add(nextThemeMode)

//       localStorage.setItem("theme",nextThemeMode)

//   }, [toggleModeSwitch])

        localStorage.theme = toggleModeSwitch ? "dark" : "light"

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
  

}
   