import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0)

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
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        
      </div>
      <h1>Vite + React Microservices Demo</h1>
      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

// Path: frontend/src/App.css
// run
// npm run dev
// build docker image
// sudo docker build -t my-vitereact-app .
// run docker container
// docker run -p 3000:80 frontend
// open browser and go to http://localhost:3000
// you should see the frontend app running