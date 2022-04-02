import React,{createContext, useReducer} from "react";
import NavigationReducer from "./NavigationReducer";

const NavigationContext = createContext();

export const NavigationProvider = ({children}) => {
    const initialState = {
        showDropdown: false,
        pathName: ''
    }
    const[state, dispatch] = useReducer(NavigationReducer, initialState);


    return(
        <NavigationContext.Provider value={{...state, dispatch}}>
            {children}
        </NavigationContext.Provider>
    )
}

export default NavigationContext;