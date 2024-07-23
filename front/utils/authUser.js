import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { RouterProvider, useNavigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { router } from "./router"

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

const AuthUser = () => {
    // rajouter les autres clés quand ca fonctionnera deja avec ça
    const [user, setUser] = useState(() => {
        // on récupère l'utilisateur dans le local storage
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : { name: "", isAuthenticated: false, token: "" };
    });

    // gestion de la tentative de connexion
    const loginUser = (pseudo, token) => {
        console.log("tentative de connexion de")
        console.log(pseudo)
        setUser({ name: pseudo, isAuthenticated: true, token: token });
    };

    // gestion de la deconnexion
    const logout = () => {
        setUser({ name: "", isAuthenticated: false })
        // on vide le localStorage
        localStorage.setItem("user", { name: "", isAuthenticated: false, token: "" })
    };

    // on met à jour le local storage à chaque changement du state de l'utilisateur
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, loginUser, logout, AuthData }}>
            <>
                <RouterProvider router={router} />
            </>
        </AuthContext.Provider>
    )
}

export default AuthUser;