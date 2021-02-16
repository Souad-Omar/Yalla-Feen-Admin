import './materialSelect.css';
import React from 'react';

const MaterialSelect = ({options = [], name, label, isRequired, noSelectionText, value = ''}) => {
  const [selectedValue, setSelectedValue] = React.useState(value);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const onClickHandler = (e) => {
    const type = e.target.dataset.type;
    switch (type){
      case "select":
        setIsExpanded(!isExpanded)
        break;
      case "option":
        setIsExpanded(false);
        setSelectedValue(e.target.dataset.value);
        break;
    }
  };
  return (
      <div className={`material-select${isExpanded ? ' expanded' : ''}`}
           onClick={onClickHandler}
      >
        {label && <label>{`${label}${isRequired ? '*' : ''}`}</label>}
        <div className="fake-select">
          <div className="selected-option"
               data-type = "select"
               data-value={selectedValue}
          >{selectedValue || noSelectionText}</div>
          <div className="options">
            {options.map(option => <div key={option} className={`option${option === selectedValue ? ' selected' : ''}`} data-type = "option" data-value={option}>{option}</div>)}
          </div>
          <div className={`arrow`}></div>
        </div>
        
        <select name={name} value={selectedValue} >
          <option value="">{noSelectionText}</option>
          {options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
      </div>
  );
};

export default MaterialSelect;