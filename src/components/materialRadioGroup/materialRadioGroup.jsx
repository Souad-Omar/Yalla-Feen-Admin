import React from 'react';
import './materialRadioGroup.css';

const MaterialRadioGroup =
    ({values = [], name, orientation = 'horizontal', selected = '', header, isRequired}) => {
      const [currentSelection, setCurrentSelection] = React.useState(selected);
      const onClickHandler = (e) => {
        e.target.dataset.value && setCurrentSelection(e.target.dataset.value);
      };
      return (
          <div className={'material-radio-group ' + orientation}
               onClick={onClickHandler}>
            {header && <div className="header">{`${header}${isRequired?"*":""}`}</div>}
            {values.map((value) =>
                <div key={value} className="radio-button-wrapper">
                  <input type="radio"
                         value={value}
                         name={name}
                         checked={currentSelection === value}
                  />
                  <div className={`fake-radio-button ${currentSelection === value ? 'checked' :""}`}
                       data-value={value}>
                  </div>
                  <label data-value={value}>{value}</label>
                </div>)}
          </div>
      );
    };
export default MaterialRadioGroup;