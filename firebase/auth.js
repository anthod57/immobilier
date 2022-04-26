import { initializeAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, browserSessionPersistence, browserLocalPersistence, indexedDBLocalPersistence, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect } from "react";
import { app } from "./config";
import { login, logout } from "../redux/features/userSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const authContext = createContext();
const auth = initializeAuth(app, {persistence: [indexedDBLocalPersistence, browserLocalPersistence, browserSessionPersistence]});

export default function useAuth() {
    return useContext(authContext);
}

export function AuthProvider(props) {
    const dispatch = useDispatch();
    const router = useRouter();

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

    const signIn = async (email, password) => {
        return new Promise((resolve, object) => {
            signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                router.reload();
                resolve();
            }).catch((error) => {
                console.log(error);
                resolve(error);
            });
        })
    }

    const signOutUser = async () => {
        await signOut(auth);
        router.reload();
    }

    const register = async (data) => {
        return new Promise(async(resolve, object) => {
            createUserWithEmailAndPassword(auth, data.email, data.password).then(async (userCredential) => {
                if(userCredential){
                    await updateProfile(userCrendential, {displayName: data.firstName });
                }
                resolve();
            }).catch((error) => {
                console.log(error);
                resolve(error);
            })
        })
    }

    const value = {register, signOutUser, signIn};

    return <authContext.Provider value={value} {...props} />
}
