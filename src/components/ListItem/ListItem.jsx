import { useEffect, useState } from 'react';
import './ListItem.css';

const  ListItem = ({ name, url }) => {
    const [details, setDetails] = useState();

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const details = {
                    sprite: data.sprites.other['official-artwork'].front_default
                }
                console.log(details)
                setDetails(details);
            }).catch(() => {
                console.error("Can't fetch Item", url);
            })
    }, [url]);

    return (
        <div className='list-item-wrapper'>
            <div className='list-item-img-container'>
                { details && (                    
                        <img className='list-item-img' src={details.sprite} alt={name} />                    
                )}
            </div>
            <p className='list-item-title'>{name}</p>
        </div>
    )
};

export default ListItem;