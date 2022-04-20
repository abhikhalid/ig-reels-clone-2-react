import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD3nhga699LB5GMCRu4ks0NJ0GxlWtyn7c",
    authDomain: "ig-reels-clone-2.firebaseapp.com",
    projectId: "ig-reels-clone-2",
    storageBucket: "ig-reels-clone-2.appspot.com",
    messagingSenderId: "986571540803",
    appId: "1:986571540803:web:2f8e761d006ccb076807f6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;