/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './News.scss';
import fire from '../../img/icon/fire1.svg';
import loadmore from '../../img/icon/loadmore.png';
import arrowmore from '../../img/icon/arrowmore.svg';
import cardImg from '../../img/imgslide/imagecard.png';

function News() {
  return (
    <div className="news-section">
      <div className="container">
        <div className="news">
          <div className="news__all">
            <div className="news__title">
              <div>Всі новини</div>
              <div><a className="news__arh" href="/">Архів</a></div>
            </div>
            <nav className="news__nav">
              <a className="news__nav-link active" href="/">Всі</a>
              <a className="news__nav-link" href="/">Новини</a>
              <a className="news__nav-link" href="/">Статті</a>
            </nav>
            <div className="item__container">
              <NewsItem time="12:30" descr="До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини" fire />
              <NewsItem time="12:30" descr="Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф" />
              <NewsItem time="12:30" descr="Відбудова України — завдання усього світу: промова Зеленського на конференції в Лугано" fire />
              <NewsItem time="12:30" descr="Дружина Зеленського чесно зізналася, чи боїться смерті" />
            </div>
            <button type="button" className="news__btn">
              <img src={loadmore} alt="loaad" />
              Завантажити ще
            </button>
          </div>
          <div className="news__redaction">
            <h3 className="news__header">Вибір редакції</h3>
            <div className="news__cards">

              <Card img={cardImg} time="12:33" descr="Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі." />
              <Card img={cardImg} time="12:33" descr="Генерал Романенко оцінив бойовий потенціал і спроможності ворога на півдні України." />
              <Card img={cardImg} time="12:33" descr="У Слузі пояснили, чому в росії знову заговорили про переговори з Україною." />
              <Card img={cardImg} time="12:33" descr="ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи." />
              <Card img={cardImg} time="12:33" descr="Білорусь несподівано вирішила провести військові навчання з Казахстаном: що відомо.." />
              <Card img={cardImg} time="12:33" descr="Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі." />
            </div>
            <h3 className="news__header news__header-regions">Регіони</h3>
            <div className="regions">
              <div>
                <div className="news__all news__all-regions">
                  <div className="news__title">
                    <div>Київ</div>
                  </div>
                  <div className="item__container">
                    <NewsItem time="12:30" descr="До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини" />
                    <NewsItem time="12:30" descr="Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф" />
                  </div>
                  <button type="button" className="news__btn news__btn-more">
                    <img src={arrowmore} alt="loaad" />
                    Більше новин
                  </button>
                </div>

              </div>
              <div>
                <div className="news__all news__all-regions">
                  <div className="news__title">
                    <div>Одеса</div>
                  </div>
                  <div className="item__container">
                    <NewsItem time="12:30" descr="До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини" fire />
                    <NewsItem time="12:30" descr="Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф" />
                  </div>
                  <button type="button" className="news__btn news__btn-more">
                    <img src={arrowmore} alt="loaad" />
                    Більше новин
                  </button>
                </div>
              </div>
              <div>
                <div className="news__all news__all-regions">
                  <div className="news__title">
                    <div>Харків</div>
                  </div>
                  <div className="item__container">
                    <NewsItem time="12:30" descr="До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини" fire />
                    <NewsItem time="12:30" descr="Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф" fire />
                  </div>
                  <button type="button" className="news__btn news__btn-more">
                    <img src={arrowmore} alt="loaad" />
                    Більше новин
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default News;

function NewsItem(props) {
  return (
    <div className="item">
      {props.fire ? (
        <h5 className="item__header">
          <img className="item__img" src={fire} alt="fire" />
          Термінова новина
        </h5>
      ) : null}
      <p className="item__descr">
        <span className="item__descr-time">{props.time}</span>
        {props.descr}
      </p>
      <hr />
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <img className="card__img" src={props.img} alt="imgcard" />
      <span className="card__time">{props.time}</span>
      <br />
      <p className="card__descr">{props.descr}</p>
    </div>
  );
}
