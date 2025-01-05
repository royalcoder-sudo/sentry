import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as Sentry from "@sentry/react";
import { createRoot } from 'react-dom/client';


let release = "react-sentry@1.0.0"

Sentry.init({
  dsn: "https://be57991d3ac8f2e6895dc1a34e9221e8@o4508584036794368.ingest.us.sentry.io/4508590075346944",
  integrations: [],
  release:release
});

class validationerror extends Error {
constructor(message){ super(message);
this.name = `ERROR: ${message} from ${release}`;
}
}



function App() {

  function handleclick(message){

throw new validationerror(message);

}

  const [count, setCount] = useState(0)

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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {setCount((count) => count + 1)
			handleclick("READ POC ERROR")
}

}>
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

export default  Sentry.withProfiler(App);
