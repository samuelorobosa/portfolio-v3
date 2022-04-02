import {createContext, useReducer} from "react";
import NavigationReducer from "./NavigationReducer";

const NavigationContext = createContext();

export const NavigationProvider = ({children}) => {
    const initialState = {
        showDropdown: false,
        pathName: ''
    }
    const[state, dispatch] = useReducer(NavigationReducer, initialState);

    const checkLocation = (payload) =>{
        dispatch({
            type:"CHECK_PATHNAME",
            payload
        })
    }

    return(
        <NavigationContext.Provider value={{...state, dispatch, checkLocation}}>
            {children}
        </NavigationContext.Provider>
    )
}

export default NavigationContext;