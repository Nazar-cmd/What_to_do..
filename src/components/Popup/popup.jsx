import React, {Component} from "react";

import './popup.css'

export default class Popup extends Component{


    state = {
        emailText: '',
        passwordText:''
    };

    onSubmit = async (e) =>{

        const {userFunc,hidePopup} = this.props;
        const {emailText, passwordText} = this.state;


        e.preventDefault();
        const rez = await userFunc(emailText,passwordText);
        console.log(rez);
        hidePopup();
    };

    onEmailChange = (e) =>{
        this.setState({
           emailText: e.target.value
        })
    };


    onPasswordChange = (e) =>{
        this.setState({
            passwordText: e.target.value
        })
    };




    render() {

        const {text} = this.props;


        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h3>{text}</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onEmailChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="At least 6 symbols" onChange={this.onPasswordChange} />
                        </div>
                        <button type="submit" className="btn btn-primary m-2" onClick={this.onSubmit}>Submit</button>
                        <button type='button' className="btn btn-secondary m-2" onClick={this.props.hidePopup}>Return</button>
                    </form>
                </div>
            </div>
        );
    }


};

