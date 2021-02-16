import React from 'react'

export default function Button(props) {
  return (
   <button 
          className={props.class}
          onClick={(e)=> props.onButtonClick(e,props.index,props.id)}        
   >{props.name}</button>
  )
}
