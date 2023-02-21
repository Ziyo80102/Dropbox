import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB6pNP4am09EabfjdNG3iqzm1IWsrxmVMA",
    authDomain: "dropbox-61beb.firebaseapp.com",
    projectId: "dropbox-61beb",
    storageBucket: "dropbox-61beb.appspot.com",
    messagingSenderId: "115275701296",
    appId: "1:115275701296:web:5e18eb7a4ba2230a6421f5",
    measurementId: "G-B05CD54TW9"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const database = {
    users: firestore.collection("users"),
    docs: firestore.collection("docs"),
    files: firestore.collection("files"),
    date: firebase.firestore.FieldValue.serverTimestamp(),
};

export const storage = firebase.storage();

export const auth = firebase.auth();