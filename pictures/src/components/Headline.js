import React from 'react';
import illustration from '../images/illustration.png';

function Headline(props) {

  return (
    <>
      <div className="headline__info">
        <h1 className="headline__author">{props.name}</h1>
        <p className="headline__camption">{props.desc}</p>
        <div className="headline__buttons">
          <button className="headline__btn-prev" type="button">&larr; Previous</button>
          <button className="headline__btn-next" type="button">Next &rarr;</button>
        </div>
      </div>
      <img className="headline__image" src={props.link} alt={props.alt} />
    </>
  )
}

export default Headline;
