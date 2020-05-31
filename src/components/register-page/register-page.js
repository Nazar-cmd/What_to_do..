import React from "react";
import "./register-page.css"
import {NavLink} from "react-router-dom";

const RegisterPage = ({url}) =>{
    return(


            <div className="register-page">
                <h3>A few steps to your own TODO list</h3>
                <form>
                    <div className="register-label-input">
                        <label className="mt-1 mr-3" htmlFor="register-email">E-mail:</label>
                        <input type='email' id="register-email" placeholder="Enter your valid email" required/>
                    </div>

                    <div className="register-label-input">
                        <label className="mt-1 mr-3" htmlFor="register-displayName">Display name:</label>
                        <input type='text' id="register-password" placeholder="Max-lenght: 25" pattern="(...{23,})+" required/>
                    </div>
                    <div className="register-label-input">
                        <label className="mt-1 mr-3" htmlFor="register-password">Password:</label>
                        <input type='password' id="register-password" placeholder="Enter at least 6 symbols" pattern="(...{4,})+" required/>
                    </div>


                    <div className="d-flex flex-column">
                        <button type="submit" className='enter-page-button flex-grow-1'> <NavLink to="/list" activeClassName="active">Register</NavLink></button>
                        <button  className='enter-page-button'>Continue with <i className="fab fa-google"></i></button>
                    </div>
                </form>
                <small>Registered? <NavLink to="/" className="font-weight-bold">Sign in there.</NavLink></small>
            </div>

    )
};

export default RegisterPage;