import React from 'react';
import './Footer.scss';
import facebook from '../../img/icon/facebook.svg';
import instagram from '../../img/icon/instagram.svg';
import telegram from '../../img/icon/telegram.svg';
import youtube from '../../img/icon/youtube.svg';

function Footer() {
  return (
    <>
      <div className="section-footer">
        <div className="container">
          <div className="footer">
            <ul className="footer__list">
              <li>Всі новини</li>
              <li><a href="/">Війна власності</a></li>
              <li><a href="/">COVID-19</a></li>
              <li>
                <a href="/">Політика</a>
                <br />
                <a href="/">Україна</a>
                <br />
                <a href="/"> Світ</a>
              </li>
            </ul>
            <ul className="footer__list">
              <li>Здоров’я</li>
              <li><a href="/">Краса</a></li>
              <li><a href="/">Секс</a></li>
              <li><a href="/">Психологія</a></li>
              <li><a href="/">Медицина</a></li>
            </ul>
            <ul className="footer__list">
              <li>Регіони</li>
              <li><a href="/">Київ</a></li>
              <li><a href="/">Одеса</a></li>
              <li><a href="/">Харків</a></li>
              <li><a href="/">Львів</a></li>
            </ul>
            <ul className="footer__list">
              <li>Економіка</li>
              <li><a href="/">Фінанси</a></li>
              <li><a href="/">Комунальні послуги</a></li>
              <li><a href="/">Бізнес</a></li>
              <li><a href="/">Медіакіт</a></li>
            </ul>
            <ul className="footer__list footer__list-nav">
              <li>
                <a href="/">Про нас</a>
              </li>
              <li><a href="/">Контакти</a></li>
              <li><a href="/">Структура власності</a></li>
              <li><a href="/">Команда</a></li>
              <li><a href="/">Медіакіт</a></li>
            </ul>
          </div>
          <div className="social">
            <h5 className="social__title">Новини у зручному форматі</h5>
            <div className="social__item">
              <a href="/">
                <img src={facebook} alt="social" />
              </a>
              <p className="social__descr">Facebook</p>
            </div>
            <div className="social__item">
              <a href="/"><img src={youtube} alt="social" /></a>
              <p className="social__descr">Youtube</p>
            </div>
            <div className="social__item">
              <a href="/"><img src={instagram} alt="social" /></a>
              <p className="social__descr">Instagram</p>
            </div>
            <div className="social__item">
              <a href="/"><img src={telegram} alt="social" /></a>
              <p className="social__descr">Telegram</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__year">© 2022, OGONICK corporation</div>
    </>
  );
}

export default Footer;
