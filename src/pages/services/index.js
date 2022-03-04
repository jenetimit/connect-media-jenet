import React from 'react'
import '../../style/service.scss'
import { Row,Col } from 'react-bootstrap'
import { FaArrowDown } from "react-icons/fa"
import Card from '../../components/services/cards'
import img1 from '../../assets/images/Group 186.png'
import img3 from '../../assets/images/Group 192.png'
import img2 from '../../assets/images/Group 191.png'
import img4 from '../../assets/images/Group 193.png'
import  Parallax from 'react-rellax';


export default function index() {
    // const itemList1 = ["Live-Stream Services: Increase viewership & followers",
    //     "Customized Videos",
    //     "Create Short Videos from Sermons",
    //     "Personalized Shorts"]

    // const itemList2 =["Live-Stream Services: Increase viewership & followers",
    //     "Customized Videos",
    //     "Create Short Videos from Sermons",
    //     "Done-for-you pictures",
    //     "Personalized Reels",
    //     "Instagram Stories"]

    //     const itemList3 =["Live-Stream Services: Increase viewership & followers",
    //     "Customized Videos",
    //     "Create Short Videos from Sermons",
    //     "Done-for-you pictures",
    //     "Personalized Reels",
    //     "Facebook Stories"]

    //     const itemList4 =["Google advertising",
    //     "Facebook advertising",
    //     "Customized Videos",
    //     "Youtube advertising"]

    return (
        <>
<section id='service1'>
    <section>
        <div class="service-main-div">
            <div class="sr-heading-div">
                <h1>Packages</h1>
                <div></div>
            </div>
            <div class="srv-row-div-one">
                <img src={require('../../assets/images/youtube.png')} alt="" />
                <div class="sr-content-div">
                    <ul>
                        <li><i>-</i> For Up To 2 Social Media Platforms</li>
                        <li><i>-</i>3 Post Per Week</li>
                        <li><i>-</i>All Images, Graphics And CopyWriting Included. Featurd Videos Available</li>
                        <li><i>-</i>Messaging And Comment Moderation Included</li>
                        <li><i>-</i>Boosted Post Add-One Available</li>
                    </ul>
                </div>
            </div>
            <div class="label-div">
                <h1>YoutubeManagement</h1>
            </div>
            <div class="srv-row-div-one">
                <img src={require('../../assets/images/instagram.png')} alt="" />
                <div class="sr-content-div">
                    <ul>
                        <li><i>-</i> For Up To 2 Social Media Platforms</li>
                        <li><i>-</i>3 Post Per Week</li>
                        <li><i>-</i>All Images, Graphics And CopyWriting Included. Featurd Videos Available</li>
                        <li><i>-</i>Messaging And Comment Moderation Included</li>
                        <li><i>-</i>Boosted Post Add-One Available</li>
                    </ul>
                </div>
            </div>
            <div class="label-div">
                <h1>InstagramManagement</h1>
            </div>
        </div>
        <div class="service-main-div">
            <div class="line-div">
            </div>
            <div class="srv-row-div-one">
                <img src={require('../../assets/images/facebook.png')} alt="" />
                <div class="sr-content-div">
                    <ul>
                        <li><i>-</i> For Up To 2 Social Media Platforms</li>
                        <li><i>-</i>3 Post Per Week</li>
                        <li><i>-</i>All Images, Graphics And CopyWriting Included. Featurd Videos Available</li>
                        <li><i>-</i>Messaging And Comment Moderation Included</li>
                        <li><i>-</i>Boosted Post Add-One Available</li>
                    </ul>
                </div>
            </div>
            <div class="label-div">
                <h1>FacebookManagement</h1>
            </div>
            <div class="srv-row-div-one">
                <img src={require('../../assets/images/box.png')} alt="" />
                <div class="sr-content-div">
                    <ul>
                        <li><i>-</i> For Up To 2 Social Media Platforms</li>
                        <li><i>-</i>3 Post Per Week</li>
                        <li><i>-</i>All Images, Graphics And CopyWriting Included. Featurd Videos Available</li>
                        <li><i>-</i>Messaging And Comment Moderation Included</li>
                        <li><i>-</i>Boosted Post Add-One Available</li>
                    </ul>
                </div>
            </div>
            <div class="label-div">
                <h1>DigitalAdvertisementSuport</h1>
            </div>
        </div>
    </section>


    <div class="space-div">
        
    </div>
</section>
            </>
    )
}


