import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAjTVasSOiD_vugFMjDYOu5UvzOst5aN60",
    authDomain: "upheld-modem-366303.firebaseapp.com",
    projectId: "upheld-modem-366303",
    storageBucket: "upheld-modem-366303.appspot.com",
    messagingSenderId: "716840287454",
    appId: "1:716840287454:web:1b09655a71d1a47cea164f",
    measurementId: "G-2SQLHQE8VG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };