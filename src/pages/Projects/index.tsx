import { useQuery } from "react-query";
import axios from 'axios';
import {BiLinkAlt} from "react-icons/bi"
import { useContext } from "react";
import { RepositoryContext } from './../../contexts/RepositoryContext';


export default function Projects() {
    
    const {data,isFetching} = useContext(RepositoryContext)
   
    return (
        <div className="flex justify-center p-5 md:p-20">
            <ul  className=" columns-1 gap-10  md:columns-2 sm:columns-1">
                {isFetching && <p>Carregando...</p>}
                {
                    data?.map(repo => {
                        let reposName =  repo.name[0].toUpperCase() + repo.name.slice(1)
                        if(repo.description === null){
                            repo.description = "Sem descrição"
                        }
                        return (
                            <li className="p-4 flex  flex-col"key={repo.name}>
                                <div className="flex items-center ">
                                <BiLinkAlt className="text-2xl md:text-2xl"/>
                                <a className="font-bold gap-3 pl-2 pr-3 py-1 flex items-center text-xl  md:w-max text-2xl hover:bg-indigo-700 rounded hover:underline hover:text-white" href={repo.html_url}>{reposName}</a>
                                </div>
                               
                                <p className=" p-3 text-xl">{repo.description}</p>
                            </li>

                        ) 
                    })}
            </ul>
        </div>
    )
}