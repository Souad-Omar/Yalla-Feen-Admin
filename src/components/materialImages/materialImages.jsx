import React from 'react';
import './materialImages.css';

const MaterialImages = ({name,label, images = [], handler}) => {
  const addImagesClickHandler = (e) => {
    e.currentTarget.getElementsByTagName("input")[0].click()
  }
  return (
      <div className="material-images">
        <label>{label}</label>
        <div className="wrapper">
          <div className="add-images" onClick={addImagesClickHandler}>
            <span></span>
            <span></span>
            <input type="file" multiple accept="image/*" onChange={handler}/>
          </div>
          <div className="images-container">
            <div className="images-grid">
              {images.map(image =>
                  <div className="image-wrapper">
                    <img src={image.src} alt=""/>
                    <div className="overlay"></div>
                    <div className="image-delete" onClick={image.deleteHandler}>
                      <span></span>
                      <span></span>
                    </div>
                  </div>)}
            </div>
          </div>
          
        </div>
      </div>
  );
};

export default MaterialImages;