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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
