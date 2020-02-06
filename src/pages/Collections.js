import React, {useState, useffect} from 'react';
import {connect} from 'react-redux';
import Actions from '../redux/action';
import Header from '../components/layout/Header';
import Gallery from '../pages/Gallery';
import CollectionsGallery from '../pages/CollectionsGallery';
import './Collections.scss';

import '../scss/style.scss'

function Collections(props) {

    const {
        dispatch,
        photos = [],
    } = props;

    return (
        <div className="Collections">
            <Header/>
            <div className="container">
                <div className="head">
                    <h3>Collections</h3>
                    <p>
                        Beautiful, free pictures of the week.<br/>
                        Explore the world through collections of beautiful HD pictures free to use under the <em>Unsplash
                        License.</em>
                    </p>
                </div>
                <div className="body">
                    {photos.map((photo, index) => (<CollectionsGallery photo={photo}/>))}
                </div>
            </div>

        </div>
    );
}

export default connect(state => ({state}), dispatch => ({dispatch}))(Collections);
