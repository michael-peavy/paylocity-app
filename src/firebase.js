// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD5PHPzmDqAeoYWDlop8cJVL97ad4PWVjk",
  authDomain: "paylo-clone.firebaseapp.com",
  databaseURL: "https://paylo-clone.firebaseio.com",
  projectId: "paylo-clone",
  storageBucket: "paylo-clone.appspot.com",
  messagingSenderId: "670059705040",
  appId: "1:670059705040:web:a5886e19b1eea374a4e4d5",
  measurementId: "G-BRTNCDJWYW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;