/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,  signOut } from "firebase/auth";
import app from '../firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] =  useState()

    const [loading, setLoading] = useState(true)

    const googleSignIn = () => {
        setLoading(true)
       return signInWithPopup(auth, googleProvider)
    }

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }



useEffect(()=> {
    const unsuscribe = onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser)
        setLoading(false)
    })
   return () => {
    return unsuscribe();
   }

},[])



const AuthInfo = {
    googleSignIn,
    signUp,
    signIn,
    user,
    logOut,
    loading
}

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;