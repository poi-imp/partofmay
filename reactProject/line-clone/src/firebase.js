import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../lib/firebase";


// const firebaseApp  = firebase.initializeApp({
//     apiKey: "AIzaSyCMc8kmP8ADBW0alnzr3cLwcnTJwjdMelI",
//     authDomain: "line-clone-1e39f.firebaseapp.com",
//     projectId: "line-clone-1e39f",
//     storageBucket: "line-clone-1e39f.appspot.com",
//     messagingSenderId: "347320117107",
//     appId: "1:347320117107:web:14b618751a4f09580a4706"

// });

// Initialize Firebase
const app = initializeApp({
    apiKey: "AIzaSyCMc8kmP8ADBW0alnzr3cLwcnTJwjdMelI",
    authDomain: "line-clone-1e39f.firebaseapp.com",
    projectId: "line-clone-1e39f",
    storageBucket: "line-clone-1e39f.appspot.com",
    messagingSenderId: "347320117107",
    appId: "1:347320117107:web:14b618751a4f09580a4706"
});


const db = firebaseApp.firestore();

// const auth = firebase.auth();
const auth = getAuth(app);

export { db, auth };