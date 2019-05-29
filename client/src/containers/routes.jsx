import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from "./home.jsx";
import Profile from "./profile.jsx";
import WorkoutDisplay from "./workoutDisplay.jsx";
import EditDisplay from "./editDisplay.jsx";
import AddDisplay from "./addDisplay.jsx";
import Register from "../components/Register.jsx";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = (props) => {
  console.log(props.exercise)
  return (
    <main>
      <Switch>
        <Route exact path="/" component={() => (
          <Home
            workouts={props.workouts}
            handleStartWorkout={props.handleStartWorkout}
            handleFinishWorkout={props.handleFinishWorkout}
          />
        )}
        />
        <Route path='/profile' component={Profile}/>
        <Route path='/workout' component={() => (<WorkoutDisplay updateExercise={props.updateExercise} workoutExercises={props.workoutExercises}/>)}/>
        <Route path='/edit' component={() => (<EditDisplay exercise={props.exercise}/>)}/>
        <Route path='/register' component={() => <Register register={props.handleViewRegister} />} />
        <Route path='/add' component={() => (
          <AddDisplay
            muscleGroup={props.muscleGroup} 
            muscle={props.muscle} 
            handleExerciseFormSubmit={props.handleExerciseFormSubmit} 
            exercises={props.exercises}
            updateMG={props.updateMG}
            addExercise={props.addExercise}
          />
        )}
        />
    </Switch>
  </main>
)
}
export default Main
