//==========================================
// import libraries/modules
//==========================================
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grommet } from 'grommet';
// import './App.css';
//==========================================
// import files
//==========================================
import Routes from './containers/routes.jsx'
import Nav from "./components/Nav.jsx";
import Message from './components/Message.jsx';

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
  const [name, setName] = useState("kobi");
  const [ workouts, setWorkout ] = useState([]);
  const [ messages, setMessage ] = useState('')
  const [ initialized, setInitialized ] = useState(false);
  const [ muscleGroup, setMuscleGroups ] = useState('');
  const [ muscle, setMuscles ] = useState('');

  //==========================================
  // Functions
  //==========================================
  const setError = (content) => {
    setMessage({
        type: 'error',
        content: `😱 Axios request failed: ${content}`
      });
  }

  const getMuscleGroup = (muscle) => {
    return muscleGroup.filter(group => group.name === muscle);
  }

  // const isEmpty = (object) => {
  //   return Object.entries(object).length === 0 && object.constructor === Object;
  // }

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

      //set state
    }catch (e){
      setError(e);
    }
  }

  const updateWorkout = async (id, updateWorkout) => {
    try{

      const { data } = await axios.put(`${url}/workouts/${id}`, updateWorkout);

      //set state
      const newWorkouts = workouts.map(workout => {
        if(workout.workout_id == data[0].id){
          workout.started_at = data[0].started_at;
          workout.finished_at = data[0].finished_at;
        }
        return workout;
      });
      setWorkout(newWorkouts);

    }catch (e){
      console.error(e);
      setError(e);
    }
  }

  const handleViewRegister = (username) => {
    return "Hello " + username;
  }

  const handleStartWorkout = (evt) => {
    evt.preventDefault();
    const id = Number(evt.target.name);
    const workout = { started_at: new Date() }
    updateWorkout(id, workout);
  }

  const handleFinishWorkout = (evt) => {
    evt.preventDefault();
    const id = Number(evt.target.name);
    const workout = { finished_at: new Date() }
    updateWorkout(id, workout);
  }

  //==========================================
  // Return
  //==========================================
  const message = messages && <Message message={messages} />;

  const workoutRoute = workouts.length && (
      <Routes
        workouts={workouts}
        handleViewRegister={handleViewRegister}
        handleExerciseFormSubmit={handleExerciseFormSubmit}
        handleStartWorkout={handleStartWorkout}
        handleFinishWorkout={handleFinishWorkout}
      />
    );

  return (
    <Grommet plain>
      <Nav name={name} />
      {message}
      {/* {userRoute} */}
      {workoutRoute}
    </Grommet>
  );
}

export default App;