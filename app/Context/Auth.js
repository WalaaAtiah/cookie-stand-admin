import { createContext, useState } from "react"
import axios from "axios";
// 1.1 create the context
export const AuthContext = createContext();

// 1.2 create the context wrapper (provider)
export  function AuthWrapper({children}){

    const [globalState, SetGlobalState] = useState({
        tokens : null,
        login,
    })

    async function login(userInfo) {
        // end a request to the server 
        console.log(1,userInfo)
        const url = "https://cookie-w-a.herokuapp.com/api/token/"; // the server url
        try{

            const res = await axios.post(url, userInfo,{withCredentials:true});
            console.log(2,res.data)
            SetGlobalState({
                tokens : res.data,
                login,
            })
        }catch {
            console.log("error")
        }

    }

    return(
        <AuthContext.Provider value={globalState}>
            {children}
        </AuthContext.Provider>
    )

}