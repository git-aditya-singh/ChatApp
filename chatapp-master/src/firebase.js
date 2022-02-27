import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAjC0iJ_uN_6FOydj6hEKaW82oSDgj-_eg",
    authDomain: "chatapp-f9647.firebaseapp.com",
    projectId: "chatapp-f9647",
    storageBucket: "chatapp-f9647.appspot.com",
    messagingSenderId: "305825350741",
    appId: "1:305825350741:web:1eeaeb0555c0086b84c0dc",
    measurementId: "G-N1LNS69QW3"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db,auth}