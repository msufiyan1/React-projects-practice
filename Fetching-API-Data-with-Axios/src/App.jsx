import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [dataCome, setDataCome] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('https://picsum.photos/v2/list', { timeout: 10000 });
      setDataCome(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Random Images</h1>
      <button onClick={getData}>Get Data</button>

      {dataCome.map((item, index) => (
        <div className="mdiv" key={index}>
          <img src={item.download_url} alt={item.author} width="300" />
          <h2>{item.author}</h2>
        </div>
      ))}
    </div>
  );
};

export default App;
