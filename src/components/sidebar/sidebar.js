import React,{useState} from 'react'
import '../../style/sidebar.scss'
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from "react-icons/ai";

export default function Sidebar() {

  const [isOpen, setIsopen] = useState(false);

  const sidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }


  return (
    <>
    <div>
      <div className="container-fluid mt-3">
                
              
                {/* <div className="btn btn-primary" onClick={sidebar} ></div> */}
                <FiMenu size={40} onClick={sidebar}/>
                <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                    <div className="sd-header">
                        <h4 className="mb-0"></h4>
                        <AiOutlineClose size={40} onClick={sidebar}/>
                        {/* <div className="btn btn-primary" onClick={sidebar} ><i className="fa fa-close"></i></div> */}
                    </div>
                    <div className="sd-body">
                        <ul>
                            <li><a className="sd-link">About Us</a></li>
                            <li><a className="sd-link">Why Connect</a></li>
                            <li><a className="sd-link">Services</a></li>
                            <li><a className="sd-link">Campaigns</a></li>
                            <li><a className="sd-link">Packages</a></li>
                            <li><a className="sd-link">Contact</a></li>
                            <li><a className="sd-link">Admin</a></li>
                        </ul>
                    </div>
                </div>
                <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={sidebar} ></div>
       </div>
       
    </div></>

  )
}
