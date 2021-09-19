import './App.css';
import React, { useState, useEffect } from 'react'
import Astronomy from './components/Astronomy';

function App() {
  // api state
  const [data, setData] = useState([])
  const API_KEY = process.env.REACT_APP_KEY
  const today = new Date()
  const lastweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}?count=20?start_date=${lastweek}`


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(error => console.log(error))
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spacestagram</h1>
      </header>
      <div className="astronomy">
        <Astronomy data={data}/>
      </div>
    </div>
  );
}

export default App;
