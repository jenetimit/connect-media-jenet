import React from 'react'
import { FaArrowDown } from "react-icons/fa"
import '../../style/home.scss'
import { Container,Row,Col } from 'react-bootstrap'
import  Parallax from 'react-rellax';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function index() {
    return (
        <>
    
    <section id='home1'>
        <div class="main-banner">
            <div class="left-div">
                <img src={require('../../assets/images/OBJECTS.png')} alt="" />
            </div>
            <div class="right-div">
                <h1>Connecting Your <span>Church</span><br></br> to the world</h1>
            </div>
        </div>
    </section>
        
        </>
      
    )
}
