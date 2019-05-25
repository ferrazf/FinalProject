import React, { useState } from 'react';
import './App.css';
import { Grommet } from 'grommet';
import Nav from "./components/Nav.js";



function App(props) {
  const [ name, setName ] = useState("kobi")
  return (
    <Grommet plain>
      <Nav name={name}/>
    </Grommet>
  );
}

export default App;
