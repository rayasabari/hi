import { initializeApp } from "firebase/app";

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY6V_xKCkE7EaA4065Xu4O0EJ2jzspdGs",
  authDomain: "rayasabari-1a9cc.firebaseapp.com",
  databaseURL:
    "https://rayasabari-1a9cc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rayasabari-1a9cc",
  storageBucket: "rayasabari-1a9cc.appspot.com",
  messagingSenderId: "677200529145",
  appId: "1:677200529145:web:463776d85274387ab08428",
};

const firebase = initializeApp(firebaseConfig);
export default firebase;