import {useContext, useEffect} from "react";
import NavigationContext from "../context/NavigationContext/NavigationContext";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {projectsData} from "../data/Projects/projectsData";
import SocialSide from "../components/SocialSide/SocialSide";
import {useLocation} from "react-router-dom";

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
        <div className="flex flex-col projectContainer">
            <SocialSide/>

            <h1 className="font-semibold text-2xl  text-center secondary-text-color mb-5">{pathName}</h1>
              <h1 className="text-3xl font-extrabold text-center">
                  <span className="stand-out-color text-base inline-block mr-3">02.</span>
                  Some Projects I've Worked On
              </h1>
            <div className="ml-5 md:ml-28">
                    <p className="text-2xl font-semibold mt-9 after:w-20 after:block after:h-0.5 after:bg-white hover:after:w-100 font-family-epilogue">
                        FEATURED PROJECTS
                    </p>
            </div>

            <div className="flex flex-wrap justify-center px-5 md:px-16 mt-5">
                {projectsData.map(({id,title,description,techUsed,gitHubLink,liveLink})=>{
                    return (
                        <div key={id} className="flex flex-col justify-between w-80 md:w-1/3 projectDiv transition duration-200 p-4 mx-1 rounded my-3.5 text-left bg-secondary-text-color main-text-color">
                            <h1 className="font-semibold flex duration-500 justify-end font-family-epilogue text-xl">
                                {gitHubLink && <a target="_blank" rel="noreferrer" href={gitHubLink} className='transition-all hover-stand-out-color mx-2'><FiGithub/></a>}
                                &nbsp;
                                {liveLink && <a target="_blank" rel="noreferrer" href={liveLink} className="transition-all duration-500 hover-stand-out-color"><FiExternalLink/></a>}
                            </h1>
                            <h1 className="font-semibold font-family-epilogue text-xl">{title}</h1>
                            <p className="text-sm md:mb-24">{description}</p>
                            <p className="text-sm font-mono">{techUsed}</p>
                        </div>
                    )
                })}
            </div>



        </div>
    )
}

export default Projects;
