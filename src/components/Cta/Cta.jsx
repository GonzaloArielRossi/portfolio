import React from 'react';
import { Link } from 'react-router-dom';
import './Cta.css';
function Cta() {
  return (
    <div className="section --cta-space">
      <div className="box columns --cta-color has-text-light --border ml-0 mr-0 mt-0 mb-0 --pad-0">
        <div className="column has-text-weight-bold has-text-centered is-size-3 --cta-pading mt-6 mb-6">
          Contact Me
        </div>
        <div className="column has-text-centered is-size-4 --cta-pading is-align-self-center mt-6 mb-6">
          <p>{"Like what you see? Let's talk!"}</p>
        </div>
        <div className="column has-text-centered --cta-pading mt-6 mb-6">
          <Link to="/contact">
            <button className="button is-primary has-text-weight-bold is-size-5 --border --hover">
              👉 Send me a message
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cta;
