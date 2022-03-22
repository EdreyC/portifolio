import { useContext, useEffect, useState } from "react"
import { RepositoryContext } from "../../contexts/RepositoryContext"
import { VscGithub } from "react-icons/vsc"
import { RiLinkedinFill } from "react-icons/ri"
import { Link } from "react-router-dom";
import { ButtonLinkCircle } from '../../components/Button/index';
import { BiMoon, BiSun } from "react-icons/bi";
import Switch from 'react-switch';


export default function Home() {

    const { data, isFetching } = useContext(RepositoryContext)
    let profile = data?.find(e => e.owner.avatar_url);

    const [toggleModeSwitch, setToggleModeSwitch] = useState(
        () => localStorage.theme === "light"
    )
    const toggleModeTheme = () => {
        setToggleModeSwitch(!toggleModeSwitch)

    }

    const themes = {
        colors: {
            light: "#ffb52b",
            dark: "#312e81"
        },
        handleColor: {
            dark: "#04030f"
        }
    }
    useEffect(() => {
        localStorage.theme = toggleModeSwitch ? "light" : "dark"
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

    }, [toggleModeSwitch])


    return (
        <div>
            <div className='flex w-full justify-end items-center px-10 py-5 border border-slate-300 dark:border-transparent'>
                {/* <Switch
                    checked={toggleModeSwitch}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    checkedHandleIcon={(<div className=" w-full h-full flex items-center justify-center"><BiSun color={themes.colors.light} size={20} /></div>)}
                    uncheckedHandleIcon={(<div className=" w-full h-full flex items-center justify-center"><BiMoon color="#fff" size={20} /></div>)}
                    offHandleColor={themes.colors.dark}

                    onColor={themes.colors.light}
                    offColor={themes.handleColor.dark}

                    onChange={toggleModeTheme}
                /> */}
                <button className="dark:text-slate-50" onClick={toggleModeTheme}>Toggle</button>
            </div>

            <div className="flex justify-center items-center p-20 gap-3 flex-col ">

                {isFetching && <p>Carregando...</p>}
                <img className="rounded-full w-60" src={profile?.owner.avatar_url} alt="" />
                <h1 className="text-2xl font-black text-center text-indigo-900 dark:text-slate-200 mt-5">Bem vindo ao meu portifólio</h1>
                <span className=" text-slate-500 dark:text-slate-400 text-base text-center">Clique <Link className="text-indigo-900 dark:text-slate-200 font-bold hover:underline" to="/projects">aqui</Link> para ver os meus projetos</span>





                <div className="flex justify-center items-center flex-row p-5 w-72 min-w-max md:w-96 rounded gap-3">

                    <ButtonLinkCircle link="https://github.com/EdreyC">
                        <VscGithub size={23} />
                    </ButtonLinkCircle>


                    <ButtonLinkCircle link="https://www.linkedin.com/in/edrey-carneiro-1a9b951b8/">
                        <RiLinkedinFill size={23} />
                    </ButtonLinkCircle>

                </div>

            </div>
        </div>
    )
}