import {Link, useLocation} from "react-router-dom";
import {useContext, useEffect} from "react";
import NavigationContext from "../context/NavigationContext/NavigationContext";
import { ImDownload } from "react-icons/im";
import './styles.scss'
import {resumeData} from "../data/Resume/resumeData";
import { v4 as uuidv4 } from 'uuid';
import Pdf from "../assets/resume/Resume.pdf";

function Resume (){
    const location = useLocation().pathname
    const{pathName, dispatch} = useContext(NavigationContext);
    const{name, surname, role,description,toolsData,experience} = resumeData;

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
                   <h1 className="text-2xl font-semibold font-family-epilogue">{`${name} ${surname}`}</h1>
                   <a href={Pdf} target="_blank" className="stand-out-color flex items-center"> Download &nbsp;<ImDownload /> </a>
               </div>
               <h2 className="text-base stand-out-color">{role}</h2>
               <div className="flex my-7">
                   <p>{description}</p>
               </div>
               {
                   toolsData.map(({title, data}, index)=>{
                       return(
                           <div key={index}>
                               <div className="divider">
                                   <div className="font-bold secondary-text-color mr-1">{title}</div>
                                   <span/>
                               </div>
                               <div className="flex my-1">
                                   <div>
                                       {data.map((item, index,arr)=>{
                                           return(
                                               item === arr[arr.length-1] ? `${item}.` : `${item}, `
                                           )
                                       })}
                                   </div>
                               </div>
                           </div>

                       )
                   })
               }
               <div className="divider">
                   <p className="font-bold secondary-text-color mr-1">Work Experience</p>
                   <span/>
               </div>
               <div className="experience_wrapper">
                   {experience.map(({jobTitle, company, startDate, endDate, workDone}, index)=>{
                       return(
                           <div className="experience mb-5" key={uuidv4()}>
                               <div className="title">
                                   <span className="font-bold">{jobTitle}</span>
                                   <span className="font-semibold">@</span>
                                   <span className="font-semibold stand-out-color">{company}</span>
                                   <span className="block font-mono mt-px">{startDate.toUpperCase()} - {endDate ? endDate.toUpperCase():"Present".toUpperCase()}</span>
                               </div>
                               <div className="description mt-3">
                                   {workDone.map((item,index)=>{
                                      return(
                                          <div key={index} className="work flex my-1">
                                           <span>■</span>
                                           <span className="w-1/12"/>
                                              {item}.
                                       </div>
                                       )
                                   })}

                               </div>
                           </div>
                       )
                   })}
               </div>
               <div className="divider">
                   <p className="font-bold secondary-text-color mr-1">Projects</p>
                   <span/>
               </div>
               <p className="work flex my-1">
                   <span>■</span>
                   <span className="w-1/12"/>
                   <span>
                       Links to my works can be found on <a className="stand-out-color hover-secondary-text-color" href="https://samuelorobosa.me/projects">samuelorobosa.me/projects </a>
                       and more details can be provided upon request.
                   </span>

               </p>
           </div>
       </>
    )
}

export default Resume;