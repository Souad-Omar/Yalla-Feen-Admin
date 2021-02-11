import React from 'react'

function Card(props) {
  return (
    <div className="card m-2 bg-info text-light" style={{width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-dark">Author: {props.author}</h6>
        <p className="card-text">Description: {props.description}</p>
       
      </div>
    </div>
  )
}

export default Card
