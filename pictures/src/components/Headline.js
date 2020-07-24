import React from 'react';
// import illustration from '../images/123.jpg';
import illustration from '../images/illustration.png';

function Headline() {
  console.log(illustration);
  return (
    <section className="headline">
      <div className="headline__info">
        <h1 className="headline__author">Save your data storage here.</h1>
        <p className="headline__camption">Data Warehouse is a data storage area that has been
        tested for security, so you can store your data here
safely but not be afraid of being stolen by others.</p>
        <div className="headline__buttons">
          <button className="headline__btn-prev" type="button">&larr; Previous</button>
          <button className="headline__btn-next" type="button">Next &rarr;</button>
        </div>
      </div>
      <img className="headline__image" src={illustration} alt="Логотип" />
    </section>
  )
}

export default Headline;
