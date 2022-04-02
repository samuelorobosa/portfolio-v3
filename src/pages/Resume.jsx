import {useLocation} from "react-router-dom";
import {useContext, useEffect} from "react";
import NavigationContext from "../context/NavigationContext/NavigationContext";

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
        <h1>Resum</h1>
    )
}

export default Resume;