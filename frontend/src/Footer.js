import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './css/main.css';

class App extends Component {
  render() {
    return (
      <>
      <footer>
        <div className='foot-group'>
            <p className='footer-text-sub-heading'>Personal Accounts</p>
            <Link to={`/personal`}>
                <p className='footer-text'>Depost Accounts</p>
            </Link>
            <Link to={`/lending`}>
                <p className='footer-text'>Personal Lending Accounts</p>
            </Link>
            <Link to={`/creditcards`}>
                <p className='footer-text'>Credit Cards</p>
            </Link>
            <Link to={`/mortgages`}>
                <p className='footer-text'>Mortgages</p>
            </Link>
            <Link to={`/creditcards`}>
                <p className='footer-text'>Investements</p>
            </Link>
            <Link to={`/dimensional`}>
                <p className='footer-text'>Dimensional Accessible Banking</p>
            </Link>
            <Link to={`/coaching`}>
                <p className='footer-text'>The Coaching Corner</p>
            </Link>
        </div>
        <div className='foot-group'>
            <p className='footer-text-sub-heading'>Notices</p>
            <Link to={`/legal`}>
                <p className='footer-text'>Legal</p>
            </Link>
            <Link to={`/useragreement`}>
                <p className='footer-text'>User Agreement</p>
            </Link>
            <Link to={`/corporateaffairs`}>
                <p className='footer-text'>Corporate Affairs</p>
            </Link>
            <Link to={`/responsible`}>
                <p className='footer-text'>Corporate Responsibility</p>
            </Link>
            <Link to={`/ombudsman`}>
                <p className='footer-text'>Contact Ombudsman</p>
            </Link>
            <Link to={`/media`}>
                <p className='footer-text'>Media Center</p>
            </Link>
        </div>
        <div className='foot-group'>
            <p className='footer-text-sub-heading'>Digital Byte Group</p>
            <Link to={`/galactic`}>
                <p className='footer-text'>Galactic Affairs</p>
            </Link>
            <Link to={`/solar`}>
                <p className='footer-text'>Solar Service</p>
            </Link>
            <Link to={`/legal`}>
                <p className='footer-text'>Planetary Markets</p>
            </Link>
            <Link to={`/legal`}>
                <p className='footer-text'>DBB Saturn</p>
            </Link>
            <Link to={`/legal`}>
                <p className='footer-text'>DBB Venus</p>
            </Link>
            <Link to={`/legal`}>
                <p className='footer-text'>DBB Pluto</p>
            </Link>
        </div>
        <div className='foot-group'>
                <p className='footer-text-sub-heading'>Communication Conduit</p>
            <Link to={`/galactic`}>
                <p className='footer-text'>Branch Locator</p>
            </Link>
            <Link to={`/solar`}>
                <p className='footer-text'>Instant Teller Machines</p>
            </Link>
            <Link to={`/legal`}>
                <p className='footer-text'>Written Words -  Communication Matrix</p>
            </Link>
            <Link to={`/legal`}>
                <p className='footer-text'>Wormhole Phone Tunnels</p>
            </Link>
          
        </div>
        </footer>
      </>
    );
  }
}

export default App;