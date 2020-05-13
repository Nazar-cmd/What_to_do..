import {auth} from "../FB";

export default class UserEnterService{

   loginUser=(email, password)=>{
       return(
           auth.signInWithEmailAndPassword(email, password)
            .catch(e=>{return e}));
    };

    registerUser=(name, password)=>{
        return(
            auth.createUserWithEmailAndPassword(name, password)
            .catch(e=>{return e}));
    };

    logOutUser=()=>{
        return(
            auth.signOut()
                .catch(e => {return e}));
    };

}