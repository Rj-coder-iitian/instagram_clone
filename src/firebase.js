import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB5GDD9AoC2sJ4NXeOGQwcNxScE829UzMA",
    authDomain: "instagram-clone-react-7bdef.firebaseapp.com",
    projectId: "instagram-clone-react-7bdef",
    storageBucket: "instagram-clone-react-7bdef.appspot.com",
    messagingSenderId: "49795822425",
    appId: "1:49795822425:web:8fb669f17918b9540d1248",
    measurementId: "G-NNFEHH99GD"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};