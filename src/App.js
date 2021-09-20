import './App.css';
import React, { useState, useEffect } from 'react'
import Astronomy from './components/Astronomy';

function App() {
  // api state
  const [data, setData] = useState([])

  // nasa key
  const API_KEY = process.env.REACT_APP_KEY

  // week function
  const today = new Date()
  const lastweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7).toISOString().slice(0, 10)

  // endpoint
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}?start_date=${lastweek}`


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <h1>Astronomy Pics of the Week</h1>
      <div className="astronomy">
        <Astronomy data={data}/>
      </div>
    </div>
  );
}

export default App;
