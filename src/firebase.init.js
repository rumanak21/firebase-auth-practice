import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCP10nrRCkLIRM7Gqzy0tJBZ50zrRec8YQ",
    authDomain: "simple-firebase-auth-a0d8e.firebaseapp.com",
    projectId: "simple-firebase-auth-a0d8e",
    storageBucket: "simple-firebase-auth-a0d8e.appspot.com",
    messagingSenderId: "531803380205",
    appId: "1:531803380205:web:8c9a83828de670db6a2fe4",
    measurementId: "G-PWX0D07HKX"
  };

const app = initializeApp(firebaseConfig);

export default app;