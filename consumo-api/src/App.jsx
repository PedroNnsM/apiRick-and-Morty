import React, { useEffect, useState } from 'react'

import Navbar from './components/Navbar/Navbar';
import Characters from './components/Characters/Characters';

function App() {
  const [characters, setCharacters] = useState([]);

  const initialUrl = 'https://rickandmortyapi.com/api/character'
  
  const fetchCharacters = (url) =>{
    fetch(url)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
    .catch(error => console.log(error))
  }
  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])
  return (

    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline text-center">
      Hello world!
      </h1>
      <div className=' w-full py-5 flex items-center justify-center'>
        <Characters characters={characters} />
      </div>
    </>
  )
}

export default App
