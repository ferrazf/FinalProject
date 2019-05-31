import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from "./home.jsx";
import Profile from "./profile.jsx";
import WorkoutDisplay from "./workoutDisplay.jsx";
import EditDisplay from "./editDisplay.jsx";
import AddDisplay from "./addDisplay.jsx";
import Register from "../components/Register.jsx";
import Login from "../components/Login.jsx";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = (props) => {

<<<<<<< HEAD
=======
  // functions
  const login = !props.isLoggedin(props.user) && (
    <Route path='/login' component={() => (
      <Login
        url={props.url}
        setUser={props.setUser}
        setOnLogin={props.setOnLogin}
        setError={props.setError}
      />)}
    />)
  const register = !props.isLoggedin(props.user) && (
    <Route path='/register' component={() => (
      <Register
        url={props.url}
        setUser={props.setUser}
        setOnLogin={props.setOnLogin}
        setError={props.setError}
      />)}
    />)
  const profile = props.isLoggedin(props.user) && (
    <Route path='/profile' component={Profile}/>)

  //return
>>>>>>> 7581fc35ad632527c153d1789c3603f5c4655853
  return (
    <main>
      <Switch>
        <Route exact path="/" component={() => (
          <Home
            workouts={props.workouts}
            viewWorkout={props.viewWorkout}
            handleStartWorkout={props.handleStartWorkout}
            handleFinishWorkout={props.handleFinishWorkout}
          />
        )}/>
<<<<<<< HEAD
        <Route path='/profile' component={Profile}/>
        <Route path='/workout' component={() => (<WorkoutDisplay workouts={props.workouts} updateExercise={props.updateExercise} workoutExercises={props.workoutExercises}/>)}/>
        <Route path='/edit' component={() => (<EditDisplay workout={props.currentWorkout} deleteExercise={props.deleteExercise} exercise={props.exercise} handleExerciseFormSubmit={props.handleExerciseFormSubmit} />)} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={() => <Register register={props.handleViewRegister} />} />
=======
        {profile}
        <Route path='/workout' component={() => (<WorkoutDisplay updateExercise={props.updateExercise} workoutExercises={props.workoutExercises}/>)}/>
        <Route path='/edit' component={() => (<EditDisplay exercise={props.exercise} />)} />
        {login}
        {register}
>>>>>>> 7581fc35ad632527c153d1789c3603f5c4655853
        <Route path='/add' component={() => (
          <AddDisplay
            currentMG={props.currentMG}
            muscle={props.muscle}
            exercises={props.exercises}
            updateMG={props.updateMG}
            addExercise={props.addExercise}
          />
        )}/>
    </Switch>
  </main>
)
}
export default Main
