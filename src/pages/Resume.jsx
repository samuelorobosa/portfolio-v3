import {Link, useLocation} from "react-router-dom";
import {useContext, useEffect} from "react";
import NavigationContext from "../context/NavigationContext/NavigationContext";
import { ImDownload } from "react-icons/im";
import './styles.scss'

function Resume (){
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
           <h1 className="font-semibold text-2xl  text-center secondary-text-color mb-5">{pathName}</h1>
           <h1 className="text-5xl font-extrabold text-center">
               <span className="stand-out-color text-xl inline-block mr-3">03.</span>
              Take A Peek At My Resume
           </h1>

           <div className="resume-container p-5 mt-10  w-11/12 md:w-1/2 mx-auto flex flex-col bg-main-color rounded">
               <div className="top_row flex justify-between items-stretch">
                   <h1 className="text-2xl font-semibold font-family-epilogue">Samuel Amagbakhen</h1>
                   <Link to={'/'} className="stand-out-color flex items-center"> Download &nbsp;<ImDownload /> </Link>
               </div>
               <h2 className="text-base stand-out-color">Frontend Developer</h2>
               <div className="flex my-7">
                   <p>
                       A creative, ambitious, and self-motivated frontend developer with a passion for creating things that live and breathe on the web.
                       I can work with popular front-end technologies, utilizing and these tools to deliver a pixel-perfect design and user-centered implementation with proper documentation of my implementation.
                   </p>
               </div>
               <div className="divider">
                   <p className="font-bold secondary-text-color mr-1">Core Technologies</p>
                   <span/>
               </div>
               <div className="flex my-1">
                   <p>
                       HTML/CSS/SCSS, JavaScript(ES6+)
                   </p>
               </div>
               <div className="divider">
                   <p className="font-bold secondary-text-color mr-1">Libraries and Frameworks</p>
                   <span/>
               </div>
               <div className="flex my-1">
                   <p>
                       Bootstrap, ReactJS, jQuery, TailwindCSS, Laravel Blade Templates.
                   </p>
               </div>
               <div className="divider">
                   <p className="font-bold secondary-text-color mr-1">Tool and Platforms</p>
                   <span/>
               </div>
               <div className="flex my-1">
                   <p>
                       Git/GitHub/BitBucket, Jira, WordPress, Vercel, Netlify, Confluence.
                   </p>
               </div>

               <div className="divider">
                   <p className="font-bold secondary-text-color mr-1">Design</p>
                   <span/>
               </div>
               <div className="flex my-1">
                   <p>
                       Figma, InVision
                   </p>
               </div>
               <div className="divider">
                   <p className="font-bold secondary-text-color mr-1">Work Experience</p>
                   <span/>
               </div>
               <div className="experience_wrapper">
                   <div className="experience mb-5">
                       <p className="title">
                           <span className="font-bold">Frontend Developer</span>
                           <span className="font-semibold">@</span>
                           <span className="font-semibold stand-out-color">Edo State Skills Development Agency</span>
                           <span className="block font-mono mt-px">
                                MAY 2021 - JULY 2021
                           </span>
                       </p>
                       <p className="description mt-3">
                           <p className="work flex my-1">
                               <span>■</span>
                               <span className="w-1/12"/>
                               Implemented component-based coding pattern using ReactJs in order
                               to improve page speed and load time.
                           </p>
                           <p className="work flex my-1">
                               <span>■</span>
                               <span className="w-1/12"/>
                               Designed and implemented promotional landing pages to boost
                               marketing for the government programs ensuring a wide reach.
                           </p>
                           <p className="work flex my-1">
                               <span>■</span>
                               <span className="w-1/12"/>
                               Designed and implemented promotional landing pages to boost
                               marketing for the government programs ensuring a wide reach.
                           </p>
                       </p>
                   </div>
                   <div className="experience mb-5">
                       <p className="title">
                           <span className="font-bold">Frontend Developer[Intern]</span>
                           <span className="font-semibold">@</span>
                           <span className="font-semibold stand-out-color">HNG Internship</span>
                           <span className="block font-mono mt-px">
                                MAY 2020 - AUGUST 2020
                           </span>
                       </p>
                       <p className="description mt-3">
                           <p className="work flex my-1">
                               <span>■</span>
                               <span className="w-1/12"/>
                               Collaborated closely with the Front End team to deliver pixel-perfect
                               landing pages from Figma Designs which were compiled and sold as
                               themes on ThemeForest.
                           </p>
                           <p className="work flex my-1">
                               <span>■</span>
                               <span className="w-1/12"/>
                               Developed and maintained websites utilizing HTML5, CSS 3, Bootstrap
                               4, JavaScript, jQuery, AJAX, and PHP to learn how to send and receive data between client and server.
                           </p>
                       </p>
                   </div>
               </div>
               <div className="divider">
                   <p className="font-bold secondary-text-color mr-1">Projects</p>
                   <span/>
               </div>
               <p className="work flex my-1">
                   <span>■</span>
                   <span className="w-1/12"/>
                   <p> Links to my works can be found on <a className="stand-out-color hover-secondary-text-color" href="https://samuelorobosa.me/projects">samuelorobosa.me/projects </a>
                       and more details can be provided upon request.
                   </p>

               </p>
           </div>
       </>
    )
}

export default Resume;