import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET } from "@/lib/constants";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "370209406069",
    appId: "1:370209406069:web:4944a3d4fd1aa61b870c3c"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;