import React from 'react'
import { Container,Row, Col} from 'react-bootstrap'
import '../../style/package.scss'
import Card from  '../../components/Packages/Cards'
import green from '../../assets/pkg-bg/Group 476.png'
import yellow from '../../assets/pkg-bg/Group 477.png'
import pink from '../../assets/pkg-bg/Group 478.png'
import Parallax from 'react-rellax'



export default function index() {


    return (
        <>
        <section id='package1'>
            <div class="main-pakages-div">
                <div class="pakage-div-one">
                    <h1>Packages</h1>
                </div>
                <div class="pakage-div-two">
                    <div class="img-div">
                        <h4>Standard</h4>
                        <img src={require('../../assets/images/pakage_card-1.png')} alt="" />
                    </div>
                    <div class="content-div">
                    <ul>
                        <li><i class="fa fa-check-circle"></i> For Up To 2 Social Media Platforms</li>
                        <li><i class="fa fa-check-circle"></i>3 Post Per Week</li>
                        <li><i class="fa fa-check-circle"></i>All Images, Graphics And CopyWriting Included. Featurd Videos Available</li>
                        <li><i class="fa fa-check-circle"></i>Messaging And Comment Moderation Included</li>
                        <li><i class="fa fa-check-circle"></i>Boosted Post Add-One Available</li>
                    </ul>
                    </div>
                    <button>Register</button>
                </div>
                <div class="pakage-div-three">
                    <div class="img-div">
                        <h4>Standard</h4>
                        <img src={require('../../assets/images/pakge_card.png')} alt="" />
                    </div>
                    <div class="content-div">
                    <ul>
                        <li><i class="fa fa-check-circle"></i> For Up To 2 Social Media Platforms</li>
                        <li><i class="fa fa-check-circle"></i>3 Post Per Week</li>
                        <li><i class="fa fa-check-circle"></i>All Images, Graphics And CopyWriting Included. Featurd Videos Available</li>
                        <li><i class="fa fa-check-circle"></i>Messaging And Comment Moderation Included</li>
                        <li><i class="fa fa-check-circle"></i>Boosted Post Add-One Available</li>
                    </ul>
                    </div>
                    <button>Register</button>
                </div>
                <div class="pakage-div-four"></div>
            </div>
        </section>
        </>
    )
}
