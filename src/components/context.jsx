import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({})
// export { AuthContext as default };

export function AuthContextProvider ({children}){
    const [isAuth, setIsAuth] = useState(false)
    const navigate  = useNavigate()

    function setAuthTrue() {
        setIsAuth(true)
    }

    function setAuthFalse() {
        setIsAuth(false)
    }

    function logOut() {
        console.log("Gebruiker is uitgelogd.");
        setIsAuth(false);
        navigate('/')
    }

    function logIn(){
        console.log ("Gebruiker is ingelogd.")
        setIsAuth(true);
        navigate('/profile')

    }

    const data = {
        isAuth: isAuth,
        logOut: logOut,
        logIn: logIn,
    }

return(
    <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
)


}


// const [isAuth, toggleIsAuth] = useState(false);

