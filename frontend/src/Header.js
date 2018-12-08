import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignIn from './SignIn.js';

import './css/main.css';

class Header extends Component {
  render() {
    return (
      <>
        <header>
        <div className="header-group">
          <div className='header-top-menu'>
                <Link to={`/personal`} className="menu-item">
                  <div className='header-nav'>
                      <p className="header-link-text">Personal</p> 
                  </div>
                </Link>
                <Link to={`/commerical`} className="menu-item">
                    <div className='header-nav'>
                      <p className="header-link-text">Commerical</p> 
                    </div>
                </Link>
                <Link to={`/corporate`} className="menu-item">
                  <div className='header-nav'>
                      <p className="header-link-text">Corporate</p> 
                  </div>
                </Link>
                <Link to={`/careers`} className="menu-item">
                  <div className='header-nav'>
                      <p className="header-link-text">Careers</p> 
                  </div>
                </Link>
                <Link to={`/aboutus`} className="menu-item">
                    <div className='header-nav'>
                      <p className="header-link-text">About Us</p> 
                    </div>
                </Link>
                </div>
                <div className='logo'>
                  <img src="./Assets/images/d_b_b_logo.png" alt='bank initials'/>
                </div>
                <div className="second-header-menu">
                <Link to={`/depositaccounts`} className="menu-item2">
                    <div className='header-nav2'>
                      <p className="header-link-text">Deposit Accounts</p> 
                    </div>
                </Link>
                <Link to={`/creditcards`} className="menu-item2">
                    <div className="header-nav2">
                      <p className="header-link-text">Credit Cards</p> 
                    </div>
                </Link>
               
                <Link to={`/mortgages`} className="menu-item2">
                    <div className="header-nav2">
                      <p className="header-link-text">Mortgages</p> 
                    </div>
                </Link>
                <Link to={`/lending`} className="menu-item2">
                    <div className="header-nav2">
                      <p className="header-link-text">Lending</p> 
                    </div>
                </Link>
                <Link to={`/investing`} className="menu-item2">
                    <div className="header-nav2">
                      <p className="header-link-text">Investing</p> 
                    </div>
                </Link>
           </div>
           <Link to={`/signin`}>
              <SignIn className='signin'/>
           </Link>
        </div>
        </header>
      </>
    );
  }
}

export default Header;