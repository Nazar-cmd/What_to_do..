import React, {Component} from "react";
import MainApp from "../main-app";
import EnterPage from "../enter-page";
import {auth} from '../FB'
import {
    Route,
    NavLink,
    Switch
} from "react-router-dom";

import "./app.css"
import {CSSTransition, TransitionGroup} from "react-transition-group";
import startPic from "../../img/3.png";

export default class App extends Component{

    state={
        loggedIn: null,
        user:null
    };



    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true , user})}
            else {
                this.setState({ loggedIn: false })}
        });
    }



    render() {

        const {user,loggedIn} = this.state;

        //const head = (loggedIn !== null)?<Header isLogged={loggedIn}/>:null;
        const main = (loggedIn)?<MainApp user={user}/>:null;

        return(
            <div className='app'>
                <EnterPage/>
            </div>


        );
    };
}