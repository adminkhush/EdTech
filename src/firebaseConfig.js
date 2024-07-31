import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDEi3y6pUqAnUWDZ2gscheO0y-vXvJQ37I",
  authDomain: "edtech-882e1.firebaseapp.com",
  projectId: "edtech-882e1",
  storageBucket: "edtech-882e1.appspot.com",
  messagingSenderId: "185261948448",
  appId: "1:185261948448:web:9675ca6806da2b04ad0645",
  measurementId: "G-MM1C926DPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
