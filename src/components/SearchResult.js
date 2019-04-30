import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";

function SearchResult (props) {

  console.log("@@@@@ props", props);

  const {
    searchResult = []
  } = props.state;

  console.log("@@@@@ searchResult", searchResult);
  return (
          <div className="SearchResult">
            {
              searchResult.map((item) => <img src={item.urls.regular} alt=""/>)
            }
          </div>
    
      )
}

export default connect(state => ({state}), dispatch => ({dispatch}))(SearchResult);