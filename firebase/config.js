import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDpJk92bNWbINMAPsXBRb8IUZ4Kf68YqpU",
    authDomain: "immobilier-2.firebaseapp.com",
    projectId: "immobilier-2",
    storageBucket: "immobilier-2.appspot.com",
    messagingSenderId: "525209019231",
    appId: "1:525209019231:web:17eded29f216674e128cea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);