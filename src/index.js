import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./styles.css";
import Hero from './Hero';
import Footer from './Footer';
import FAQs from './FAQs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Hero/>
    
  </React.StrictMode>
);