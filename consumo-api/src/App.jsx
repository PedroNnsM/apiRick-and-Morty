import React, { useEffect, useState } from 'react'



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

      <h1>Hello world!</h1>
      <div className='container'>
        
      </div>
    </>
  )
}

export default App
