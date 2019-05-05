import React, {useState, useEffect} from 'react';
import MainGalleryItem from '../pages/MainGalleryItem'
import Actions from "../redux/action";
import {connect} from "react-redux";

//useState 함수형 컴포넌트에서 상태를 관리
//useEffect 클래스형 컴포넌트의 componentDidMount 와 componentDidUpdate 를 합친 형태

function Gallery(props) {

    const {
        dispatch,
        photos = [],
    } = props;
    
    
    return (
        <div className="MainGallery">
            <div className="container">
                {
                    ( photos.length > 0 ) ?

                        <div className="gallery-list">
                            {photos.map((photo, index) => (<MainGalleryItem key={index} photo={photo}/>))}
                        </div>
                        :
                        "검색결과가 없습니다."
                }
            </div>
        </div>
    );
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(Gallery);
