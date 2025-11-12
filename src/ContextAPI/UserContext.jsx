import {createContext, useState} from "react";

export let UserContext=createContext();

function UserProvider(props){
    let[name, setname]=useState(null)
    return(
        <UserContext.Provider value={{name, setname}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider