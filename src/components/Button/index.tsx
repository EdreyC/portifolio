import { BiFolder } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ReactNode } from 'react';

type ButtonNavigateProps = {
    children: ReactNode;
    to:string;
}
type ButtonLinkProps = {
    children: ReactNode;
    link:string;
}


export function ButtonNavigate(props: ButtonNavigateProps) {

    return (
        <Link to={props.to}>
             <div className="flex items-center flex-row bg-indigo-800 text-slate-50 gap-3 p-3 rounded">
               {props.children}
            </div>
 
        </Link>
       
    )
}
export function ButtonNavigateCircle(props: ButtonNavigateProps) {

    return (
        <Link to={props.to}>
             <div className="flex items-center flex-row bg-indigo-800 text-slate-50 gap-3 p-3 rounded-full">
               {props.children}
            </div>
 
        </Link>
       
    )
}
export function ButtonNavigateOutline(props: ButtonNavigateProps) {

    return (
        <Link to={props.to}>
             <div className="flex items-center flex-row  text-slate-800  gap-3 p-3 rounded bg-none border-2 border-indigo-800">
               {props.children}
            </div>
 
        </Link>
       
    )
}
export function ButtonLink(props: ButtonLinkProps) {

    return (
        <a href={props.link}>
             <div className="flex items-center flex-row bg-indigo-800 text-slate-50 gap-3 p-3 rounded">
               {props.children}
            </div>
 
        </a>
       
    )
}
export function ButtonLinkCircle(props: ButtonLinkProps) {

    return (
        <a href={props.link}>
             <div className="flex items-center flex-row bg-none text-slate-800  border-slate-200 border dark:bg-indigo-80 dark:border-none dark:text-slate-50 gap-3 p-2 rounded-full">
               {props.children}
            </div>
 
        </a>
       
    )
}