import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Header from './Header.js';
import LeftSideNav from './LeftSideNav.js';
import RightSideNav from './RightSideNav.js';
import MainWindow from './MainWindow.js';
import Personal from './Personal.js';
import Commerical from './Commerical.js';
import Investing from './Investing.js';
import About from './About.js';
import Footer from './Footer.js';
import './css/main.css';

class Routes extends Component {
  render() {
    return (
        <>
           
            <Router>
            <div className='router-container'>
                <Header>
                    <Switch>
                        <Route exact path={`/personal`} component={Personal}/>
                        <Route exact path={`/commerical`} component={Commerical}/>
                        <Route exact path={`/investing`} component={Investing}/>
                        <Route exact path={`/about`} component={About}/>
                    </Switch>
                </Header>
           
                <div className='hero-wide-promo'>
                    <div className="hero-image">
                      <img src='./Assets/images/hero-branchstation.png' alt="neptune branch"/>
                    </div>
                </div>
                <div className="poster-group">
                <div className="poster1">
                <Link to={`/snailmail`} className="poster-item2">
                    <div className="poster-nav2">
                      <p className="poster-link-text">posterboard1</p> 
                    </div>
                </Link>
                </div>
                <div className="poster2">
                <Link to={`/cars`} className="poster-item2">
                    <div className="poster-nav2">
                      <p className="poster-link-text">posterboard2</p> 
                    </div>
                </Link>
                </div>
                <div className="poster3">
                <Link to={`/cars`} className="poster-item2">
                    <div className="poster-nav2">
                      <p className="poster-link-text">posterboard3</p> 
                    </div>
                </Link>
                </div>
                </div>
                <Footer/>
            </div>
            </Router> 
        </>
    );
  }
}

export default Routes;