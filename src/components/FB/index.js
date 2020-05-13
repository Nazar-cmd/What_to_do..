import firebase from "./FBinit"
import "firebase/auth"
import "firebase/firestore"

const auth = firebase.auth();
const db = firebase.firestore();


export {auth, db};