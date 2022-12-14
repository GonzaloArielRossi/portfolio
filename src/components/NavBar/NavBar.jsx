import React, { useState } from 'react';
import { BsTerminal } from 'react-icons/bs';
import { NavLink, useLocation } from 'react-router-dom';

export const NavBar = () => {
  const location = useLocation().pathname;
  const [burgerMenu, setburgerMenu] = useState(false);
  const handleBurgerMenu = () => {
    setburgerMenu(!burgerMenu);
  };
  const closeBurgerMenu = () => {
    setburgerMenu(false);
  };

  return (
    <>
      <nav
        aria-label="main navigation"
        className="navbar is-transparent is-spaced mt-5 mb-5"
        role="navigation"
      >
        <div className="navbar-brand">
          <NavLink
            className="is-flex is-justify-content-center navbar-item has-text-primary is-black  is-size-3 --hover"
            to="/"
            onClick={closeBurgerMenu}
          >
            <BsTerminal className="has-text-weight-medium " />
            <span className="has-text-weight-bold --reset-line-height ml-2">
              gonzalorossi.dev
            </span>
          </NavLink>
          <a
            aria-expanded="false"
            aria-label="menu"
            className={burgerMenu ? 'navbar-burger is-active' : 'navbar-burger'}
            data-target="navbarBasicExample"
            role="button"
            onClick={handleBurgerMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <div
            className={burgerMenu ? 'navbar-menu is-active' : 'navbar-menu'}
          ></div>
        </div>

        <div className={burgerMenu ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-end">
            <a
              className={
                burgerMenu
                  ? 'navbar-item is-size-4 has-text-weight-semibold'
                  : 'navbar-item is-size-4 has-text-weight-semibold --hover'
              }
              href="https://www.linkedin.com/in/gonzaloarossi/"
              rel="noreferrer"
              target="_blank"
              onClick={closeBurgerMenu}
            >
              Linkedin
            </a>
            <a
              className={
                burgerMenu
                  ? 'navbar-item is-size-4 has-text-weight-semibold'
                  : 'navbar-item is-size-4 has-text-weight-semibold --hover'
              }
              href="https://github.com/GonzaloArielRossi"
              rel="noreferrer"
              target="_blank"
              onClick={closeBurgerMenu}
            >
              GitHub
            </a>
            <a
              className={
                burgerMenu
                  ? 'navbar-item is-size-4 has-text-weight-semibold'
                  : 'navbar-item is-size-4 has-text-weight-semibold --hover'
              }
              href="https://drive.google.com/drive/folders/1MXFZg05g-UEF0YpCZdSTaoYyD4DwyigN?usp=sharing"
              rel="noreferrer"
              target="_blank"
              onClick={closeBurgerMenu}
            >
              CV
            </a>
            {location === '/' && (
              <div className={burgerMenu ? '' : 'navbar-item'}>
                <NavLink
                  className={
                    burgerMenu
                      ? 'navbar-item is-size-4 has-text-weight-semibold'
                      : 'button is-outlined is-primary is-rounded has-text-weight-bold --hover is-size-5'
                  }
                  to="/contact"
                  onClick={closeBurgerMenu}
                >
                  Say Hello!
                </NavLink>
              </div>
            )}
            {location === '/contact' && !burgerMenu && (
              <div className="navbar-item">
                <NavLink
                  className="is-rounded has-text-weight-bold --hover is-size-3"
                  to="/"
                  onClick={closeBurgerMenu}
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
