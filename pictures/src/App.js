import React from 'react';


function App() {
  return (
    <div className="page">
      <header className="header">
        <img className="header__logo" src="" alt="Логотип" />
        <nav>
          <ul>
            <li><span>About</span></li>
            <li>Help</li>
            <li>Features</li>
            <li>Signup</li>
          </ul>
        </nav>
        <div className="header__search">
            <input className="header__input" />
            <button className="header__button" type="submit"></button>
        </div>
      </header>
    </div>
  );
}

export default App;
