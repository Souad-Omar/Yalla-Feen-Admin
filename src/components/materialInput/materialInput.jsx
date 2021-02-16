import React from 'react';
import './materialInput.css';

const MaterialInput = ({label, name, placeholder, validator, isRequired, type = 'text', value = ''}) => {
  const [text, setText] = React.useState(value);
  const [error, setError] = React.useState('');
  const onChangeHandler = (e) => {
    setText(e.target.value);
  };
  const onBlurHandler = (e) => {
    validator && setError(validator(e.target.value))
  }
  return (
      <div className="material-input">
        {label && <label>{label + (isRequired ? '*' : '')}</label>}
        <input type="text"
               name={name}
               placeholder={placeholder}
               required={isRequired}
               type={type}
               value={text}
               onChange={onChangeHandler}
               onBlur={onBlurHandler}
        />
        {error &&
        <small className="error-message">{error}</small>}
      </div>
  );
};
export default MaterialInput;