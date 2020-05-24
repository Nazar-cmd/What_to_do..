import React, {Component} from "react";
import MainApp from "../main-app";
import LoginPage from "../login-page";
import {auth} from '../FB'

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
                        timeout={1500}
                        classNames="fade">
                        <Switch location={location}>
                            <Route exact path="/" component={LoginPage}/>
                            <Route exact path="/about" component={LoginPage}/>

                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} />
        </div>


    );
};

export default App;