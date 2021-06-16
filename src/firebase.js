import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCO7tPw2CL5JTT8Jg46EUti5B1NBvON2G4",
    authDomain: "softwaresecurityproject-88f88.firebaseapp.com",
    projectId: "softwaresecurityproject-88f88",
    storageBucket: "softwaresecurityproject-88f88.appspot.com",
    messagingSenderId: "972274703831",
    appId: "1:972274703831:web:9ff847896023649d413f92",
    measurementId: "G-2NVJCJMEPJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {db,auth};