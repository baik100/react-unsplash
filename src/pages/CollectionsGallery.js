import React, { Component } from 'react';
import './Collections.scss';

function CollectionsGallery (props) {
    
    const {
        photo
    } = props;
    
    console.log('@@photo', photo);
  return (
          <div className="CollectionsGallery">
              <img src={photo.urls.regular} alt=""/>
          </div>
    );
}

export default CollectionsGallery;
