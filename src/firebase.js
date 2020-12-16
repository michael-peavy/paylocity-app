import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDX9XZFzGeNXZ-Cv_PNjVgpM7PWUJVMGrQ",
  authDomain: "paylocity111.firebaseapp.com",

  projectId: "paylocity111",
  storageBucket: "paylocity111.appspot.com",
  messagingSenderId: "557596901983",
  appId: "1:557596901983:web:e3af498a923e5315b011ea",
  measurementId: "G-SZ9DW0RXFZ"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const getServerTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, provider, getServerTimestamp };
export default db;
