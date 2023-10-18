// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8sR690LPn6axAGLbiEAZkPAzTvSzmCrU",
  authDomain: "client-side-ad087.firebaseapp.com",
  projectId: "client-side-ad087",
  storageBucket: "client-side-ad087.appspot.com",
  messagingSenderId: "28105123935",
  appId: "1:28105123935:web:6a29022c75501a936793ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
