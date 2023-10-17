import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHandshake } from '@fortawesome/free-solid-svg-icons'; // Import the user and handshake icons
import Slider from 'react-slick'; // Import the slider library
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';
import image from "./images/Mark.png";
import React from 'react';




function Hero() {
    
    const cardData = [
        {
          title: 'Create a profile for business enquiries',
          content: 'Just like building a profile on LinkedIn, creators can add relevant details about their fees, availability, location, genre, etc.',
        },
        {
          title: 'Connect with brands for influencer marketing',
          content: 'Brands can search and discover the perfect creators in their industry for product promotions and directly chat with them.',
        },
        {
          title: 'Monetize your audience',
          content: 'Creators can make videos sponsoring a product for a brand and earn an 8% share of revenue when a viewer buys the product in the app.',
        },
        
      ];


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
      



      {/* Card Grid Section */}
<div className="section">
        <div className="card-grid">
          {cardData.map((card, index) => (
            <div className="card" key={index}>
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>

      

    </div>



  );
}

export default Hero;