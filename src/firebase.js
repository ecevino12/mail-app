import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDIimYkAETApdMsXS6hYtiXCBzvf4PSRb0",
    authDomain: "fir-77fb8.firebaseapp.com",
    databaseURL: "https://fir-77fb8.firebaseio.com",
    projectId: "fir-77fb8",
    storageBucket: "",
    messagingSenderId: "120318660769",
    appId: "1:120318660769:web:15bd83d251a2ea4a"
});

const db = firebaseApp.firestore();

export { db };
