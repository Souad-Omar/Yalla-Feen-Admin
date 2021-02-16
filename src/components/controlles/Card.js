import React from 'react'
import { Link } from 'react-router-dom'
import Button from './button'

function Card(props) {
  return (
    <div className="card m-2 bg-scondary text-dark" style={{width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">
        <Link to={`places/${props.id}`}>
          {props.title}
        </Link>
        </h5>
        <p className="card-text">Description: {props.description}</p>
       
        <Button
          class="btn btn-danger btn-group-sm m-1" 
          name={props.btn1_name}
          onButtonClick={props.delete}
          index={props.index}
          id={props.id}
        />
        <Button 
         class="btn btn-warning btn-group-sm m-1" 
         name={props.btn2_name}
         onButtonClick = {props.approve}
         index={props.index}
         id={props.id}
         /> 
      </div>
    </div>
  )
}

export default Card
