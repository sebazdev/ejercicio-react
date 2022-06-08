import { useState, createContext, useContext } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUSer] = useState(null)
    console.log(user)
    const login = (userData) => {
        setUSer({
            user: userData.username
        })
    }

    const logout = () => {
        setUSer(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout}}>
            { children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}