import React from 'react';
import { Link } from 'react-router-dom';
import './Cta.css';
import { isMobile } from 'react-device-detect';

function Cta() {
  return (
    <div className="section --cta-space">
      <div
        className={
          isMobile
            ? 'box columns --cta-color has-text-light --border m-0'
            : 'box columns --cta-color has-text-light --border m-0 --pad-0'
          // : 'box columns --cta-color has-text-light --border ml-0 mr-0 mt-0 mb-0 --pad-0'
        }
      >
        <div
          className={
            isMobile
              ? 'column has-text-weight-bold has-text-centered is-size-3 --cta-pading my-0'
              : 'column has-text-weight-bold has-text-centered is-size-3 --cta-pading my-6'
          }
        >
          Contact Me
        </div>
        <div
          className={
            isMobile
              ? 'column has-text-centered is-size-4 --cta-pading is-align-self-center my-0'
              : '"column has-text-centered is-size-4 --cta-pading is-align-self-center my-6"'
          }
        >
          <p>{"Like what you see? Let's talk!"}</p>
        </div>
        <div
          className={
            isMobile
              ? 'column has-text-centered --cta-pading my-0'
              : 'column has-text-centered --cta-pading my-6'
          }
        >
          <Link to="/contact">
            <button className="button is-outlined is-info has-text-weight-bold is-size-5 --border --hover">
              👉 Send me a message
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cta;
