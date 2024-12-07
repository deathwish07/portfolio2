// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3DYxOvGRU6Wy28inxP_ZFDB7XRWdsXW4",
  authDomain: "portfolio-blog-182e8.firebaseapp.com",
  projectId: "portfolio-blog-182e8",
  storageBucket: "portfolio-blog-182e8.firebasestorage.app",
  messagingSenderId: "45084605509",
  appId: "1:45084605509:web:027f374dfbd8ca2f4d772c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);