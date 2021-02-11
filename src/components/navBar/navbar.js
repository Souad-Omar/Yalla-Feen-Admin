import React from 'react'
import { Link} from "react-router-dom";
import {useSelector} from 'react-redux';
import Span  from '../controlles/navSpan'

export default function Navbar() {
 
  return (
    <> 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav ">
                <li className="nav-item active">
                <Link to="/home" >
                    <Span class={"text-info m-1 text-lg font-weight-bold"} name={"Yalla-Feen administration"}/>
                </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item  ">
                
                  <Link to="/login">
                    <Span class={"text-info m-1 text-lg font-weight-bold"} name={'login'}/>
                  </Link>
                  <>
                    <Link to="/login">
                      <Span class={"text-info m-1 text-lg font-weight-bold"} name={'Logout'}/>
                    </Link>
                    <Span class={"text-info m-1 text-lg font-weight-bold "} />   
                  </>
                  
                </li>
             </ul>
        </nav>
     
    </>
  )
}
