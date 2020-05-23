import React,{useState} from "react";


import startPic from '../../img/3.png'
import './enter-page.css'


const EnterPage = () =>{


    const [flip, setFlip] = useState(null);


    const style = flip? { transform: "rotateY(180deg)"}:null;

    return(



        <div className="flip-container" >
            <div className='flipper' style={style}>
                <div className='front'>
                    <img className='enter-page-img' src={startPic} alt=""/>
                    <p>Welcome to Todo list!</p>
                    <p>Perfect place to plan and organize your time</p>
                    <button className='enter-page-button' onClick={()=>setFlip(true)}> Login</button>
                    <button className=' enter-page-button'> Register</button>
                </div>
                <div className='back'>
                    <img className='enter-page-img' src='https://klike.net/uploads/posts/2020-02/1581672891_1.jpg' alt=""/>
                    <p>Welcome to Todo list!</p>
                    <p>Perfect place to plan and organize your time</p>
                    <button className='enter-page-button' onClick={()=>setFlip(false)} > Login</button>
                    <button className=' enter-page-button'> Register</button>
                </div>
            </div>
        </div>



    )


};

export default EnterPage;