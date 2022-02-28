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
       <section className="ct-u-paddingBoth80 marginTopNone-mobile paddingTopNone-mobile">
        <div className="container">
            <div className="featured-section-container text-center-md text-center-sm text-center-xs">
            <div className="row ct-u-paddingBoth20">
                <div className="col-md-7">
                    <img src={require('../../assets/images/OBJECTS.png')} />
                </div>
                <div className="col-md-5 ct-u-paddingTop20">
                <div className="textpos text-right text">
                    <h3 className="ct-section_header ct-section_header--type2">
                    <span>Connecting </span>
                    <span>your</span><br></br>
                    <span>Church</span><br></br>
                    <span>to </span>
                    <span>the </span>
                    <span>World </span>
                    {/* <span>Church</span> */}
                    </h3>
                    <h3 className="bebas ct-u-size40 tags">Illustration, Spaceship, gray tones</h3>

                    <div className="ct-u-size17 inline-block text-left">

                    </div>
                    <div className="clearfix"></div>
                </div>
                </div>
            </div>

            </div>
        </div>
    </section>
        </>
      
    )
}
