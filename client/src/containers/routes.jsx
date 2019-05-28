import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from "./home.jsx";
import Profile from "./profile.jsx";
import WorkoutDisplay from "./workoutDisplay.jsx";
import EditDisplay from "./editDisplay.jsx";
import Exercise from "../components/exercise/From.jsx";

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
        <Route path='/workout' component={WorkoutDisplay}/>
        <Route path='/edit' component={EditDisplay}/>
        <Route path='/editform' component={() => <Exercise handleExerciseFormSubmit={props.handleExerciseFormSubmit} muscle={props.muscle}/>} />
    </Switch>
  </main>
)

export default Main
