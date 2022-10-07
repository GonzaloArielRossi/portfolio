import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import './Footer.css';

function Footer() {
  return (
    <>
      <footer className="--footer has-background-primary">
        <div
          className="content has-text-light is-flex is-flex-direction-column
         is-justify-content-center is-size-5 is-align-items-center --flex-gap-1"
        >
          <div className="is-flex --flex-gap-1 ">
            <span className="has-text-weight-bold">
              🌎 Buenos Aires, Argentina
            </span>
            <span className="has-text-weight-bold">
              📩 gonzaloarielrossi@gmail.com
            </span>
            <span className="has-text-weight-bold">
              📞 (+54) 9 11-3033-4862
            </span>
          </div>

          <div className="is-flex ">
            <a
              className="is-flex is-align-items-center ml-6 --hover"
              href="https://www.linkedin.com/in/gonzaloarossi/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillLinkedin className="--icon mr-4" />
            </a>
            <a
              className="is-flex is-align-items-center --hover"
              href="https://github.com/GonzaloArielRossi"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillGithub className="--icon" />
            </a>
          </div>
          <span className="has-text-weight-bold">
            ©️ Copyright 2022 by Gonzalo Ariel Rossi
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
