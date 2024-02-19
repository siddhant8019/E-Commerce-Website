import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxjtOY-ROHJPHLKlj6NTBJOMbfN8OKQV8",
  authDomain: "challenge-5451c.firebaseapp.com",
  projectId: "challenge-5451c",
  storageBucket: "challenge-5451c.appspot.com",
  messagingSenderId: "780774322703",
  appId: "1:780774322703:web:f4e3146a071dabc2a3e97a",
  measurementId: "G-738B5QSV03",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
