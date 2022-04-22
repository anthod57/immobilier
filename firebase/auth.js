import { getAuth, initializeAuth, signOut, onAuthStateChanged ,createUserWithEmailAndPassword, signInWithEmailAndPassword, browserSessionPersistence, browserLocalPersistence, indexedDBLocalPersistence } from "firebase/auth";
import { createContext, useState, useContext, useEffect } from "react";
import { app, db, auth } from "./config";
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { login, logout, getUser } from "../redux/features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const authContext = createContext();

export default function useAuth() {
    return useContext(authContext);
}

export function AuthProvider(props) {
    const user = useSelector(getUser);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
            if (userAuth) {
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoUrl: userAuth.photoURL
                }));
            } else {
                dispatch(logout());
            }
        });

        return () => unsubscribe();
    }, [])

    const value = {  };

    return <authContext.Provider value={value} {...props} />
}
