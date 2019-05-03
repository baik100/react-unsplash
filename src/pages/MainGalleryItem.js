import React, { Component } from 'react';
import './MainGallery.scss'

function MainGalleryItem (props) {

    const {

        photo,

    } = props;

    console.log('@@photo', photo);

  return (

      <div className="MainGalleryItem">
          <div className="grid">
              <img src={photo.urls.regular} alt=""/>
          </div>
      </div>
      
    );
}

export default MainGalleryItem;
