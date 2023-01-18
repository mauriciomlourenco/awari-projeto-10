import { useEffect, useState } from 'react'
import './App.css'
import List from './components/List';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    console.log('App')

    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => {
        console.log('Data', data);
        const { results } = data;
        setPokemons(results);
      })
      .catch(() => {
        console.log("Van't fetch API.")
      });
  }, []);

  useEffect(() => {
    console.log('pokemons', pokemons);
  }, [pokemons]);

  return (
    <div>
      <List items={pokemons} />
    </div>
  )
}

export default App
