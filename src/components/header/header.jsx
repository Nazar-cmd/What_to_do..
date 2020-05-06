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


    hidePopup=()=>{
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


        const {whichPopup} = this.state;

        const loginForm = (whichPopup==='Login')?<Popup submit={this.logInUser} exit={this.hidePopup} text={'Login'}/>:null;
        const registrationForm = (whichPopup === 'Register')?<Popup submit={this.reqUser} exit={this.hidePopup} text={'Registration'} />:null;

        if (this.props.isLogged){
            return <button onClick={()=>this.logOutUser()}>Sign Out</button>
        }

        return (
            /*<div>

                {loginForm}
                {registrationForm}
                <span onClick={()=>{this.popupClick('Login')}}> Login </span>
                <span onClick={()=>{this.popupClick('Register')}} > Register </span>
            </div>*/

            <div>
                {loginForm}
                {registrationForm}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <span className="navbar-brand">What's up?</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <span className="nav-link" onClick={() => {
                                    this.popupClick('Login')
                                }}> Login </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" onClick={() => {
                                    this.popupClick('Register')
                                }}> Register </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link"> About </span>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }


};



