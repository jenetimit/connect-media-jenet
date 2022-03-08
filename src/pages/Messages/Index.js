import React,{useEffect} from 'react';
import { Container,Row,Col,Table,Button,Modal } from 'react-bootstrap';
import { Url } from '../../GLOBAL/global';
import axios from 'axios';
import '../../style/messages.scss';
import dateFormat from 'dateformat';
import { useHistory,Link} from "react-router-dom";
import { FcLeftDown,FcRightUp } from "react-icons/fc";
import Parallax from 'react-rellax'
var sessionstorage = require('sessionstorage');

export default function Index() {
    let history = useHistory();
    const [length,setLength] = React.useState(0);
    
    const [allmessages,setAlmessages]= React.useState([{}]);
   
   

    useEffect(() => {

        getDatas();

      },[allmessages!== null]);


    async function getDatas()
    {
            const token = sessionstorage.getItem("token");
            const customer_id = sessionstorage.getItem("customerId");

            // get all messages where msg_type = "I"

            await axios.get(Url+'getmessages', { headers: { Authorization: `Bearer ${token}`,'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'get' } ,params:{customer_id: customer_id} })
            .then(response => {
                // If request is good...
                console.log(response.data.data);
                setAlmessages(response.data.data);
                setLength(allmessages.length)
            })
            .catch((error) => {
                console.log('error ' + error);
            });

    }


    
  return (
      <>      
      
    <div>

    <Parallax speed={5}>
        <img src={require('../../assets/images/Rectangle 40.png')} alt="bg" width='100%' height={250} style={{
              objectFit:'cover'
          }}/>

       </Parallax>
        <Container>
            <h2 className='text-center my-5'>Messages</h2>
            <Row  className='my-5 '>
                <Col sm={12} md={2} xl={2} xxl={2}>
                   
                </Col>

                <Col sm={12} md={8} xl={8} xxl={8} >
                 
                 
                        <div className='view-msg mb-5'>
                            {/* <p>Purchased Items</p> */}


                            {length >0 ?(
                            
                            <Table striped bordered hover className="text-center" style={{backgroundColor:'azure'}}>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>sent/recieve</th>
                                        <th>Message</th>
                                        <th>Status</th>
                                       
                                        {/* <th>Selected Months</th> */}
                                    </tr>
                                </thead>

                                <tbody>

                                 

                                    {allmessages.map((data, idx) => (
                                   
                               
                                    <tr key={idx}>

                                        <td>{data.created_at !== null? dateFormat(data.created_at, "mmmm dS, yyyy"):""}</td>
                                      
                                        <td>{data.msg_type===("I"||"R")?<FcRightUp/>:<FcLeftDown/>}</td>

                                        <td>{data.msg_user}</td>
                                        <td>{data.msg_status}</td>
                                        
                                        <td>
                                        <Button variant="dark" type='button' onClick={() => viewall(data)}>view all</Button><br></br>
                                    
                                        </td>
                                    </tr>  
                                   
                                  
                                       
                                    ))} 
        
                                    
                                </tbody>
                                
                            </Table>
                            ):<p className='text-center'>No Messages send yet</p>}
                        </div>
                 


                   
                </Col>
            </Row>

        </Container>
    </div>
    </>

    );

    

    function viewall(data)
    {
        // setPmsg(data);
        // setmodelmsg(true);
        
        console.log("pmsg",data);
        history.push({pathname:'/related-msgs',data:data});
    }

    
    
}
