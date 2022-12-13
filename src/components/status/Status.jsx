/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './Status.scss';
import tank from '../../img/icon/tank.png';
import helment from '../../img/icon/Helmet.svg';
import artsistem from '../../img/icon/artsistem.png';
import bbm from '../../img/icon/bbm.png';
import fly from '../../img/icon/fly.png';
import rocket from '../../img/icon/rocket.png';
import helicopter from '../../img/icon/helicopter.png';

function Status() {
  return (
    <section className="section-status">
      <div className="container">
        <div className="status">
          <div className="status__day">555 день війни:</div>
          <div className="status__losses">
            <Losses img={helment} item="особовий склад " number="~36 200" />
            <Losses img={tank} item="танки" number="1 589" />
            <Losses img={artsistem} item="артсистеми " number="4578" />
            <Losses img={fly} item="літаки" number="444" />
            <Losses img={rocket} item="РСЗВ" number="2465" />
            <Losses img={helicopter} item="гелікоптери" number="1905" />
            <Losses img={bbm} item="ББМ" number="4578" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Status;

function Losses(props) {
  return (
    <div className="status__losse">
      <img src={props.img} alt="img" />
      <span>{props.item}</span>
      <span className="status__losse-num">{props.number}</span>
    </div>
  );
}
