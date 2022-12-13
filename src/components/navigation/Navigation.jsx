import React from 'react';
import live from '../../img/icon/live.svg';
import fire from '../../img/icon/Fire.png';

import './Navigation.scss';

function Navigation() {
  return (
    <section className="navigation-section">
      <div className="container">
        <div className="navigation">
          <div className="navigation__link">
            <div className="navigation__link-fire">
              <img className="navigation__link-img" src={fire} alt="fire" />
              <a className="navigation__link-link navigation__link-link-active" href="/">війна</a>
            </div>
            <a className="navigation__link-link" href="/">новини</a>
            <a className="navigation__link-link" href="/">політика</a>
            <a className="navigation__link-link" href="/">економіка</a>
            <a className="navigation__link-link" href="/">суспільство</a>
            <a className="navigation__link-link" href="/">погляди</a>
            <a className="navigation__link-link" href="/">світ</a>
          </div>
          <div className="navigation__live">
            <img className="navigation__live-img" src={live} alt="live" />
            <div className="navigation__live-item">live</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
