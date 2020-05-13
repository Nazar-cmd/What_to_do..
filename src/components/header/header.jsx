import React, {Component} from 'react';
import './header.css'
import {LoginPopup, RegisterPopup, Logout} from "../todo-components";
import {LoggedInHeader,StartHeader} from "../todo-components/header-list";


import UserEnterService from "../service/user-enter-service";
const userEnterService = new UserEnterService();



export default class Header extends Component{

    state = {
        whichPopup: null
    };

    buttonClick = (name) =>{
        this.setState({whichPopup:name})
    };

    hidePopup=()=>{
        this.setState({whichPopup:null})
    };

    renderPopup(name){
        switch (name) {
            case 'Login': return(<LoginPopup hidePopup={this.hidePopup} />);
            case 'Register': return (<RegisterPopup hidePopup={this.hidePopup} />);
            case 'Logout': userEnterService.logOutUser(); break;
            default: return null;
         }
    };

    renderButtons(isLog){
        if (isLog){
            return <LoggedInHeader userClick={this.buttonClick}/>
        }
        else{
            return <StartHeader userClick={this.buttonClick}/>
        }
    };



    render() {

        const {isLogged}= this.props;
        const {whichPopup} = this.state;

        const buttons = this.renderButtons(isLogged);
        const popups = this.renderPopup(whichPopup);


        return (


            <div>
                {popups}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <span className="navbar-brand">What's up?</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {buttons}
                    </div>
                </nav>
            </div>
        );
    }


};



