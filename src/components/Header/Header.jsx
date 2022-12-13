import React from 'react';
import './Header.scss';

function Header() {
  return (
    <section className="section-header">
      <div className="container">
        <div className="header">
          <div className="header__city">
            <button className="header__btn" type="button">
              Menu
            </button>
            <span>Kharkiv</span>
            <span>Kuiv</span>
            <span>Odessa</span>
          </div>
          <div className="header__input">
            <input type="text" placeholder="Пошук новин" />
          </div>
          <div className="header__icons">
            <a className="header__icons-link" href="/">
              <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2.3335C8.56886 2.3335 6.23728 3.29927 4.5182 5.01835C2.79911 6.73743 1.83334 9.06901 1.83334 11.5002C1.83334 13.9313 2.79911 16.2629 4.5182 17.982C6.23728 19.7011 8.56886 20.6668 11 20.6668C13.4312 20.6668 15.7627 19.7011 17.4818 17.982C19.2009 16.2629 20.1667 13.9313 20.1667 11.5002C20.1667 9.06901 19.2009 6.73743 17.4818 5.01835C15.7627 3.29927 13.4312 2.3335 11 2.3335Z" fill="#919191" />
                <path d="M15.5604 7.37484L13.8435 16.1409C13.8435 16.1409 13.7697 16.5415 13.2729 16.5415C13.0089 16.5415 12.8728 16.4159 12.8728 16.4159L9.15384 13.33L7.33426 12.4128L4.99905 11.7918C4.99905 11.7918 4.58334 11.6717 4.58334 11.328C4.58334 11.0415 5.01097 10.9049 5.01097 10.9049L14.7808 7.02376C14.7803 7.0233 15.0792 6.91605 15.2969 6.91651C15.4307 6.91651 15.5833 6.9738 15.5833 7.14567C15.5833 7.26026 15.5604 7.37484 15.5604 7.37484Z" fill="white" />
                <path d="M10.5417 14.4814L8.97142 16.0278C8.97142 16.0278 8.90313 16.0805 8.81192 16.0828C8.7803 16.0837 8.74638 16.0786 8.71155 16.0631L9.15338 13.3291L10.5417 14.4814Z" fill="#919191" />
                <path d="M13.7028 8.83978C13.6253 8.73895 13.4823 8.72062 13.3815 8.79716L7.33334 12.4166C7.33334 12.4166 8.29859 15.1171 8.44572 15.5846C8.5933 16.0526 8.71155 16.0636 8.71155 16.0636L9.15339 13.3296L13.6597 9.16062C13.7606 9.08408 13.7793 8.94062 13.7028 8.83978Z" fill="#919191" />
              </svg>
            </a>
            <a className="header__icons-link" href="/">
              <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2.3335C5.93726 2.3335 1.83334 6.43741 1.83334 11.5002C1.83334 16.5629 5.93726 20.6668 11 20.6668C16.0628 20.6668 20.1667 16.5629 20.1667 11.5002C20.1667 6.43741 16.0628 2.3335 11 2.3335Z" fill="#919191" />
                <path d="M12.2407 13.9296H14.613L14.9857 11.5197H12.2407V10.2025C12.2407 9.20146 12.568 8.31367 13.5043 8.31367H15.009V6.21083C14.7446 6.17508 14.1854 6.09717 13.129 6.09717C10.9225 6.09717 9.62913 7.26225 9.62913 9.91692V11.5202H7.36084V13.9301H9.62867V20.5539C10.0778 20.6208 10.533 20.6667 11 20.6667C11.4221 20.6667 11.8342 20.6282 12.2407 20.5732V13.9296Z" fill="white" />
              </svg>
            </a>
            <a className="header__icons-link" href="/">
              <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5911 19.7456L6.42447 19.7543C4.4078 19.7561 2.75642 18.108 2.75413 16.0913L2.74542 6.92465C2.74359 4.90798 4.39176 3.25661 6.40842 3.25432L15.5751 3.24561C17.5918 3.24377 19.2431 4.89194 19.2454 6.90861L19.2541 16.0753C19.2564 18.0924 17.6078 19.7438 15.5911 19.7456Z" fill="#919191" />
                <path d="M15.5911 19.7456L6.42447 19.7543C4.4078 19.7561 2.75642 18.108 2.75413 16.0913L2.74542 6.92465C2.74359 4.90798 4.39176 3.25661 6.40842 3.25432L15.5751 3.24561C17.5918 3.24377 19.2431 4.89194 19.2454 6.90861L19.2541 16.0753C19.2564 18.0924 17.6078 19.7438 15.5911 19.7456Z" fill="#919191" />
                <path d="M11 14.7082C9.23128 14.7082 7.79166 13.269 7.79166 11.4998C7.79166 9.73067 9.23128 8.2915 11 8.2915C12.7687 8.2915 14.2083 9.73067 14.2083 11.4998C14.2083 13.269 12.7687 14.7082 11 14.7082ZM11 9.20817C9.73636 9.20817 8.70832 10.2362 8.70832 11.4998C8.70832 12.7635 9.73636 13.7915 11 13.7915C12.2636 13.7915 13.2917 12.7635 13.2917 11.4998C13.2917 10.2362 12.2636 9.20817 11 9.20817Z" fill="white" />
                <path d="M14.4375 8.75C14.8172 8.75 15.125 8.4422 15.125 8.0625C15.125 7.6828 14.8172 7.375 14.4375 7.375C14.0578 7.375 13.75 7.6828 13.75 8.0625C13.75 8.4422 14.0578 8.75 14.4375 8.75Z" fill="white" />
                <path d="M13.75 17.4582H8.24999C6.48128 17.4582 5.04166 16.019 5.04166 14.2498V8.74984C5.04166 6.98067 6.48128 5.5415 8.24999 5.5415H13.75C15.5187 5.5415 16.9583 6.98067 16.9583 8.74984V14.2498C16.9583 16.019 15.5187 17.4582 13.75 17.4582ZM8.24999 6.45817C6.98636 6.45817 5.95832 7.48621 5.95832 8.74984V14.2498C5.95832 15.5135 6.98636 16.5415 8.24999 16.5415H13.75C15.0136 16.5415 16.0417 15.5135 16.0417 14.2498V8.74984C16.0417 7.48621 15.0136 6.45817 13.75 6.45817H8.24999Z" fill="white" />
              </svg>

            </a>
            <a className="header__icons-link" href="/">
              <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6305 16.3398C20.4293 17.3665 19.5745 18.1489 18.5185 18.2955C16.8589 18.5398 14.0928 18.8332 10.9748 18.8332C7.90716 18.8332 5.14111 18.5398 3.43107 18.2955C2.37507 18.1489 1.51982 17.3665 1.31907 16.3398C1.11786 15.2155 0.916656 13.5532 0.916656 11.4998C0.916656 9.4465 1.11786 7.78413 1.31907 6.65984C1.52028 5.63317 2.37507 4.8508 3.43107 4.70413C5.0907 4.45984 7.85674 4.1665 10.9748 4.1665C14.0928 4.1665 16.8084 4.45984 18.5185 4.70413C19.5745 4.8508 20.4297 5.63317 20.6305 6.65984C20.8317 7.78413 21.0833 9.4465 21.0833 11.4998C21.0329 13.5532 20.8317 15.2155 20.6305 16.3398Z" fill="#919191" />
                <path opacity="0.05" d="M14.828 10.7852L9.5865 7.29086C9.32204 7.1144 8.98425 7.0979 8.70421 7.24823C8.42417 7.39811 8.25 7.68823 8.25 8.00586V14.9945C8.25 15.3121 8.42417 15.6027 8.70421 15.7526C8.83162 15.8209 8.9705 15.8544 9.10937 15.8544C9.27621 15.8544 9.44213 15.8058 9.58604 15.71L14.8275 12.2156C15.0673 12.0557 15.2102 11.7885 15.2102 11.5006C15.2107 11.2124 15.0673 10.9451 14.828 10.7852Z" fill="#919191" />
                <path opacity="0.07" d="M9.47878 7.48366L14.4242 10.7809C14.74 11.0078 14.9527 11.2108 14.9527 11.4744C14.9527 11.7379 14.85 11.9217 14.6249 12.0858C14.4549 12.2095 9.56266 15.4609 9.56266 15.4609C9.1497 15.7378 8.47916 15.6791 8.47916 14.7739V8.17436C8.47916 7.25541 9.20516 7.30124 9.47878 7.48366Z" fill="#919191" />
                <path d="M8.70834 14.9686V8.03174C8.70834 7.6912 9.08784 7.4877 9.37155 7.67699L14.5746 11.1457C14.828 11.3143 14.828 11.6865 14.5746 11.8556L9.37155 15.3243C9.08784 15.5127 8.70834 15.3096 8.70834 14.9686Z" fill="white" />
              </svg>

            </a>
          </div>
          <div className="header__checkbox">
            <button className="header__checkbox_btn header__checkbox_btn_active" type="button">UA</button>
            <button className="header__checkbox_btn" type="button">EN</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;