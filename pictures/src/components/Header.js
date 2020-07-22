import React from 'react';
import Logo from '../images/Logo.svg';
import Search from '../images/search.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__info">
        <img className="header__logo" src={Logo} alt="Логотип" />
        <nav className="header__nav">
          <ul className="header__list">
            <a className="header__link" href="#"><li className="header__text"><span className="header__text_span">About</span></li></a>
            <a className="header__link" href="#"><li className="header__text">Help</li></a>
            <a className="header__link" href="#"><li className="header__text">Features</li></a>
            <a className="header__link" href="#"><li className="header__text">Signup</li></a>
          </ul>
        </nav>
      </div>
      <form className="header__search">
        <input className="header__input" placeholder={Search} type="text" />
        <button className="header__button" type="submit"></button>
      </form>
    </header>
  )

}

export default Header;
