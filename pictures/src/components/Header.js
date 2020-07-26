import React from 'react';
import Logo from '../images/Logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__info">
        <img className="header__logo" src={Logo} alt="Логотип" />
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__text"><a className="header__link" target="_blank" href="#">About</a></li>
            <li className="header__text"><a className="header__link" target="_blank" href="#">Help</a></li>
            <li className="header__text"><a className="header__link" target="_blank" href="#">Features</a></li>
            <li className="header__text"><a className="header__link" target="_blank" href="#">Signup</a></li>
          </ul>
        </nav>
      </div>
      <form className="header__search header__search_scale">
        <input className="header__input" placeholder="Search" type="text" />
        <button className="header__button" type="submit"></button>
      </form>
    </header>
  )

}

export default Header;
