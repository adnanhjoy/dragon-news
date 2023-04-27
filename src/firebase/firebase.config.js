// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl28iVrhJ6nGz3gTGyHyQVdAQHeVW8e1c",
  authDomain: "dragon-news-bcdab.firebaseapp.com",
  projectId: "dragon-news-bcdab",
  storageBucket: "dragon-news-bcdab.appspot.com",
  messagingSenderId: "347670370407",
  appId: "1:347670370407:web:3bc02e197673ddf9155cc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;