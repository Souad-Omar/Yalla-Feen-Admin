import React from 'react';
import "./materialButton.css"
const MaterialButton = ({text, type, position = "right", onClickHandler}) => {
  return (
      <button type={type}
              className={`material-button ${position}`}
              onClick={onClickHandler}
      >{text}</button>
  );
};
export default MaterialButton;