import React, { Component } from 'react';
class Footer extends Component {
  /**
   * Render
   *
   * @returns {view}
   */
  render() {
    return (
      <footer className="footer">
        <div className="footer__txt mb-2">Proximity worldwide 2018. All rights reserved. Privacy statement</div>
        <ul className="footer__social">
          <li className="footer__social-link">
            <a href="./" className="footer__social-icon in"></a>
          </li>
          <li className="footer__social-link">
            <a href="./" className="footer__social-icon tw"></a>
          </li>
          <li className="footer__social-link">
            <a href="./" className="footer__social-icon fb"></a>
          </li>
        </ul>
      </footer>
    )
  }
}

export default (Footer);