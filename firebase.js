
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBStbkrOiuZkl9LsNX7iqX9J1C00CxFlR4",
  authDomain: "uber-next-clone-eee04.firebaseapp.com",
  projectId: "uber-next-clone-eee04",
  storageBucket: "uber-next-clone-eee04.appspot.com",
  messagingSenderId: "960257787980",
  appId: "1:960257787980:web:87653097380197391ecce9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth }


