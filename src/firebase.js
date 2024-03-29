import { initializeApp } from "firebase/app";

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSANGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
};

const firebase = initializeApp(firebaseConfig);
export default firebase;