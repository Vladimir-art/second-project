import React from 'react';
import Header from './Header';
import Headline from './Headline';
import { api } from './Api';

function App() {
  const [photos, setPhotos] = React.useState([]);

  React.useEffect(() => {
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
  }, [])
  console.log(photos);
  return (
    <div className="page">
      <Header />
      <section className="headline">
        {photos.map(photo => <Headline key={photo.id} alt={photo.alt} desc={photo.desc} name={photo.name} link={photo.link} />)}
      </section>

      {/* <Headline item={photos}/> */}
    </div>
  );
}

export default App;
