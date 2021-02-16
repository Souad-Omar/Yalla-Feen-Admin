import React from 'react';
import "./materialButton.css"
const MaterialButton = ({text, type, position = "right"}) => {
  return (
      <button type={type}
              className={`material-button ${position}`}
      >{text}</button>
  );
};
export default MaterialButton;