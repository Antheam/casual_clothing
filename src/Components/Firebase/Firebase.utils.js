import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCUKaySilt2BDfYoa-QGQqK2oNvrVg1XaI",
  authDomain: "casual-clothing.firebaseapp.com",
  databaseURL: "https://casual-clothing.firebaseio.com",
  projectId: "casual-clothing",
  storageBucket: "casual-clothing.appspot.com",
  messagingSenderId: "314917021238",
  appId: "1:314917021238:web:8aa91727764d36be2f5a97"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
