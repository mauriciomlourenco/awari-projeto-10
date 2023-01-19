import { useCallback, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import Heart from '../Heart';
import './ListItem.css';

const  ListItem = ({ name, url }) => {
  const [details, setDetails] = useState();
  const [favorite, setFavorite] = useState(false);

  const appContext = useContext(AppContext);
  const isFavorite = appContext.favorites.includes(name);


  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const details = {
          sprite: data.sprites.other['official-artwork'].front_default
        };
        console.log(details);
        setDetails(details);
      }).catch(() => {
        console.error('Can\'t fetch Item', url);
      });
  }, [url]);

  const toggle = useCallback(() => {
    if(isFavorite){
      appContext.remove(name);
    } else {
      appContext.add(name);
    }
  }, [appContext, name, isFavorite]);

  return (
    <div className='list-item-wrapper'>
      <div className='list-item-img-container'>
        { details && (
          <img className='list-item-img' src={details.sprite} alt={name} />
        )}
      </div>
      <p className='list-item-title'>{name}</p>
      <div className='list-item-heart-wrapper'>
        <Heart onClick={toggle} selected={isFavorite} />
      </div>

    </div>
  );
};

export default ListItem;
