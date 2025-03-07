import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5001/microservice1")
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

