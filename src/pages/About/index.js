import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import '../../style/about.scss'
import  Parallax from 'react-rellax';

export default function index() {
    return (
        <>
<section id='About1'>   
    <section id="section1">
        <div class="second-container">
            <div class="sc-div-one">
                <img src={require('../../assets/images/banner-img.png')} alt="" />
                <h1>About us</h1>
            </div>
            <h1>Play</h1>
        </div>
    </section>


    <section>
        <div class="about-container">
            <div class="about-row-one">
                <div class="left-div-one">
                    <img src={require('../../assets/images/about.png')} alt="" />
                    <h1>Who we are</h1>
                </div>
                <div class="right-div-one">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum in nulla quis rutrum. Donec massa metus, pellentesque et lorem nec, fringilla tristique ante. Quisque lorem eros, laoreet bibendum cursus a, luctus sed turpis. Sed ut dictum turpis, sed interdum sapien. Nam placerat vestibulum dui, sit amet dictum lacus congue ut. Integer tincidunt eros eget dictum vehicula. Suspendisse in sollicitudin purus. In et tellus ut arcu scelerisque sollicitudin. Aenean quis gravida libero, pellentesque iaculis turpis. Praesent accumsan lacus ac gravida condimentum. Proin faucibus consequat elit vitae consectetur. Aenean sed dictum elit. Pellentesque enim lorem, vehicula vitae turpis blandit, dignissim vulputate elit.Etiam convallis diam lorem, eu accumsan diam aliquam et. Curabitur vitae tortor id urna malesuada consectetur. 
                    </p>
                </div>
            </div>

            <div class="about-row-two">
                <div class="left-div-two">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum in nulla quis rutrum. Donec massa metus, pellentesque et lorem nec, fringilla tristique ante. Quisque lorem eros, laoreet bibendum cursus a, luctus sed turpis. Sed ut dictum turpis, sed interdum sapien. Nam placerat vestibulum dui, sit amet dictum lacus congue ut. Integer tincidunt eros eget dictum vehicula. Suspendisse in sollicitudin purus. In et tellus ut arcu scelerisque sollicitudin. Aenean quis gravida libero, pellentesque iaculis turpis. Praesent accumsan lacus ac gravida condimentum. Proin faucibus consequat elit vitae consectetur. Aenean sed dictum elit. Pellentesque enim lorem, vehicula vitae turpis blandit, dignissim vulputate elit.Etiam convallis diam lorem, eu accumsan diam aliquam et. Curabitur vitae tortor id urna malesuada consectetur.
                    </p>
                    <h1>What we do</h1>
                </div>
                <div class="right-div-two">
                    <img src={require('../../assets/images/what-next.png')} alt="" />
                </div>
            </div>
        </div>
    </section>
</section>  
        </>

    )
}
