import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__lists">
          <li className="footer__list">Design free by:&#32;<a className="footer__link" target="_blank" href="http://slabdsgn.com/">@SLAB Design Studio</a></li>
          <li className="footer__list">Developer&#32;<a className="footer__link" target="_blank" href="https://github.com/Vladimir-art">Vladimir Ermolaev</a></li>
        </ul>
      </nav>
      <div className="footer__info">
        <h3 className="footer__text">Ready to collaborate!</h3>
        <address className="footer__address">
          Just shoot me an email at <a className="footer__link" target="_blank" href="vl.ermolaevv@yandex.ru">vl.ermolaevv@yandex.ru</a>
        </address>
      </div>
    </footer>
  )
}

export default Footer;
