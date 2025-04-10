// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz2syOVItys-4rvCDMYHmpcUPvpcACH7M",
  authDomain: "app-web-babbf.firebaseapp.com",
  projectId: "app-web-babbf",
  storageBucket: "app-web-babbf.firebasestorage.app",
  messagingSenderId: "801652165220",
  appId: "1:801652165220:web:ebc37d56834e94384d6d71",
  measurementId: "G-GFZ7Q5ELG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);


export { app, analytics, db, storage, auth };
export default app; 