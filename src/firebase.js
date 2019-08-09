// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKGDkKJ0QCmpOWLsaYRt8xwPdcwjmoXHA",
  authDomain: "todo-brief.firebaseapp.com",
  databaseURL: "https://todo-brief.firebaseio.com",
  projectId: "todo-brief",
  storageBucket: "",
  messagingSenderId: "314916941039",
  appId: "1:314916941039:web:f255c37537e04c2a"
};

export var provider = new firebase.auth.GoogleAuthProvider();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
