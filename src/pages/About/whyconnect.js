import React from 'react'
import { Container,Row, Col} from 'react-bootstrap'
import { FiPlusCircle } from "react-icons/fi"
import { FiArrowRight } from "react-icons/fi"
import { FiArrowLeft } from "react-icons/fi"
import { FaQuestion } from "react-icons/fa"
import '../../style/features.scss'
import  Parallax from 'react-rellax';
// import bg from '../../assets/images/Group 148.png'

export default function Whyconnect() {
    return (
        <>
        <section id='whyconnect1'>
            <div class="why-connect-main-div">
                <h1>Why Connect</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <br></br>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <br></br>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p>Lorem Ipsum is simply dummy</p>
                <br></br>
                <li>dummy text of the printing and typesetting industry</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                <li>dummy text of the printing and typesetting industry</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                <h2>learn more</h2>
            </div>
        </section>
        </>
    )
}
