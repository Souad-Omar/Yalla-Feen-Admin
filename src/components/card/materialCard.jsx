import React from 'react';
import './materialCard.css';

const MaterialCard = ({img, title, note, clickHandler, actions=[], highlight = false}) => {
  return (
      <div className={`material-card${highlight ? ' highlighted' : ''}`} onClick={clickHandler}>
        <div className="image-wrapper">
          <img src={img} alt=""/>
        </div>
        <div className="info">
          <div className="title">{title}</div>
          <div className="note">{note}</div>
        </div>
        {/* <div className="action-wrapper">
          <div className="action-type"
               onClick={actionHandler}
               data-type={actionType}
          >{actionType}</div>
        </div> */}
        {actions.map(action=>
        <div className="action-wrapper">
          <div className="action-type"
               onClick={action.handler}
               data-type={action.type}
          >{action.type}</div>
        </div>)}
        <div className="dot"></div>
      </div>
  );
};

export default MaterialCard;