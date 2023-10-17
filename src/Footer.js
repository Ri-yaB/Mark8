import React from 'react';
import './Footer.css';
import image from "./images/Mark.png"
import { FaFacebook, FaTwitter, FaGooglePlusG } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Second Row */}
        <div className="footer-content">
          <div className="footer-widget col">
            <div className="footer-logo">
              <a href="index.html"><img src={image} alt="logo" /></a>
            </div>
            <div className="footer-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntut consectetur adipisicing elit, Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="footer-social-icon">
              <span>Follow us</span>
              <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
              <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
              <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
            </div>
          </div>
          <div className="footer-widget col">
            <div className="footer-widget-heading">
              <h3>Contact Us</h3>
            </div>
            <div className="footer-text mb-25">
              <p>If you have any questions or inquiries, please feel free to contact us.</p>
            </div>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> something</p>
              <p><i className="fas fa-phone"></i> 2739498499290</p>
              <p><i className="far fa-envelope-open"></i> mail@info.com</p>
            </div>
          </div>
        {/*  <div className="footer-widget col">
            <div className="footer-widget-heading">
              <h3>Useful Links</h3>
            </div>
            <ul>
              <li><a href="#">Home</a></li>
              
              
              
            </ul>
  </div>*/}
          <div className="footer-widget col">
            <div className="footer-widget-heading">
              <h3>Subscribe</h3>
            </div>
            <div className="footer-text mb-25">
              <p>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
            </div>
            <div className="subscribe-form">
              <form action="#">
                <input type="text" placeholder="Email Address" />
                <button><i className="fab fa-telegram-plane"></i></button>
              </form>
            </div>
          </div>
        </div>

        {/* Third Row 
        <div className="copyright-area">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2018, All Right Reserved <a href="https://mymark8.com/">Mark8</a></p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Policy</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>*/}

<div className="copyright-area">
          <div className="row">
            <div className="col-6 text-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2018, All Rights Reserved <a href="https://mymark8.com/">Mark8</a></p>
              </div>
            </div>
            <div className="col-6 text-right">
              <div className="footer-menu">
                <ul>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Policy</a></li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      

      </div>
    </footer>
  );
}

export default Footer;