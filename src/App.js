import { useEffect, useState } from 'react';
import './App.css';
import Layout from './component/Layout/Layout';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
      fetch('http://api.weatherapi.com/v1/forecast.json?key=698dc13c77094cf187695058201212&q=London&days=1')
      .then(response => response.json())
      .then(data => setData(data));
  }, [])

  return (
    <div className="App">
      {
      data !== null ?
      <Layout weather = {data}/>
      :
      <div>loading...</div>
      }
    </div>
  );
}

export default App;
