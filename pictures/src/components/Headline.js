import React from 'react';
import Illustration from '../images/illustation.png'

function Headline() {
  return(
    <section className="headline">
      <h1 className="headline__author">Save your data storage here.</h1>
      <p className="headline__camption">Data Warehouse is a data storage area that has been
tested for security, so you can store your data here
safely but not be afraid of being stolen by others.</p>
      <div className="headline__buttons">
        <button className="headline__btn-prev" type="button">&larr;Previous</button>
        <button className="headline__btn-next" type="button">Next &rarr;</button>
      </div>
      <img className="headline__image" scr={Illustration} alt="Image"/>
    </section>
  )
}

export default Headline;
