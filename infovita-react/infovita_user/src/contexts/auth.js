import React, { createContext, useState } from "react";
import { googleLogout } from '@react-oauth/google';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    const signin = (name, email, picture) => {
        setUser({name, email, picture});
        console.log("Passou no Signin");
        return;
    }

    const signout = () => {
        setUser(null);
        console.log("Passou no Signout");
        googleLogout();
        return;
    }

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signout, signin }}
        >
            {children}
        </AuthContext.Provider>
    );
}