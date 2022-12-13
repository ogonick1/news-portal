/* eslint-disable react/prop-types */
import React from 'react';
import usik from '../../img/video/usik.png';
import './Video.scss';

function Video() {
  return (
    <section className="section-video">
      <div className="container">
        <div className="video__title">
          <h5>Відео</h5>
          <button type="button" className="video__btn">
            Більше новин
          </button>
        </div>
        <div className="video__wreaper">
          <div className="video__big">
            <ImgCard img={<iframe className="imgcard__img" src="https://www.youtube.com/embed/AE2bY2gOBhk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />} date="05 серпня 11:00" descr="Це не Джошуа: Усик розповів, кого вважає своїм головним суперником" />
          </div>
          <div className="video__small">
            <ImgCard img={<iframe className="imgcard__img" src="https://www.youtube.com/embed/AE2bY2gOBhk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />} date="05 серпня 11:00" descr="Це не Джошуа: Усик розповів, кого вважає своїм головним суперником" />
            <ImgCard img={<img alt="card" className="imgcard__img" src={usik} />} date="05 серпня 11:00" descr="Це не Джошуа: Усик розповів, кого вважає своїм головним суперником" />
            <ImgCard img={<iframe className="imgcard__img" src="https://www.youtube.com/embed/5mpReMkiECE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />} date="05 серпня 11:00" descr="Це не Джошуа: Усик розповів, кого вважає своїм головним суперником" />
            <ImgCard img={<iframe className="imgcard__img" src="https://www.youtube.com/embed/C9jj1QnP3ec" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />} date="05 серпня 11:00" descr="Це не Джошуа: Усик розповів, кого вважає своїм головним суперником" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Video;

function ImgCard({ img, date, descr }) {
  return (
    <div className="imgcard">
      {img}
      <p className="imgcard__date">{date}</p>
      <p className="imgcard__descr">{descr}</p>
    </div>
  );
}
