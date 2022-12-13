/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Slider from 'react-slick';
import slide from '../../img/imgslide/desktop.jpg';
import slide2 from '../../img/imgslide/fire.jpg';
import './Slick.scss';

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const settings = {
      autoplay: true,
    };
    return (
      <div className="slider">
        <div className="container1">
          <Slider
            {...settings}
            asNavFor={this.state.nav2}
            ref={(slider) => (this.slider1 = slider)}
          >
            <div className="slider__item">
              <img className="slider__img" src={slide} alt="slide" />
              <p className="slider__descr">Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</p>
            </div>
            <div className="slider__item">
              <img className="slider__img" src={slide2} alt="slide" />
              <p className="slider__descr">Оприлюднено супутникові знімки аеродрому біля Новофедорівки: видно місця ураження</p>
            </div>
            <div className="slider__item">
              <img className="slider__img" src={slide} alt="slide" />
              <p className="slider__descr">
                Вибухи на білоруському аеродромі Зябрівка: оприлюднені причини
              </p>
            </div>
            <div className="slider__item">
              <img className="slider__img" src="https://picsum.photos/1000/450" alt="slide" />
              <p className="slider__descr">
                Сейм Латвії визнав рф країною-спонсором тероризму
              </p>
            </div>

          </Slider>
          <Slider
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            slidesToShow={3}
            swipeToSlide
            focusOnSelect
          >
            <div className="slider__item-nav">
              <img className="slider__img-nav" src={slide} alt="slide" />
              <p className="slider__descr-nav">Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які ...</p>
            </div>
            <div className="slider__item-nav">
              <img className="slider__img-nav" src={slide2} alt="slide" />
              <p className="slider__descr-nav">Оприлюднено супутникові знімки аеродрому біля Новофедорівки: видно ...</p>
            </div>
            <div className="slider__item-nav">
              <img className="slider__img-nav" src={slide} alt="slide" />
              <p className="slider__descr-nav">
                Вибухи на білоруському аеродромі Зябрівка: оприлюднені причини...
              </p>
            </div>
            <div className="slider__item-nav">
              <img className="slider__img-nav" src="https://picsum.photos/1000/450" alt="slide" />
              <p className="slider__descr-nav">
                Сейм Латвії визнав рф країною-спонсором тероризму...
              </p>
            </div>

          </Slider>
        </div>
      </div>
    );
  }
}
