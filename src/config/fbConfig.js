import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBCWPotJccPT-2WTXeLTHRwGa3JKp9bAHg",
  authDomain: "react-redux-firebase-c1f6f.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-c1f6f.firebaseio.com",
  projectId: "react-redux-firebase-c1f6f",
  storageBucket: "",
  messagingSenderId: "1009253999697",
  appId: "1:1009253999697:web:a87c6a4b013402d1"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
