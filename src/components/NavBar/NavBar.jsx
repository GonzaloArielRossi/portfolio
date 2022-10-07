import React from 'react';
import { BsTerminal } from 'react-icons/bs';
import './NavBar.css';
import { NavLink, useLocation } from 'react-router-dom';
export const NavBar = () => {
  const location = useLocation().pathname;

  return (
    <>
      <nav
        aria-label="main navigation"
        className="navbar is-transparent is-spaced mt-5 mb-5"
        role="navigation"
      >
        <div className="navbar-brand --hover">
          <NavLink
            className="navbar-item  has-text-primary is-black  is-size-3"
            to="/"
          >
            <BsTerminal className="has-text-weight-medium " />
            <div className="has-text-weight-bold ml-2 ">
              {'GonzaloRossi.dev'}
            </div>
          </NavLink>
          {/* <a
            className="navbar-item  has-text-primary is-black  is-size-3"
            href="/"
          >
            <BsTerminal className="has-text-weight-medium " />
            <div className="has-text-weight-bold ml-2 ">
              {'GonzaloRossi.dev'}
            </div>
          </a> */}
          {/* <a className="navbar-item" href="localhost:5173"></a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="portfolionavbar"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a> */}
        </div>

        <div className="navbar-menu " id="portfolionavbar">
          {/* start */}
          <div className="navbar-start"></div>

          {/* title */}

          {/* end */}
          <div className="navbar-end">
            <a
              className="navbar-item is-size-4 has-text-weight-semibold --hover"
              href="https://www.linkedin.com/in/gonzaloarossi/"
              rel="noreferrer"
              target="_blank"
            >
              Linkedin
            </a>
            <a
              className="navbar-item is-size-4 has-text-weight-semibold --hover"
              href="https://github.com/GonzaloArielRossi"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            {location === '/' && (
              <div className="navbar-item">
                <NavLink
                  className="button is-primary is-rounded has-text-weight-bold --hover is-size-5"
                  to="/contact"
                >
                  Say Hello
                </NavLink>
              </div>
            )}
            {location === '/contact' && (
              <div className="navbar-item">
                <NavLink
                  className="is-rounded has-text-weight-bold --hover is-size-3"
                  to="/"
                >
                  X
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
