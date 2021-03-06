import { useContext, useEffect, useState } from "react"
import { RepositoryContext } from "../../contexts/RepositoryContext"
import { VscGithub } from "react-icons/vsc"
import { RiLinkedinFill } from "react-icons/ri"
import { Link } from "react-router-dom";
import { ButtonLinkCircle } from '../../components/Button/index';


export default function Home() {

    const { data, isFetching } = useContext(RepositoryContext)
    let profile = data?.find(e => e.owner.avatar_url);

    return (
  
          
            <div className="flex  justify-center items-center p-10 gap-3 flex-col  ">

                {isFetching && <p>Loading...</p>}
                <img className="rounded-full w-60" src={profile?.owner.avatar_url} alt="" />
                <h1 className="text-2xl font-extrabold text-center text-slate-800  dark:text-slate-200 mt-5">Welcome to my portifolio</h1>
                <span className=" text-slate-500 dark:text-slate-400 text-base text-center">Click <Link className="text-slate-800  dark:text-slate-200 font-bold hover:underline" to="/projects">here</Link> to see my projects</span>




                <div className="flex justify-center items-center flex-row p-5 w-72 min-w-max md:w-96 rounded gap-3">

                    <ButtonLinkCircle link="https://github.com/EdreyC">
                        <VscGithub size={23} />
                    </ButtonLinkCircle>


                    <ButtonLinkCircle link="https://www.linkedin.com/in/edrey-carneiro-1a9b951b8/">
                        <RiLinkedinFill size={23} />
                    </ButtonLinkCircle>

                </div>

            </div>

    )
}