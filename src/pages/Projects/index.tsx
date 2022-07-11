
import { BiLinkAlt } from "react-icons/bi"
import { useContext } from "react";
import { RepositoryContext } from './../../contexts/RepositoryContext';


export default function Projects() {

    const { data, isFetching } = useContext(RepositoryContext)

    return (
        <div className="flex items-center justify-center flex-col gap-3 md:gap-5 py-8 px-5 dark:text-slate-200 ">

                <h1 className="text-4xl font-extrabold text-center ">Projects</h1>
                <ul className=" justify-center items-center grid grid-rows-3 grid-cols-1 xl:grid-cols-2 md:grid-cols-3 sm:grid-cols-2">
                {isFetching && <p>Loading...</p>}
                {
                    data?.map(repo => {
                        let reposName = repo.name[0].toUpperCase() + repo.name.slice(1)
                        if (repo.description === null) {
                            repo.description = "Sem descrição"
                        }
                        return (
                            <li className="p-4 flex flex-col" key={repo.name}>
                                <a href={repo.html_url} className=" font-bold gap-3 pl-2 pr-3 py-1 flex items-center text-xl 
                                
                                hover:bg-indigo-700 rounded hover:underline hover:text-white">
                                    <BiLinkAlt className="text-2xl" />
                                    {reposName}
                                </a>
                                <p className=" p-3 text-slate-800 dark:text-slate-400 text-base">{repo.description}</p>
                            </li>

                        )
                    })}
            </ul>
        </div>
    )
}