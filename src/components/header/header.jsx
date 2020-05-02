import React, {Component} from 'react';
import './header.css'
import Popup from "../Popup";
import {auth} from "../FB/FBmore";

export default class Header extends Component{

    state = {
        whichPopup: null
    };

    popupClick = (name) =>{
        this.setState({whichPopup:name})
    };


    hidePopup(){
        this.setState({whichPopup:null})
    };

    reqUser = (name, password) =>{
        auth.createUserWithEmailAndPassword(name,password)
            .catch((e)=>console.log(e));
        this.hidePopup();
    };

    logInUser = (name, password) =>{
        auth.signInWithEmailAndPassword(name,password)
            .catch(e=>console.log(e));
        this.hidePopup();
    };

    logOutUser(){auth.signOut().catch(e=>console.log(e))};


    render() {

        //console.log(this.props.ifUser);

        const {whichPopup} = this.state;

        const loginForm = (whichPopup==='Login')?<Popup submit={this.logInUser} text={'Login'}/>:null;
        const registrationForm = (whichPopup === 'Register')?<Popup submit={this.reqUser} text={'Registration'} />:null;

        if (this.props.isLogged){
            return <button onClick={()=>this.logOutUser()}>Sign Out</button>
        }

        return (
            <div>

                {loginForm}
                {registrationForm}
                <span onClick={()=>{this.popupClick('Login')}}> Login </span>
                <span onClick={()=>{this.popupClick('Register')}} > Register </span>
            </div>
        );
    }


};



