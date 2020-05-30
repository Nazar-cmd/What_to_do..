import React, {Component} from "react";
import MainApp from "../main-app";
import LoginPage from "../login-page";
import {auth} from '../FB'
import df from "../../img/kisspng-pin-badges-button-lapel-pin-5b3bb31e0ba8a6.4905132215306391340478.png"

import "./app.css"

import {
    Route,
    NavLink,
    Switch
} from "react-router-dom";
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';




const App = () =>{

    return(

        <div className="app">
            <div className="nav">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
            </div>

            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={10000}
                        classNames="fade">

                        <Switch location={location}>

                            <Route exact path="/" render={()=>{return(

                                <div className="xi">
                                    <img src={df} alt="sdv"/>
                                   <LoginPage/>
                                </div>

                            )}}/>
                            <Route exact path="/about" render={()=>{return(

                                <div className="xi">
                                    <img src={df} alt="sdv"/>
                                    <LoginPage/>
                                </div>

                            )}}/>

                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} />
        </div>


    );
};

export default App;