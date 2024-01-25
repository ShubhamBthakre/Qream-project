import { createContext ,useContext} from "react";

const businessContext=createContext({
    activeNavbarTitle:"Dashboard",
    setActiveNavbarTitle:(title)=>{}
})


export const BusinessContextProvider=businessContext.Provider;

export const useBusinessContext=()=>{
    return useContext(businessContext)
}

