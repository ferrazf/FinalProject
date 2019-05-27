import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from "../containers/home.jsx";
import Profile from "../containers/profile.jsx";
import Workout from "../containers/workouts.jsx";
import Exercise from "../components/Exercise.jsx";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = (props) => (
  <main>
    <Switch>
        <Route exact path="/" component={() => <Home workouts={props.workouts}/>} />
        <Route path='/profile' component={Profile}/>
        <Route path='/workout' component={Workout}/>
        <Route path='/edit' component={() => <Exercise handleExerciseFormSubmit={props.handleExerciseFormSubmit}/>} />
    </Switch>
  </main>
)

export default Main
