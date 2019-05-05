import React, { useState, useEffect } from 'react';
import './SearchPhotos.scss'
import Gallery from './Gallery';
import Actions from "../redux/action";
import {connect} from "react-redux";

const SearchPhotos = (props) => {

    const {

        dispatch,
        searchResult

    } = props;

    const query = props.match.params.query;

    useEffect(() => {
        console.log('@@change match params query', query);
        dispatch(Actions.Creators.fetchSearch(query))
    }, [query])

  return (
          <div className="SearchPhotos">
            <h1>
                {query}
                <Gallery photos={searchResult}/>
            </h1>
          </div>
    );
}

export default connect(state => ({...state}) , dispatch => ({dispatch}))(SearchPhotos);