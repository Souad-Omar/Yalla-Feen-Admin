import React from 'react';
import './materialCheckbox.css';

const MaterialCheckbox = ({label, name, value = false}) => {
  const [isChecked, setIsChecked] = React.useState(value);
  const clickHandler = () => {
    setIsChecked(!isChecked);
  };
  return (
      <div className="material-checkbox">
        <div className={'fake-checkbox' + (isChecked ? ' checked' : '')} onClick={clickHandler}></div>
        <input type="checkbox" value={isChecked} name={name}/>
        <label>{label}</label>
      </div>
  );
};
export default MaterialCheckbox;