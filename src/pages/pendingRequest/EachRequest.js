import React from 'react'
import { useParams } from "react-router-dom";
import { Container,Row,Col,Card,Button,Modal } from 'react-bootstrap';
import '../../style/order.scss'
import { Url,imgUrl } from '../../GLOBAL/global';
import axios from 'axios';
import { useHistory,Link} from "react-router-dom";
import dateFormat from 'dateformat';
import Parallax from 'react-rellax';

var sessionstorage = require('sessionstorage');

export default function EachRequest(props) {

    const {id} = useParams();
    const [pkgList,setpkgList] = React.useState([{}]);
    // const [pkgData,setPkgData] = React.useState({});
    let history = useHistory();

    console.log("props" ,props.data)
    const pkgData = props.data;

    console.log("data" ,pkgData.pack.months)

   
  return (
    
    <section>
       <Parallax speed={5}>
        <img src={require('../../assets/images/Rectangle 40.png')} alt="bg" width='100%' height={250} style={{
              objectFit:'cover'
          }}/>

       </Parallax>
         
            <div className='view-msg '>
                      
                      

                      <Card className='text my-5 py-5'>
                         
                                      <Card.Body>

                                       

                                       <p className='type-pkg '>{pkgData.pack.packages_type === "CUST" ?"Customized Package":"Standard Package"}</p>

                                       
                                        <p className='heading bold-text py-3'>Specifications</p>
                            
                                            {
                                                pkgData.spec.map((p,id) => (
                                                <>
                                                <div className='align-start'>
                                                    <p>{p.pspec_text}</p>
                                                
                                                </div>

                                                </>
                                                ))
                                            }

                                        <p className='heading bold-text py-3'>Questionnaire</p>
                                                 <div className='align-start bold-text'>
                                                   
                                                    <p>Question</p>
                                                    <p>Answer</p>
                                                </div>
                            
                                            {
                                                pkgData.question.map((p,id) => (
                                                <>
                                                <div className='align-start'>
                                                    <p className='bold-text-600'>{p.pspec_text}</p>
                                                    <p>{p.pspec_ans}</p>
                                                </div>

                                                </>
                                                ))
                                            }

                                   
                                      <p className='bold-text'>Status : {pkgData.pack.packages_status}</p>
                                      <p className='bold-text'>Cost : {pkgData.pack.packages_cost}</p>

                                  

                                      </Card.Body>
                               
                      </Card>

                      
                      
                  </div>
         
                    </section>

  )
}
