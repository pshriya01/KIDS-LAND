import { children, createContext } from "react";
import { useState } from "react";

const obj = {
    isAuth: false,
    user: ""
}

export const AuthContext = createContext(obj)

function AuthContextProvider({ children }) {


    const [isAuth, setAuth] = useState(false)
    const [user,setUser]=useState("")


console.log(isAuth)
    const loginUser = (user) => {
        setAuth(true)
        setUser(user)
    }
    const logoutUser = () => {
        setAuth(false)
    }

    return (
        <AuthContext.Provider value={{ loginUser, logoutUser, isAuth,user }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
