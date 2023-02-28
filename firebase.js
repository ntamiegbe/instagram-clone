// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-V6RDmQxnnBc9iJsTgSRhbhPr5UGqSfI",
    authDomain: "instagram-clone-5db0f.firebaseapp.com",
    projectId: "instagram-clone-5db0f",
    storageBucket: "instagram-clone-5db0f.appspot.com",
    messagingSenderId: "1048680871972",
    appId: "1:1048680871972:web:0266a6679d63809af8c0b1"
};

// Initialize Firebase (check if app has already been initialized)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db.storage }