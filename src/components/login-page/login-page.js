import React from "react";
import {NavLink} from "react-router-dom";

import './login-page.css'



const LoginPage = ({url}) =>{


    return(


            <div className="login-page" >

                <h2>Welcome to Todo list!</h2>

                <p>Perfect place to plan and organize your time</p>
                <form>
                    <div className="login-label-input">
                       <label className="mt-1 mr-3" htmlFor="login-email">E-mail:</label>
                        <input type='email' id="login-email" placeholder="Enter your valid email" required/>
                    </div>

                    <div className="login-label-input">
                        <label className="mt-1 mr-3" htmlFor="login-password">Password:</label>
                        <input type='password' id="login-password" placeholder="Enter at least 6 symbols" pattern="(...{4,})+" required/>
                    </div>


                    <div className="d-flex flex-row">
                        <button type="submit" className='enter-page-button flex-grow-1'> <NavLink to="/list" activeClassName="active">Login</NavLink></button>
                        <button  className='enter-page-button'>Continue with <i className="fab fa-google"></i></button>
                    </div>
                </form>
                <small>Registered? <NavLink to="/register" className="font-weight-bold">Sign up there.</NavLink></small>
            </div>
    )
};

export default LoginPage;