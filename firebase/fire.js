// import * as firebase from "firebase";

import firebase from "firebase";
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyCgKRwu3AoI27Z6CHhHDk-KfCFI7EzlDs8",
  authDomain: "reactnativeauth-5377d.firebaseapp.com",
  projectId: "reactnativeauth-5377d",
  storageBucket: "reactnativeauth-5377d.appspot.com",
  messagingSenderId: "951436300497",
  appId: "1:951436300497:web:60bff7139a439d8d94b5f0",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
