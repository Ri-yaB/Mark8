import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHandshake } from '@fortawesome/free-solid-svg-icons'; // Import the user and handshake icons
import "./styles.css";
function Hero() {
    return (
      <div className="banner">
        <div className="banner-content">
          <h1>Unlocking Influencer <br/>Commerce for Creators</h1>
          <p>Where Creators and brands join forces to sell and earn</p>
          
          <button>Get Started</button>
        </div>
  
        <div className="section">
        <div className="column">
          <div className="icon">
            <FontAwesomeIcon icon={faUser} size="3x" />
          </div>
          <div className="content">
            <h2>Create your professional creator profile for business</h2>
            
          </div>
        </div>
        <div className="column">
          <div className="icon">
            <FontAwesomeIcon icon={faHandshake} size="3x" />
          </div>
          <div className="content">
            <h2>Get in touch with over 10k+ brands for sponsorships</h2>
            
          </div>
        </div>
      </div>

      </div>
    );
  }
  export default Hero