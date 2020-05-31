import React from "react";
import RegisterPage from "../register-page";
import LoginPage from "../login-page";
import {Route, Switch, useLocation, NavLink} from "react-router-dom";
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import "./start-page.css"

const StartPage = () =>{
    const location = useLocation();
    let a= 1+2;
    return(
        <div className="position-absolute">
            <div className="top"> </div>
            <div className="content">

                <TransitionGroup className="page-box">
                    <CSSTransition
                        key={location.key}
                        timeout={2000}
                        classNames="scroll">
                        <Switch location={location}>
                            <Route exact path="/" render={()=><LoginPage/>}/>
                            <Route path="/register" render={()=> <RegisterPage/>}/>
                       </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
            <div className="bottom"> </div>
        </div>
    )
};

export default StartPage;