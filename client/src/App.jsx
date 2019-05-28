//==========================================
// import libraries/modules
//==========================================
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grommet } from 'grommet';
// import './App.css';
//==========================================
// import files
//==========================================
import Routes from './containers/routes.jsx'
import Nav from "./components/Nav.jsx";
import Message from './components/Message.jsx';
import Start from './components/start.jsx'
//==========================================
// Gobal var
//==========================================
const url = process.env.REACT_APP_SERVER_URL;

//==========================================
// App
//==========================================
function App(props) {
  //==========================================
  // States
  //==========================================
  const [ name, setName ] = useState("kobi")
  const [ workouts, setWorkout ] = useState({});
  const [ messages, setMessage ] = useState('')
  const [ initialized, setInitialized ] = useState(false);
  const [ muscleGroup, setMuscleGroups ] = useState('');
  const [ muscle, setMuscles ] = useState('');

  //==========================================
  // Functions
  //==========================================
  const setError = (content) => {
    this.setState({
        message:{
          type: 'error',
          content: `😱 Axios request failed: ${content}`
        }
      })
  }

  const getMuscleGroup = (muscle) => {
    return muscleGroup.filter(group => group.name === muscle);
  }

  const isEmpty = (object) => {
    return Object.entries(object).length === 0 && object.constructor === Object;
  }


  //==========================================
  // Events
  //==========================================
  useEffect(() => {
    try{
      if (!initialized) {
        axios.get(`${url}/muscles`)
          .then(({ data }) => {
            setMuscleGroups(data);
            setMuscles(data.map(muscle => muscle.name));
          });

        axios.get(`${url}/workouts`)
          .then(({ data }) => {
            setWorkout(data);
          });

        setInitialized(true);
      }
    }catch (e){
      setError(e);
    }
  })

  const handleExerciseFormSubmit = async (evt) => {
    evt.preventDefault();
    const exercise ={
      muscle_group_id: getMuscleGroup(evt.target.muscle.value)[0].id,
      name: evt.target.name.value,
      descr: evt.target.descr.value
    }

    evt.target.muscle.value = '';
    evt.target.name.value = '';
    evt.target.descr.value = '';

    try{
      const response = await axios.post(`${url}/exercises`, exercise);
      console.log(response)
      //set state
    }catch (e){
      setError(e);
    }
  }

  const updateWorkout = async (workout) => {
    try{
      const response = await axios.post(`${url}/workouts/${workout.id}`, workout);

      //set state
    }catch (e){
      setError(e);
    }
  }

  const handleStartWorkout = (evt) => {
    evt.preventDefault();
    debugger;
  }

  const handleFinishWorkout = (evt) => {
    evt.preventDefault();
    console.log("evt------------------------");
    console.log(evt);
    debugger;
  }

  //==========================================
  // Return
  //==========================================

  const message = messages && <Message message={messages}/>;
  const workoutRoute = !isEmpty(workouts) && (
      <Routes
        workouts={workouts}
        handleExerciseFormSubmit={handleExerciseFormSubmit}
        handleStartWorkout={handleStartWorkout}
        handleFinishWorkout={handleFinishWorkout}
      />
    );

  return (
    <Grommet plain>
      <Nav  name={name} />
      {message}
      {workoutRoute}
      <Start/>
    </Grommet>
  );
}

export default App;