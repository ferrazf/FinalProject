import React, { useState } from 'react';
import './App.css';
import { Grommet } from 'grommet';
import Nav from "./components/Nav.js";



function App(props) {
  const [ name, setName ] = useState("kobi")
  const [ workouts, setWorkout ] = useState( 
    {1:["Chest","Back"],
    2:["Rest"],
    3:["Legs"],
    4:["chest","back"], 
    5:["shoulders", "arms"],
    6:["rest"],
    7:["chest"]}
  );
  return (
    <Grommet plain>
      <Nav name={name}/>
    </Grommet>
  );
}

export default App;
