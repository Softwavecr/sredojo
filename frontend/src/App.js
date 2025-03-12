import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  const getRandomServer = () => {
    return Math.floor(Math.random() * 2) + 1;
  };

  useEffect(() => { 
    const serverNumber = getRandomServer();
    const port = serverNumber === 1 ? 5001 : 5002;

    fetch(`http://127.0.0.1:${port}/microservice${serverNumber}`)
      .then((response) => response.json()) 
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Microservices Demo</h1>
      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default App;

