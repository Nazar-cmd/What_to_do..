import React, {Component} from "react";
import Header from "../header";
import MainApp from "../main-app";
import {auth} from '../FB'

import "./app.css"

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

        const head = (loggedIn !== null)?<Header isLogged={loggedIn}/>:null;
        const main = (loggedIn)?<MainApp user={user}/>:null;


        return(
            <React.Fragment>
            {head}
            {main}
            </React.Fragment>
        );
    };
}

                {/* <div className='logout-theme'>
                {head}
                <div className='description'>
                    <h4>With Todo list you easily can:</h4>
                        <div className='description-item  card'>
                            <img className='card-img' src={ssd} alt=""/>
                            <span className='card-body' >Delete Items</span>
                        </div>
                    <div className='description-item  card'>
                        <img className='card-img' src={ssd} alt=""/>
                        <span className='card-body' >Mark it as important</span>
                    </div>
                    <div className='description-item  card'>
                        <img className='card-img' src={ssd} alt=""/>
                        <span className='card-body' >Filter by three params: ALL, DONE, IMPORTANT</span>
                    </div>
                    <div className='description-item  card'>
                        <img className='card-img' src={ssd} alt=""/>
                        <span className='card-body' >Find your note using comfortable search</span>
                    </div>
                    <h4>For all this functionality just login or register</h4>
                </div>

            </div>
        <div className="description-item">

                        <img src={ssd} alt="#"/>
                        <span>sndfnSDFN;SD;FSD,F</span>
                    </div>


            <div className="todoApp">

                {head}
                {main}
            </div>*/}