import React from "react";


import './login-page.css'


const LoginPage = () =>{

    return(
        <div className="login-page">
            <p>Welcome to Todo list!</p>
            <p>Perfect place to plan and organize your time</p>
            <form>
                <label htmlFor="login-email">E-mail</label>
                <input type='email' id="login-email" placeholder="Enter your valid email" required/>
                <label htmlFor="login-password" >Password</label>
                <input type='password' id="login-password" placeholder="Enter at lest 6 symbols" required pattern="(...{4,})+" />
                <button type="submit" className='enter-page-button'> Login</button>
            </form>

            <button className=' enter-page-button'> Register</button>
        </div>
    )
};

export default LoginPage;