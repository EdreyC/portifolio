import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./src/pages/home"
import Projects from './src/pages/Projects/index';
export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/projects" element={<Projects></Projects>}></Route>   
        </Routes>
        
    )
}