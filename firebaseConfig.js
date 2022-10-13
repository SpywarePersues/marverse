import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDEEr8sqHQUJTA7qCyDh8GUht3P9C4remg",
    authDomain: "spy-nok9.firebaseapp.com",
    projectId: "spy-nok9",
    storageBucket: "spy-nok9.appspot.com",
    messagingSenderId: "130360790067",
    appId: "1:130360790067:web:bbe10f92b978da9b1b2746",
    measurementId: "G-E9TT296NCK"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)