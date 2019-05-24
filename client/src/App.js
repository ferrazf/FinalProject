import React from 'react';
import logo from './logo.svg';
import './App.css';
//import { Box, Button as GrommetButton, Grommet } from 'grommet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Box direction='row'>
         <GrommetButton color="primary" label='Login' />
        </Box>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
