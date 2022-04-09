import {useContext, useEffect} from "react";
import NavigationContext from "../context/NavigationContext/NavigationContext";
import SocialSide from "../components/SocialSide/SocialSide";
import {useLocation} from "react-router-dom";
import BlogData from "../data/Blog/BlogData";


const Blog = () => {
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
                <span className="stand-out-color text-base inline-block mr-3">04.</span>
                My Articles
            </h1>

                <BlogData/>
        </div>
    )
}

export default Blog;
