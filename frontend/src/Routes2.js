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
                <Header>
                    <Switch>
                        <Route exact path={`/personal`} component={Personal}/>
                        <Route exact path={`/commerical`} component={Commerical}/>
                        <Route exact path={`/investing`} component={Investing}/>
                        <Route exact path={`/about`} component={About}/>
                    </Switch>
                </Header>
            </Router> 
                <div className='main-body'>
                    <div className="body-segment-side">
                        <LeftSideNav/>
                    </div>
                    <div className="body-segment-bulk">
                        <MainWindow/>
                    </div>
                    <div className="body-segment-side">
                        <RightSideNav/>
                    </div>
                </div>
            <Footer/>
        </>
    );
  }
}

export default Routes;