import React, {Component} from "react";
import MainApp from "../main-app";
import LoginPage from "../login-page";
import {auth} from '../FB'
import df from "../../img/kisspng-pin-badges-button-lapel-pin-5b3bb31e0ba8a6.4905132215306391340478.png"

import "./app.css"

import {Route, NavLink, Switch, useLocation} from "react-router-dom";
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import StartPage from "../start-page";




const App = () =>{
    let location = useLocation();
    return(

        <div className="app">

            <Switch location={location}>

                <Route path="/list" render={()=>{
                    return(
                        <div className="position-absolute topl"> 123</div>

                    )}}/>
                <Route path="/" component={StartPage}/>

            </Switch>
           {/* <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={5000}
                    classNames="clap">

                    <Switch location={location}>

                        <Route path="/list" render={()=>{
                            return(
                                <div className="Bottom"> 123</div>

                            )}}/>
                        <Route path="/" component={StartPage}/>

                    </Switch>
                </CSSTransition>
            </TransitionGroup>*/}
        </div>



    );
};

export default App;