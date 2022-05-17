import React, { Component } from 'react';

class Header extends Component {
  /**
   * Render
   *
   * @returns {view}
   */
  render() {
    return (
      <header className="header">
        <div className="header__inner">
          <div className="header__left">
            <a href="./" className="header__logo">
              <div className="header__logo-img"></div>
            </a>
            <ul className="header__nav">
              <li className="header__nav-link is-active">
                <a href="./">About</a>
              </li>
              <li className="header__nav-link">
                <a href="./">Work</a>
              </li>
              <li className="header__nav-link">
                <a href="./">Latest</a>
              </li>
              <li className="header__nav-link">
                <a href="./">People & Careers</a>
              </li>
              <li className="header__nav-link">
                <a href="./">Contact</a>
              </li>
            </ul>
            <div className="header__btn"></div>
          </div>
        </div>
      </header>
    )
  }
}

export default (Header);