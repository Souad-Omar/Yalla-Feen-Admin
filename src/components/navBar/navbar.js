import React from 'react'
import { Link} from "react-router-dom";
import {useSelector} from 'react-redux';
import Span  from '../controlles/navSpan'

export default function Navbar() {
  const login = useSelector(state => state.login)
  return (
    <> 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav ">
                <li className="nav-item active">
                <Link to="/home" >
                    <Span 
                          class={"text-info m-1 text-lg font-weight-bold"}
                          name={"Yalla-Feen administration"}/>
                </Link>
                <Link to="/places-map" >
                    <Span 
                          class={"text-info m-1 text-lg font-weight-bold"}
                          name={"Places Map"}/>
                </Link>
                <Link to="/report" >
                    <Span 
                          class={"text-info m-1 text-lg font-weight-bold"}
                          name={"Report"}/>
                </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item  ">
                 {login.isLogged?( <>
                  <Span class={" m-1 text-lg font-weight-bold"} name={`hello ${login.username}`}/>
                    <Link to="/logout">
                      <Span class={"text-info m-1 text-lg font-weight-bold"} name={'Logout'}/>
                    </Link>
                    <Span class={"text-info m-1 text-lg font-weight-bold "} />   
                  </>):( <Link to="/login">
                    <Span class={"text-info m-1 text-lg font-weight-bold"} name={'login'}/>
                  </Link>)}

                </li>
             </ul>
        </nav>
     
    </>
  )
}
