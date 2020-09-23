import React from 'react';
import logo from '../assets/logo.png';
import {
    Link
} from "react-router-dom";

function Header() {
  return (
    <div className="header">
        <div className="left">
            <Link to ="/">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="title">
                Adjoined
            </div>
            </Link>
        </div>
    </div>
  );
}

export default Header;
