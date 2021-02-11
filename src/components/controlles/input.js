import React from 'react'

export default function Input(props) {
  return (
    <>
      <label className="col-form-label">{props.label}</label>
      <input className={`form-control mt-2 ${props.errors ? "is-invalid" : "" }` } 
       onChange={(e)=> props.onInputChange(e)}
       name={props.name}
       value={props.value}
       type={props.type}
       placeholder={props.placeholder}/>
      
        <small className="text-danger" hidden={props.errors?false:true}>
         {props.errors}
       </small>
       <hr/> 
    </>
  )
}


// bootstrap classes i want {is-invalid}