import React from "react";
import UserEnterService from "../service/user-enter-service";
import Popup from "../Popup";

const userEnterService = new UserEnterService();

const {loginUser, registerUser, logOutUser} =  userEnterService;




const WithUserAction = (View,childFunc,name) =>{
    return (props)=>{
        return(
            <View {...props} text={name} userFunc={childFunc} />
        )
    }
};


const LoginPopup=WithUserAction(Popup,loginUser, 'Login');
const RegisterPopup=WithUserAction(Popup,registerUser, 'Register');

export {LoginPopup,RegisterPopup} ;



