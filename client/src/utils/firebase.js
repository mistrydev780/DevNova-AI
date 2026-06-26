import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "devnovaai-8669e.firebaseapp.com",
  projectId: "devnovaai-8669e",
  storageBucket: "devnovaai-8669e.firebasestorage.app",
  messagingSenderId: "1039389108488",
  appId: "1:1039389108488:web:c6ed1dbac099adf994e4bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider}