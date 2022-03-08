import React,{useEffect} from 'react';
import { Url } from '../../GLOBAL/global';
import { Container,Row,Col,Table,Button } from 'react-bootstrap';
import axios from 'axios';
import '../../style/messages.scss';
import { useHistory} from "react-router-dom";
import dateFormat from 'dateformat';
import Parallax from 'react-rellax'
var sessionstorage = require('sessionstorage');

export default function Index() {


    let history = useHistory();
    

    const[orders,setOrders] = React.useState([]);
    // const [length,setLength] = React.useState(0);
    const [plans,setPlans] = React.useState(false);
    const [camps ,setCamps] = React.useState(false)
    const [packages,setPackages] = React.useState(false);

    const [pend_event,setPend_event] = React.useState([]);
    const [pend_pack,setPend_pack] = React.useState({});
    const [pend_pkg_len,setPkgLen] = React.useState(0);
    const [result] = React.useState([]);

    const [process_event,setProcess_event] = React.useState([]);
    const [process_pack,setProcess_pack] = React.useState([]);

    const [pkgData] = React.useState([]);
    const [campData] = React.useState([]);
    const [p1pkg] = React.useState([]);
    const[pkg_type,setPkg_type] =React.useState('STD');

    useEffect(() => {

        getDatas();

      },[]);


      async function getDatas()
    {
            const token = sessionstorage.getItem("token");
            const customer_id = sessionstorage.getItem("customerId");


            await axios.get(Url+'pendingrequest', { headers: { Authorization: `Bearer ${token}` } ,params:{customer_id: customer_id} })
            .then(response => {
                // If request is good...
                
                
                // console.log("pending pack",response.data.pack);    
                setPend_event(response.data.event);
                setPend_pack(response.data.pack);

                console.log("pack",pend_pack)
                // for( var i in pend_pack)
                // {
                //     result.push([i,pend_pack[i]])
                // }

                // console.log("result",result)
                
               
            })
            .catch((error) => {
                console.log('error ' + error);
            });


            // axios.get(Url+'processingrequest', { headers: { Authorization: `Bearer ${token}` } ,params:{customer_id: customer_id} })
            // .then(response => {
            //     // If request is good...
                
            //     setProcess_event(response.data.event);
            //     setProcess_pack(response.data.pack);
            //     // console.log("processing",response.data); 
                
               
               
            // })
            // .catch((error) => {
            //     console.log('error ' + error);
            // });



    }

  return (
    <div >
     
     <Parallax speed={5}>
        <img src={require('../../assets/images/Rectangle 40.png')} alt="bg" width='100%' height={250} style={{
              objectFit:'cover'
          }}/>

       </Parallax>

    <Container className='py-5 '>

      <h2 className='text-center my-5'>Pending Requests</h2>
        <Row className='py-5'>
            

            <Col sm={12} md={12} xl={12} xxl={12}>

              <div className='table-title'>
                <div onClick={()=>events()} className='table-icons'>
                  <img src={require('../../assets/images/Group 338.png')} alt="events" width={150} height={150} id="icon1"  style={{objectFit:'contain'}} />
                  <p  id="event">EVENTS</p>
                </div>

               

                <div className='table-icons' onClick={()=>pkg()}>
                  <img src={require('../../assets/images/Group 338.png')} alt="events" width={150} height={150} id="icon3" />
                  <p id='pkg' >PACKAGES</p>
                </div>
               
                
              </div>
                
                    <div className='view-msg'>
                      
                       {plans &&
                       
                        <Table striped bordered hover style={{backgroundColor:'azure'}} className="text-center">
                            <thead>
                                <tr>
                                    <td>Item Id</td>
                                    <th>Ordered Date</th>
                                    <th>Title</th>
                                    <th>From - To Date</th>
                                   
                                    <th>Cost</th>
                                    <th>Status</th>
                                   
                                   
                                </tr>
                            </thead>

                            <tbody>

                           
                              {/* {console.log(orders.splice(0,1))} */}
                                {/* {console.log(orders.length)} */}
                              
                              { pend_event.length === 0 ? <p className='text-center'>no orders</p> :
                                pend_event.map((data, idx) => (
                             
                                // console.log()
                            
                                <tr key={idx}>
                                    <td>{data.event_id}</td>
                                    <td>{data.created_at !== null? dateFormat(data.created_at, "mmmm dS, yyyy"):""}</td>
                                    <td>{data.event_title}</td>
                                 
                                    <td>{ dateFormat(data.event_from , "mmmm dS, yyyy")}{' - '} {dateFormat(data.event_to , "mmmm dS, yyyy")} </td>

                                   

                                    <td>{data.event_cost}</td>
                                    <td>{data.event_status}</td>
                                   
                                    {/* <td>
                                        
                                        <Button variant="dark" onClick={()=>{view(data,"event")}}>view</Button><br></br>
                                    
                                    
                                    </td> */}
                                </tr>  
                               
                              
                                   
                                )) }


                                
    
                                
                            </tbody>
                            
                        </Table>
                      }



                   


                  {packages &&
                        <Table striped bordered hover style={{backgroundColor:'azure'}} className="text-center col-gap">
                            <thead>
                                <tr >
                                    <th >Ordered Date</th>
                                    <th>Package Details
                                      
                                    <tr className='p1pkg p1pkg-heading'>
                                      <th className='mr-left'>No:</th>
                                      <th className='mr-left'>Type</th>
                                      <th className='mr-left'>Months</th>
                                     
                                    
                                  </tr>
                                    </th>
                                    <th >Type of PKG</th>
                                    {/* <th >Drive Id</th> */}
                                    <th >Cost</th>
                                    <th >Status</th>
                                   
                                   
                                </tr>
                                
                            </thead>

                            <tbody>
                            {/* {console.log("hello",Object.keys(pend_pack).length)}
                            {setPkgLen(Object.keys(pend_pack).length)} */}
                       

                            {Object.keys(pend_pack).map((data,id) =>(
                               pend_pack[data].map((d,id)=>(
                                <tr key={id}>
                                    <td>{d.created_at !== null? dateFormat(data.created_at, "mmmm dS, yyyy"):""}</td>
                                    <td>
                                        <div className='p1pkg '>
                                            <p>{d.pspec_text}</p>
                                            <p>{d.pspec_ans}</p>
                                            <p>{d.months}</p>
                                        </div>
                                        
                                
                                    </td>
                                
                                    <td>{d.packages_type}</td>
                                

                                    <td>{d.packages_cost}</td>
                                    <td>{d.packages_status}</td>
                                
                                    {/* <td>
                                    
                                        <Button variant="dark" onClick={()=>{view(data,"pkg")}}>view</Button><br></br>
                                
                                
                                    </td> */}
                                </tr>  
                               ))
                               
                            ))}
                        
                                {/* { result.length === 0 ? <p className='text-center'>no orders</p> :(
                                    result.map((data, idx) => (
                              
                                //   console.log("pkgdata inside",data[idx+1])
                                
                                 <tr key={idx}>
                                     <td>{data.created_at !== null? dateFormat(data.created_at, "mmmm dS, yyyy"):""}</td>
                                     <td>
                                   
                                  
                                     </td>
                                   
                                       <td>{data.packages_type}</td>
                                    

                                     <td>{data.packages_cost}</td>
                                     <td>{data.packages_status}</td>
                                   
                                     <td>
                                        
                                         <Button variant="dark" onClick={()=>{view(data,"pkg")}}>view</Button><br></br>
                                    
                                    
                                     </td>
                                 </tr>  
                              
                                )) )} */}
                     
    
                                 
                            </tbody> 
                            
                        </Table>
                      }
                    </div>
             





                
            </Col>
        </Row>

    </Container>
</div>
  );


  function view(data,value)
  {
      
    
    //   setOrderId(orderId)
    history.push( { pathname: '/order-view',order:data,type:value})
      
  }

  function events()
  {
    setPlans(!plans);
    document.getElementById('icon1').style.display="none";
    
    document.getElementById('icon3').style.display="none";
   
    setPackages(false);
    document.getElementById('event').style.color="#F1C40F";
    
    document.getElementById('pkg').style.color="white"
  }

  function pkg()
  {
    setPackages(!packages);
    document.getElementById('icon1').style.display="none";
    
    document.getElementById('icon3').style.display="none";
    setPlans(false);
  
    document.getElementById('pkg').style.color="#F1C40F";
    document.getElementById('event').style.color="white";
  
  }


 

}
