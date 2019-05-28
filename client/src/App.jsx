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
  const [ exercises, setExercises] = useState([
    {
        "id": 4,
        "exercise_id": 1,
        "name": "Barbell Bench Press",
        "descr": "Main Muscle Worked: Chest.",
        "sets": 6,
        "reps": 10,
        "rest": 1,
        "muscle_group_id": 6,
        "muscle_group_name": "Chest"
    },
    {
        "id": 4,
        "exercise_id": 4,
        "name": "Standing Cable Lift",
        "descr": "Main Muscle Worked: Abdominals.",
        "sets": 6,
        "reps": 10,
        "rest": 1,
        "muscle_group_id": 1,
        "muscle_group_name": "Abdominals"
    }
 ])

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
  }

  const handleFinishWorkout = (evt) => {
    evt.preventDefault();
    console.log("evt------------------------");
    console.log(evt);
  }

  //==========================================
  // Return
  //==========================================

  const message = messages && <Message message={messages}/>;
  const workoutRoute = !isEmpty(workouts) && (
      <Routes
        workouts={workouts}
        muscleGroup={muscleGroup}
        muscle={muscle}
        handleExerciseFormSubmit={handleExerciseFormSubmit}
        handleStartWorkout={handleStartWorkout}
        handleFinishWorkout={handleFinishWorkout}
        exercises={exercises}
      />
    );

  return (
    <Grommet plain>
      <Nav  name={name} />
      {message}
      {workoutRoute}
    </Grommet>
  );
}

export default App;