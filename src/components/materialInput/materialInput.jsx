import React from 'react';
import './materialInput.css';

const MaterialInput = ({label, name, placeholder, isRequired, errorMessage, type = "text",value =""}) => {
  const [text, setText] = React.useState(value);
  const onChangeHandler = (e) =>{
    setText(e.target.value)
  }
  return (
      <div className="material-input">
        <label>{label + (isRequired ? '*' : '')}</label>
        <input type="text"
               name={name}
               placeholder={placeholder}
               required={isRequired}
               type={type}
               value={text}
               onChange={onChangeHandler}
        />
        {errorMessage &&
        <small className="error-message">{errorMessage}</small>}
      </div>
  );
};
export default MaterialInput;