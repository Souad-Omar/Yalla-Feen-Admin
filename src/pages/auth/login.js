import { useState, useEffect } from "react";
import Input from "../../components/controlles/input";
import Button from "../../components/controlles/button";
import axios from "axios";
import * as ACTIONS from '../../store/actions/actions'

import { useSelector, useDispatch } from "react-redux";
import { Router } from "react-router-dom";
// import * as ACTIONS from "../../store/actions";

export default function Login(props) {
  document.title = "login";
  // console.log(props);
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  
  const [isAdmin, setisAdmin] = useState("")
  const login = useSelector(state => state.login)
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return re.test(String(email).toLowerCase());
  }

  const onInputChange = (e) => {
    // console.log(e.target.name);

    if (e.target.name === "email") {
      setLoginForm({
        ...loginForm,
        email: e.target.value,
      });
      if (e.target.value.length < 1) {
        setFormErrors({
          ...formErrors,
          email: "Field Required",
        });
      } else {
        if (!validateEmail(e.target.value)) {
          console.log("invalid");
          setFormErrors({
            ...formErrors,
            email: "InVaild Email",
          });
        } else {
          setFormErrors({
            ...formErrors,
            email: "",
          });
        }
      }
    } else {
      setLoginForm({
        ...loginForm,
        password: e.target.value,
      });
      if (e.target.value.length < 1) {
        setFormErrors({
          ...formErrors,
          password: "Password is required",
        });
      } else {
        setFormErrors({
          ...formErrors,
          password: "",
        });
      }
    }
  };
  const onButtonClick = async(e) => {
    e.preventDefault();
    
    const body = {email:loginForm.email,password:loginForm.password};
    console.log(login.isAdmin);
   await dispatch(ACTIONS.LOGIN(body));
    
    if(!localStorage.getItem('token')) {
      setisAdmin("You must enter email and password for admin staff")
    }else{
      props.history.push("/home");
      // console.log(body);
    }
  }
  return (
    <div className="container mt-5 ">
      <div>
     
        <form className="form-group border p-4">
        <small className="text-danger font-weight-bold" >{isAdmin}</small> 
        <br/>
          <Input
            value={loginForm.email}
            label={"Email Address"}
            name={"email"}
            onInputChange={onInputChange}
            type={"email"}
            placeholder={"Enter Email Address"}
            errors={formErrors.email}
          ></Input>

          <Input
            value={loginForm.password}
            label={"Password"}
            name={"password"}
            onInputChange={onInputChange}
            type={"password"}
            placeholder={"Enter Password"}
            errors={formErrors.password}
          ></Input>

          <Button
            onButtonClick={onButtonClick}
            class={"btn btn-primary m-2"}
            name={"Login"}
          ></Button>
        </form>
      </div>
    </div>
  );
}
