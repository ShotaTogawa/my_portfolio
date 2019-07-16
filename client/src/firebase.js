import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
var firebaseConfig = {
    apiKey: "AIzaSyBMXRawcYRaWWHGEdCYCKkwmIUPml_rdJg",
    authDomain: "my-portfolio-e7b33.firebaseapp.com",
    databaseURL: "https://my-portfolio-e7b33.firebaseio.com",
    projectId: "my-portfolio-e7b33",
    storageBucket: "my-portfolio-e7b33.appspot.com",
    messagingSenderId: "971385423281",
    appId: "1:971385423281:web:00f0309bec75a09e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

