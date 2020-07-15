import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCoAZiiVWKydG433p-j-_8oFs3fXHERdbA",
  authDomain: "crwn-db-38014.firebaseapp.com",
  databaseURL: "https://crwn-db-38014.firebaseio.com",
  projectId: "crwn-db-38014",
  storageBucket: "crwn-db-38014.appspot.com",
  messagingSenderId: "910506238067",
  appId: "1:910506238067:web:efa228426b4aa15f754a06",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
