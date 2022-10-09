import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer className="--footer has-background-primary">
        <div
          className="content has-text-light is-flex is-flex-direction-column
         is-justify-content-center is-size-5 is-align-items-center --flex-gap-1"
        >
          <div className="columns is-gapless --flex-gap-2">
            <span className="has-text-weight-bold column --flex-basis">
              🌎 Buenos Aires, Argentina
            </span>
            <a
              className="has-text-weight-bold column --flex-basis has-text-light --hover"
              href="mailto:gonzaloarielrossi@gmail.com?subject=Contact%20via%20gonzalorossi.dev"
              rel="noreferrer"
              target="_blank"
            >
              <span>📩 gonzaloarielrossi@gmail.com</span>
            </a>
            <a
              className="has-text-weight-bold column --flex-basis has-text-light --hover"
              href="https://wa.me/5491130334862"
              rel="noreferrer"
              target="_blank"
            >
              <span>📞 (+54) 9 11-3033-4862</span>
            </a>
          </div>

          <div className="is-flex mb-4 ">
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
    </div>
  );
}

export default Footer;
