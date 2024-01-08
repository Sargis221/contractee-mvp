import React, {createContext, useContext, useEffect, useState} from 'react';
import {auth} from '../firebase';
import {onAuthStateChanged} from "firebase/auth";

const AuthContext = createContext(null);

export const useAuth = () => {
    const { currentUser, loading } = useContext(AuthContext);
    const isAuthenticated = currentUser !== null; // User is authenticated if currentUser is not null
    return { currentUser, isAuthenticated, loading };
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        return onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setLoading(false);
        });
    }, []);

    const value = {
        currentUser,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
