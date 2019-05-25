import React from 'react';
import './App.css';
import { Grommet } from 'grommet';
import Nav from "./components/Nav.js";



function App() {
  return (
    <Grommet plain>
      <Nav />
    </Grommet>
  );
}

export default App;
