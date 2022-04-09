import {createContext, useReducer} from "react";
import BlogReducer from "./BlogReducer";


const BlogContext = createContext();

export const BlogContextProvider = ({children}) =>{
    const initialState = {
        blogs: [],
        currentArticle: null,
        loading: true,
        error: null
    }
    const [state, dispatch] = useReducer(BlogReducer, initialState);


    return(
        <BlogContext.Provider value={{...state, dispatch}}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext