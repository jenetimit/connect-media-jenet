import React, { useEffect ,useRef} from 'react'
import { Container,Row, Col} from 'react-bootstrap'
import '../../style/campaign.scss'
import Parallax from 'react-rellax'
import { useHistory} from "react-router-dom";
var sessionstorage = require('sessionstorage');

export default function Campaigns() {

    let history = useHistory();

    return (
        <>
        
    <section id='campaigns1'>
        <div class="compain-main-div">
            <h1 id="campain-heading-tag">Campaigns</h1>
            <div class="main-div">
                <div class="cube">
                    <div class="top">
                        <div class="cub-content-div">
                            <img src={require('../../assets/images/mike.png')} alt="" id="cube-img" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s,</p>
                            {/* <button onClick={() => history.push('/events-creation')}>Start Here</button> */}
                            {sessionstorage.getItem('token') ===null ?(
                                <>
                                <button onClick={()=> redirectto("event")}>Register to start</button>
                                </>
                                ):(
                                    <>
                                <button onClick={()=>history.push('/events-creation')}>Start Here</button>
                                </>
                                )
                            }
                            <h1>Upcoming Event</h1>
                        </div>
                    </div>
                </div>
                <div class="cube">
                    <div class="top">
                        <div class="cub-content-div-second">
                            <img src={require('../../assets/images/OBJECTS.png')} alt="" id="cube-img_second" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s,</p>
                            {/* <button onClick={() => history.push('/million-posts')}>Start Here</button> */}
                            {sessionstorage.getItem('token') ===null ?(
                                <>
                                <button onClick={()=> redirectto("million")}>Register to start</button>
                                </>
                                ):(
                                    <>
                                <button onClick={()=>history.push('/million-posts')}>Start Here</button>
                                </>
                                )
                            }
                            <h1>Million Post</h1>
                        </div>
                    </div>
                </div>
                <div class="cube">
                    <div class="top">
                        <div class="cub-content-div-third">
                            <img src={require('../../assets/images/hands.png')} alt="" id="cube-img-third" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s,</p>
                            {/* <button onClick={() => history.push('/staticPosts')}>Start Here</button> */}
                            {sessionstorage.getItem('token') ===null ?(
                                <>
                                <button onClick={()=> redirectto("static")}>Register to start</button>
                                </>
                                ):(
                                    <>
                                <button onClick={()=>history.push('/staticPosts')}>Start Here</button>
                                </>
                                )
                            }
                            <h1>StrengtheningMarriage</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- sub section two --> */}

            <div class="main-div">
                <div class="cube">
                    <div class="top">
                        <div class="cub-content-div">
                            <img src={require('../../assets/images/playing.png')} alt="" id="cube-img" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s,</p>
                                {/* <button onClick={() => history.push('/home')}>Start Here</button> */}
                            <h1>Youth Section</h1>
                        </div>
                    </div>
                </div>
                <div class="cube">
                    <div class="top">
                        <div class="sb-two-cub-content-div-second">
                            <img src={require('../../assets/images/israel.png')} alt="" id="sb-two-cube-img_second" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s,</p>
                                {/* <button onClick={() => history.push('/home')}>Start Here</button> */}
                            <h1>Pray For Israel</h1>
                        </div>
                    </div>
                </div>
                <div class="cube">
                    <div class="top">
                        <div class="sb-two-cub-content-div-second">
                            <img src={require('../../assets/images/erth.png')} alt="" id="sb-two-cube-img_third" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s,</p>
                            {/* <button onClick={() => history.push('/home')}>Start Here</button> */}
                            <h1>Evangelism</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>

    )


    function redirectto(type)
    {
        if(type === "event")
        {
            // sessionstorage.setItem("camp","events-creation");
            history.push('/login');
            history.go(0);
        }

        if(type === "million")
        {
            // sessionstorage.setItem("camp","million-posts");
            history.push('/login');
            history.go(0);
        }

        if(type === "static")
        {
            // sessionstorage.setItem("camp","staticPosts");
            history.push('/login');
            history.go(0);
        }
    }
}
