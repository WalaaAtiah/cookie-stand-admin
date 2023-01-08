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
        const url = "http://localhost:8000/api/token/"; // the server url
        try{

            const res = await axios.post(url, userInfo);
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