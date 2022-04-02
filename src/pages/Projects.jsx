import {useCallback, useContext, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import NavigationContext from "../context/NavigationContext/NavigationContext";
import {socialsData} from "../data/Home/socialsData";
import {BsArrowUpRight} from "react-icons/bs";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {projectsData} from "../data/Projects/projectsData";

const Projects = () => {
    const location = useLocation().pathname
    const{pathName, dispatch} = useContext(NavigationContext);

    useEffect(()=>{
        dispatch({
            type:"CHECK_PATHNAME",
            payload: location
        })
    },[dispatch, location])
    return(
        <>
            <ul className="after:content[''] after:mx-auto after:block after:w-px after:h-28 after:bg-white fixed bottom-0 ml-px text-center hidden md:block">
                {socialsData.map(social => (
                    <li key={social.id} className="hover:-translate-y-2 mb-5 hover:transition transition duration-700 ease-in-out delay-150 font-semibold">
                        <Link className="px-3 inline-block block hover-secondary-text-color transition duration-500 ease-in-out"
                          to={social.url}>
                        {social.icon}{social.name} &nbsp;
                        <BsArrowUpRight className="inline"/>
                        </Link>
                    </li>
                ))
                }
            </ul>
            <h1 className="font-semibold text-2xl  text-center secondary-text-color mb-5">{pathName}</h1>
              <h1 className="text-5xl font-extrabold text-center">
                  <span className="stand-out-color text-xl inline-block mr-3">02.</span>
                  Some Projects I've Worked On
              </h1>
            <div className="ml-5 md:ml-28">
                    <p className="text-2xl font-semibold mt-9 after:w-20 after:block after:h-0.5 after:bg-white hover:after:w-100 font-family-epilogue">
                        FEATURED PROJECTS
                    </p>
            </div>

            <div className="flex flex-wrap justify-center px-5 md:px-32 mt-5">
                {projectsData.map(({id,title,description,techUsed,gitHubLink,liveLink})=>{
                    return (
                        <div key={id} className="w-full justify-around md:w-1/3 hover:scale-110 transition duration-200 h-1/2 p-3 mx-1 rounded my-1.5 text-left flex flex-col bg-secondary-text-color main-text-color">
                            <h1 className="font-semibold flex justify-end font-family-epilogue text-xl">
                                {gitHubLink && <a href={gitHubLink} className='hover-stand-out-color'><FiGithub/></a>}
                                &nbsp;
                                {liveLink && <a href={liveLink} className="hover-stand-out-color"><FiExternalLink/></a>}
                            </h1>
                            <h1 className="font-semibold font-family-epilogue text-xl">{title}</h1>
                            <p className="text-sm">{description}</p>
                            <p className="text-sm font-mono">{techUsed}</p>
                        </div>
                    )
                })}
            </div>


        </>
    )
}

export default Projects;
