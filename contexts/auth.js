import React, { createContext, useState } from "react";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function signIn(email, password) {
        if (email !== '' && password !== '') {
            setUser({ email: email, status: "ativo" })
            setIsLoggedIn(true);
        }
    }

    function authGoogle(email) {
        if (email !== '') {
            setUser({ email: email, status: "ativo" })
            setIsLoggedIn(true);
        }
    }

    function logout() {
        GoogleSignin.isSignedIn()
        .then(data => {
            if (data) {
                GoogleSignin.signOut()
                setIsLoggedIn(false);
            }
        })
        .catch(err => {})
    }

    return (
        <AuthContext.Provider value={{ signIn, user, isLoggedIn, authGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;