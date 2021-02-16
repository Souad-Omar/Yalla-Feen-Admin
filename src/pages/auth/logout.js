import React from 'react'

export default function Logout(props) {
  localStorage.removeItem('token');
  localStorage.removeItem('username')
  props.history.push("/login");
 
  
}
