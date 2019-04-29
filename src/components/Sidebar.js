import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";

function Sidebar (props) {

  const {
    // currentPath
  } = props.state;

  return (
          <div className="Sidebar">
            SidebarSidebarSidebarSidebarSidebarSidebarSidebarSidebarSidebarSidebarSidebarSidebarSidebar

          </div>
      )
}

export default connect(state => ({state}), dispatch => ({dispatch}))(Sidebar);