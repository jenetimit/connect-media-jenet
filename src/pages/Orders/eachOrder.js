import React from 'react';
import { Container,Row,Col,Card,Button,Modal } from 'react-bootstrap';
import '../../style/order.scss'
import { Url,notImage } from '../../GLOBAL/global';
import axios from 'axios';
import { useHistory,Link} from "react-router-dom";
import dateFormat from 'dateformat';
import Parallax from 'react-rellax'
import { toast, ToastContainer } from 'react-toastify';

var sessionstorage = require('sessionstorage');

export default function EachOrder(props) {
    let history = useHistory();
    const order = props.order;
    console.log("type",props.type);
    
    const _type = props.type;
    // console.log("type",type);
    //  console.log("order",order);
    const [photo,setPhoto] = React.useState();
    const [pkgPic , setpkgPic] = React.useState();

    if((_type === "camp") || (_type === "event")) 
    {
        console.log("type",_type)
        // setPhoto("http://connect.gitdr.com/"+order.plan.photo)
    }
       
    
    const [modelmsg,setmodelmsg] = React.useState(false);

  
   
    

  return (
  
    <div>

<Parallax speed={5}>
            <img src={require('../../assets/images/Rectangle 40.png')} alt="bg" width='100%' height={250} style={{
              objectFit:'cover'
          }}/>

       </Parallax>
       <h2 className='text-center my-5'>My Orders</h2>

<Container className='center-align'>

       
        <Row >
           
            {/* <Col sm={12} md={8} xl={8} xxl={8}> */}
                
                    
                      
                      

                        <Card className='text my-5'>


                            { _type === "camp" || _type === "event"  ? (
                                

                                <Card.Body >

                                    

                                    <p className='bold-text-600'>{order.plan[0].camp_type === "MPOST"?"MILLION POSTS ":"STATIC POSTS"}</p>
                                  
                                  
                                    <hr></hr>
                                
                              
                                    
                                    <p> Tittle : {order.plan[0].camp_title?order.plan[0].camp_title:order.plan[0].event_title }</p>
                                    
                                    <p>Description : {order.plan[0].camp_desc?order.plan[0].camp_desc:dateFormat(order.plan[0].event_from, "mmmm dS, yyyy")+"  -  "+dateFormat(order.plan[0].event_to, "mmmm dS, yyyy")}</p>

                                    <p>Cost : {order.order.order_amt}{''}</p>

                                    <img src={order.order.photo === undefined || null ?notImage :'http://connectmedia.gitdr.com/public/'+order.order.photo} alt={order.order.order_id} width={400} height={400}/>
                                    
                                    <Button variant="dark" className='list-pkg my-3 ' onClick={()=>sent()}>sent</Button>
                                
                                   
                                </Card.Body> )
                                    : 
                                    (
                                        
                                        <Card.Body>
                                           {/* {console.log("else ",order)} */}
                                          
                                        <p className='bold-text-600'>{order.PACKAGE.packages_type === "STD" ? "STANDRAD PACKAGE":"CUSTOMIZED PACKAGE"}</p>
                                        {/* <p>Order Id : {order.order.order_id}</p> */}
                                    
                                        <hr></hr>

                                        <p className='heading bold-text py-3'>Specifications</p>
                                        

                                        {order.PACKAGE_details.map((d,id) =>

                                            <div className=''>
                                                <p>{d.pspec_text}</p>
                                                <p>{d.pspec_ans}</p>

                                            </div>
                                            
                                        
                                        )}

                                        <p className='heading bold-text py-3'>Questionnaire</p>

                                        <div className='align-start bold-text'>
                                            <p>Question</p>
                                            <p>Answer</p>
                                        </div>


                                        {order.Question.map((d,id) =>

                                        <div className='align-start'>
                                            <p className='bold-text-600'>{d.pspec_text}</p>
                                            <p>{d.pspec_ans}</p>

                                        </div>


                                        )}


                                        <p>Package Cost : <span className='bold-text'>{order.PACKAGE.packages_cost}</span></p>
                                        <p>Selected Months : <span className='bold-text'>{order.PACKAGE.months}</span></p>
                                        <p>Drive Id : <a href={order.order.drive_id} target="_blank" rel="noreferrer">click here</a></p>
                                        <p>Order Status : <span className='bold-text green'>{order.PACKAGE.packages_status}</span></p>
                                        

                                        <Button variant="dark" className='list-pkg my-3' onClick={()=>sent()}>sent</Button>
                                           
                                        </Card.Body>
                                    )
                              
                            }



                           
                        </Card>


                        {
                        modelmsg &&

                        <Modal.Dialog className='modal-msg'>
                            <Modal.Header >
                                <Modal.Title style={{color:'black'}}>Sent </Modal.Title>
                               <p style={{color:'black'}}>title : {order.plan.camp_title?order.plan.camp_title:order.plan.event_title}</p>
                                {/* {title==="replay"?"Replay To Messages" :" Sent Message"} */}
                            </Modal.Header>

                            <Modal.Body>
                                <input type="text" placeholder='type here ..' id="message" className='msg-text' />
                            </Modal.Body>

                            <Modal.Footer>

                                
                                <Button variant="secondary" onClick={closebtn}>Close</Button>
                                
                                <Button variant="dark" onClick={()=>sentmessage()}>sent</Button>
                                
                                
                            </Modal.Footer>
                        </Modal.Dialog>
                    }
                 
                
            {/* </Col> */}
        </Row>

        <ToastContainer />

    </Container>
</div>
  );

    function sent()
    {
        setmodelmsg(!modelmsg);
    }

    function closebtn()
    {
        setmodelmsg(false)
    }

    function sentmessage()
    {
        var msg = document.getElementById('message').value;
        console.log(msg)

        const token = sessionstorage.getItem("token");
        const customer_id = sessionstorage.getItem("customerId");

        var formdata = new FormData();



        formdata.append("customer_id",customer_id);
        formdata.append("order_id",order.order.order_id);
        formdata.append("message",msg);
        formdata.append("msg_parentmsg",0);
        formdata.append("msg_type",'I');


        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }

        axios({
        method: 'post',
        url: Url+'Message',
        data:formdata,
        headers: headers
        })
        .then(function (response) {
            //handle success
            console.log(response.data);
            toast.success("Message Sent !!",{autoClose:3000})
            setTimeout(() => history.push( { pathname: '/orders'}),3000) 
            
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    }
    
}
