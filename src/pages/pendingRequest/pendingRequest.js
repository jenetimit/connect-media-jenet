import React,{useEffect} from 'react';
import { Url } from '../../GLOBAL/global';
import { Container,Row,Col,Table,Button } from 'react-bootstrap';
import axios from 'axios';
import '../../style/messages.scss';
import '../../style/order.scss';
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
    const [pend_pack,setPend_pack] = React.useState([{}]);
   
    const [process_event,setProcess_event] = React.useState([]);
    const [process_pack,setProcess_pack] = React.useState({});

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
                
                
                console.log("pending",response.data.event);    
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


            axios.get(Url+'processingrequest', { headers: { Authorization: `Bearer ${token}` } ,params:{customer_id: customer_id} })
            .then(response => {
                // If request is good...
                
                // console.log("processing",response.data)
                setProcess_event(response.data.event);
                setProcess_pack(response.data.pack);
                console.log("processing",response.data.event);   
                
               
               
            })
            .catch((error) => {
                console.log('error ' + error);
            });



    }

  return (
    <div >
     
     <Parallax speed={5}>
        <img src={require('../../assets/images/Rectangle 40.png')} alt="bg" width='100%' height={250} style={{
              objectFit:'cover'
          }}/>

       </Parallax>

    <Container className='py-5 '>

      <h2 className='text-center my-5'>Pending/Processing Requests</h2>
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
                                    {/* <td>Item Id</td> */}
                                    <th>Ordered Date</th>
                                    <th>Title</th>
                                    <th>From - To Date</th>
                                   
                                    <th>Cost</th>
                                    <th>Status</th>
                                   
                                   
                                </tr>
                            </thead>

                            <tbody>
                              
                           
                           {pend_event === "No events available" ? <p className='text-center green bold-text-600 my-3'>No Events under Pending</p> :
                           (

                            pend_event.map((data, idx) => (
                                 
                            
                              <tr key={idx}>
                                  {/* <td>{data.event_id}</td> */}
                                  <td>{data.created_at !== null? dateFormat(data.created_at, "mmmm dS, yyyy"):""}</td>
                                  <td>{data.event_title}</td>
                               
                                  <td>{ dateFormat(data.event_from , "mmmm dS, yyyy")}{' - '} {dateFormat(data.event_to , "mmmm dS, yyyy")} </td>

                                 

                                  <td>{data.event_cost}</td>
                                  <td className='error'> {data.event_status} </td>
                                 
                                 
                              </tr>  
                                 
                              ))
                           )}
                            
                            
                                
                                
                              





                              { process_event === "No events available" ? <p className='text-center green bold-text-600 my-3 '>No Events under processing</p> :

                              (
                                <>
                            
                                <tr >
                                    {/* <td>{process_event[0].event_id}</td> */}
                                    <td>{process_event[0].created_at !== null? dateFormat(process_event[0].created_at, "mmmm dS, yyyy"):""}</td>
                                    <td>{process_event[0].event_title}</td>
                                 
                                    <td>{ dateFormat(process_event[0].event_from , "mmmm dS, yyyy")}{' - '} {dateFormat(process_event[0].event_to , "mmmm dS, yyyy")} </td>

                                   

                                    <td>{process_event[0].event_cost}</td>
                                    <td className='warning'>{process_event[0].event_status}</td>
                                   
                                    
                                </tr>  
                                </>
                              )}
                               
                              

                                
    
                                
                            </tbody>
                            
                        </Table>
                      }



                   


                  {packages &&
                   
                        <Table striped bordered hover style={{backgroundColor:'azure'}} className="text-center col-gap">
                            <thead>
                                <tr >
                                    <th >Ordered Date</th>
                                    <th > Sel.Months</th>
                                    <th>Pkg. Specifications</th>


                                    {/* <th>Questionaire
                                      
                                    <tr className='p1pkg p1pkg-heading'>
                                      <th className='mr-left'>Question</th>
                                      <th className='mr-left'>Answer</th>
                                    
                                     
                                    
                                  </tr>
                                    </th> */}

                                    <th >Type of PKG</th>
                                   
                                    <th >Cost</th>
                                    <th >Status</th>
                                   
                                   
                                </tr>
                                
                            </thead>

                            <tbody>


                            {pend_pack === "No packages Available" ? <p className='text-center green bold-text-600 my-3'>No Package under Pending</p> :
                           (

                            Object.keys(pend_pack).map((data,id) =>(

                              
                              <>

                              <tr>
                              
                              <td>{dateFormat(pend_pack[data].pack.created_at, "mmmm dS, yyyy")}</td>
                              <td>{pend_pack[data].pack.months}</td>


                                    {pend_pack[data].spec.map((t,id) =>(
                                      <>
                                        <div style={{display:'flex',flexDirection:'column'}}>
                                          <td>{t.pspec_text}</td>
                                        </div>
                                        
                                        
                                      </>
                                      
                                    ))}

                                   

                              <td>{pend_pack[data].pack.packages_type}</td>
                              <td>{pend_pack[data].pack.packages_cost}</td>
                              <td className='error'>{pend_pack[data].pack.packages_status}</td>     
                              <td> <Button variant="dark" onClick={()=>
                                // {view_pkg(pend_pack[data].pack.packages_id,"pkg")}
                                {view_pkg(pend_pack[data])}
                                }>view</Button></td>   
                              </tr>

                              </>
                            ))


                           ) }

                                    {process_pack === "No packages Available" ? <p className='text-center green bold-text-600 my-3'>No Package under processing</p> :
                                    (

                                      Object.keys(process_pack).map((data,id) =>(

                                                              
                                        <>
          
                                        <tr>
          
                                        <td>{dateFormat(process_pack[data].pack.created_at, "mmmm dS, yyyy")}</td>
                                        <td>{process_pack[data].pack.months}</td>
          
          
                                              {process_pack[data].spec.map((t,id) =>(
                                                <>
                                                  <div style={{display:'flex',flexDirection:'column'}}>
                                                    <td>{t.pspec_text}</td>
                                                  </div>
                                                  
                                                  
                                                </>
                                                
                                              ))}
          
                                            
          
                                        <td>{process_pack[data].pack.packages_type}</td>
                                        <td>{process_pack[data].pack.packages_cost}</td>
                                        <td className='error'>{process_pack[data].pack.packages_status}</td>     
                                        <td> <Button variant="dark" onClick={()=>
                                          // {view_pkg(pend_pack[data].pack.packages_id,"pkg")}
                                          {view_pkg(process_pack[data])}
                                          }>view</Button></td>   
                                        </tr>
          
                                        </>
                                      ))
          

                                    )}

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
      
    history.push( { pathname: '/order-view',order:data,type:value})
    // history.go(0)
  }

  function view_pkg(pkg_id,type)
  {
    console.log("view_pkg",pkg_id)
    // console.log('/pending_req/'+pkg_id);
    // history.push('/pending_req/'+pkg_id);
    history.push({pathname:'/pending_req',data:pkg_id});
    // history.go(0)
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
