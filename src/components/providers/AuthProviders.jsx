import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userSignOut =()=>{
        return signOut(auth);
    }

    // observe user auth state useEffect used whenever page loaded the api or function will called or executed automatically
    // observe user auth is hold the user whenever the user created & signedIn or signedOut
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        });

        // stop observing  while unmounting
        return ()=>{
            return unsubscribe();
        }
    },[]) 

    const authInfo = {
        user,
        createUser,
        signInUser,
        userSignOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;