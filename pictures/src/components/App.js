import React from 'react';
import Header from './Header';
import Headline from './Headline';
import Footer from './Footer';
import { api } from './Api';

function App() {
  const [photos, setPhotos] = React.useState([]);
  const [nextPhoto, setNextPhoto] = React.useState(true);
  const [value, setValue] = React.useState({ isValue: false, value: '' });
  const [error, setError] = React.useState(false);


  function handleNextPhoto() {
    setNextPhoto(true);
    if (value.isValue === true) {
      api.getPhotos(`photos/random?query=${value.value}`)
        .then((data) => {
          setPhotos([data].map(item => ({
            name: `${item.user.name}`,
            id: `${item.id}`,
            alt: `${item.alt_description}`,
            desc: `${item.user.bio}`,
            link: `${item.urls.regular}`
          })));
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setNextPhoto(false);
        })
    } else {
      api.getPhotos('photos/random')
        .then((data) => {
          setPhotos([data].map(item => ({
            name: `${item.user.name}`,
            id: `${item.id}`,
            alt: `${item.alt_description}`,
            desc: `${item.user.bio}`,
            link: `${item.urls.regular}`
          })));
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setNextPhoto(false);
        })
    }
  }

  React.useEffect(() => {
    nextPhoto && value.isValue === false && api.getPhotos('photos/random')
      .then((data) => {
        setPhotos([data].map(item => ({
          name: `${item.user.name}`,
          id: `${item.id}`,
          alt: `${item.alt_description}`,
          desc: `${item.user.bio}`,
          link: `${item.urls.regular}`
        })));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setNextPhoto(false);
      })
  }, [nextPhoto, value.isValue])

  function handleSearchPhoto(str) {
    setValue({ isValue: true, value: str });
    if (str) {
      api.getPhotos(`search/photos?query=${str}&per_page=1`)
        .then((data) => {
          if (data.results.length !== 0) {
            setError(false);
            setPhotos(data.results.map(item => ({
              name: `${item.user.name}`,
              id: `${item.id}`,
              alt: `${item.alt_description}`,
              desc: `${item.user.bio}`,
              link: `${item.urls.regular}`
            })));
          } else {
            setError(true);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setNextPhoto(false);
        })
    } else {
      api.getPhotos('photos/random')
        .then((data) => {
          setPhotos([data].map(item => ({
            name: `${item.user.name}`,
            id: `${item.id}`,
            alt: `${item.alt_description}`,
            desc: `${item.user.bio}`,
            link: `${item.urls.regular}`
          })));
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setNextPhoto(false);
        })
    }
  }

  return (
    <div className="page">
      <Header onClick={handleSearchPhoto} />
      <section className="headline">
        {photos.map(photo =>
          <Headline
            isError={error}
            onClick={handleNextPhoto}
            key={photo.id}
            alt={photo.alt}
            desc={photo.desc}
            name={photo.name}
            link={photo.link}
          />)}
      </section>
      <Footer />
    </div>
  );
}

export default App;
