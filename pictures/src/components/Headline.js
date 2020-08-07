import React from 'react';
import illustration from '../images/illustration.png';
import { useParams, useHistory } from 'react-router-dom';

function Headline(props) {

  const history = useHistory();

  const handleImageLink = (
    `${props.isError ? illustration : props.link}`
  )

  const handleClassInactive = (
    `headline__btn-prev ${props.isError && 'headline__btn-prev_inactive'}`
  )

  const handleText = (
    `${props.isError ? "I'm sorry..." : props.name}`
  )

  const handleDescription = (
    `${props.desc === 'null' ? 'There is so wonderful image!' : props.desc}`
  )

  const handleDescError = (
    `${props.isError && 'We are not found for your search...'}`
  )

  return (
    <>
      <div className="headline__info">
        <h1 className="headline__author">{handleText}</h1>
        <p className="headline__camption">{`${props.isError ? 'We are not found for your search...' : handleDescription}`}</p>
        <div className="headline__buttons">
          {/* <button className={handleClassInactive} type="button" disabled={props.isError} onClick={() => history.goBack()}>&larr; Previous</button> */}
          <button className={handleClassInactive} type="button" onClick={props.onClick} disabled={props.isError}>Next &rarr;</button>
        </div>
      </div>
      <img className="headline__image" src={handleImageLink} alt={props.alt} />
    </>
  )
}

export default Headline;
