import React, {useState, useEffect,  createContext} from "react";

export const UserContext = createContext({user: null})

export default (props) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        setToken(null)
    },[])

    return (
        <UserContext.Provider value={{user, token}}>{props.children}</UserContext.Provider>
    )
}