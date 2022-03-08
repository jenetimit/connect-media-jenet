import React,{useEffect, useState} from 'react'
import { Container ,Row ,Col} from 'react-bootstrap'
import '../../style/home.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsList } from "react-icons/bs";
// import { FiUser,FiMenu } from "react-icons/fi";
import { useHistory} from "react-router-dom";
import { fadeInUp } from 'react-animations'
import { StyleSheet, css } from 'aphrodite';
import { Dropdown } from 'react-bootstrap';
import Sidebar from '../sidebar/sidebar';
import Buttons from '../Packages/Buttons';
import '../../style/button.scss'
import { animateScroll as scroll } from "react-scroll";
import { HashLink as Link} from 'react-router-hash-link';
import { FaUserTie }  from "react-icons/fa";
import axios from 'axios';
import { Url } from '../../GLOBAL/global';
var sessionstorage = require('sessionstorage');

console.log('token is',sessionstorage.getItem('token'));



const styles = StyleSheet.create({
    bounce: {
      animationName: fadeInUp,
      animationDuration: '10s'
    }
})

export default function Navbar(props,id) {

    let history = useHistory();
    const[orderCount,setOrderCount] =React.useState(0);

    useEffect(() => {

        const token = sessionstorage.getItem("token");
        const customer_id = sessionstorage.getItem("customerId");

        async function getDatas()
        {
            await axios.get(Url+'ordercount', { headers: { Authorization: `Bearer ${token}`,'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'get' } ,params:{customer_id: customer_id} })
            .then(response => {
                // If request is good...
                console.log(response.data.count);
                setOrderCount(response.data.count);
                // setAlmessages(response.data.data);
                // setLength(allmessages.length)
            })
            .catch((error) => {
                console.log('error ' + error);
            });
        }

        getDatas();

        

      },[]);


    return (
        <>
      
            <section className='navbar'>
                    <img src={require('../../assets/images/logo.png')}  alt='header-logo-img' onClick={()=>home()}/>
                    
                    <div className='center-align'>

                   
                                 
                        
                            {sessionstorage.getItem('token') !== null ?(
                                <>
                               <Dropdown>
                                <Dropdown.Toggle variant="Secondary" id="dropdown-basic" className='menu-btn pointer'>
                                <FaUserTie size={40} className='menu-nav'/>
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{border: 'none'}}>
                                    <Dropdown.Item onClick={profileInfo}>Modify Profile</Dropdown.Item>
                                    <Dropdown.Item href="/my-requests">My Requets</Dropdown.Item>
                                    <Dropdown.Item href="/orders">My Orders <span className='nav-count'>{orderCount}</span></Dropdown.Item>
                                    <Dropdown.Item href="/messages">Messages</Dropdown.Item>
                                    <Dropdown.Item href="/gene-enquiry">General Enquiry</Dropdown.Item>
                                   
                                </Dropdown.Menu>
                            </Dropdown>
                            </>
                            ):(
                                <></>
                            )
                            }
                            <Sidebar />
                              

                           

                         
                    
            
                    
                    </div>

                    
                
            </section>

            {/* <Container className='profile_div'>
                {console.log("hello")}
            </Container> */}
        </>
      
    )

    

    function profileInfo()
    {
        history.push('/profile');
    }

    // function signout()
    // {
    //     sessionstorage.clear();
    //     history.push('/login');
    //     history.go(0)
    // }

    function home()
    {
        history.push('/home');
        // scroll.scrollToTop();
    }

}