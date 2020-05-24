import * as firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyDLRo3-JpOVJ-oYcgr8PmQeRGUkEr2YcS4",
    authDomain: "video-app-fc98e.firebaseapp.com",
    databaseURL: "https://video-app-fc98e.firebaseio.com",
    projectId: "video-app-fc98e",
    storageBucket: "video-app-fc98e.appspot.com",
    messagingSenderId: "136538015620",
    appId: "1:136538015620:web:b3a90b76bf56e6e2537fd1"
};

export default (!firebase.apps.length
    ?firebase.initializeApp(firebaseConfig)
    :firebase.app());
