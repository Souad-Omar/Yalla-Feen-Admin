import React from 'react';
import './materialCheckbox.css';

const MaterialCheckbox = ({label, name, value = false}) => {
  const [isChecked, setIsChecked] = React.useState(value);
  return (
      <div className="material-checkbox">
        <div className={'fake-checkbox' + (isChecked && " checked")}></div>
        <input type="checkbox" value={isChecked} name={name}/>
        <label>{label}</label>
      </div>
  );
};
export default MaterialCheckbox;