import {useState, useContext, createContext} from "react";

// 1. Create context
const ShowContext = createContext();

// 2. Create Provider
export const ShowProvider = ({children}) => {
    const [showData, setShowData] = useState([]);

    return (
        <ShowContext.Provider value={{showData, setShowData}}>
            {children}
        </ShowContext.Provider>
    )
}

// 3. Create a custom hook to consume the context (state/data)
export const useShow = () => useContext(ShowContext)