import React, {useState, useEffect} from 'react';
import Actions from "../redux/action";
import {connect} from "react-redux";
import Header from "../components/layout/Header";
import SearchResult from "../components/SearchResult";
import Gallery from "./Gallery"
import MainVisual from "../components/MainVisual"
import './Home.scss'

function Home (props) {

    const {
        dispatch,
        mainPhotos
    } = props;

    useEffect(() => {

        //마운트 될때만 실행하고 싶을때
        //데이터가 바뀌어도 다시 실행되지 않음

        dispatch(Actions.Creators.fetchPhoto())
    },[]) //데이터값이 변할때 다시 실행



  return (
          <div className="Home">
              <Header/>
              {/*<SearchResult/>*/}
              <MainVisual/>
              <Gallery photos={mainPhotos}/>
          </div>
    );
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(Home);
