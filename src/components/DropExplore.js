import React, { Component } from 'react';
import {Link} from "react-router-dom";

function DropExplore () {
  return (
          <div className="DropExplore">
            <ul>
                <li className="drop-link">
                    <Link to = "">Community</Link>
                </li>
                <li className="drop-link">
                    <Link to = "">History</Link>
                </li>
                <li className="drop-link">
                    <Link to = "">Made with Unsplash</Link>
                </li>
                <li className="drop-link">
                    <Link to = "">API/Developers</Link>
                </li>
                <li className="drop-link">
                    <Link to = "">Hiring</Link>
                </li>
                <li className="drop-link">
                    <Link to = "">License</Link>
                </li>
                <li className="drop-link">
                    <Link to = "">Help</Link>
                </li>
            </ul>
          </div>
    )
}

export default DropExplore;
