//==========================================
// import libraries/modules
//==========================================
import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grommet } from 'grommet';
// import './App.css';
//==========================================
// import files
//==========================================
import Nav from "./components/Nav.js";
import Exercise from './components/Exercise.jsx';
import Message from './components/Message.jsx';

//==========================================
// Gobal var
//==========================================
const url = process.env.REACT_APP_SERVER_URL;

//==========================================
// App
//==========================================
export default class App extends Component {

  constructor(props){
    super();

    this.state = {}
    this.getMuscleGroups();

    this.handleExerciseFormSubmit = this.handleExerciseFormSubmit.bind(this);
  }

  getMuscleGroups = async () => {
    try{
      const response = await axios.get(`${url}/muscles`);
      this.setState({
        muscleGroups: response.data,
        muscle: response.data.map(muscle => muscle.name)
      });
    }catch (e){
      this.setError(e);
    }
  }

  setError = (content) => {
    this.setState({
        message:{
          type: 'error',
          content: `😱 Axios request failed: ${content}`
        }
      })
  }

  getMuscleGroup = (muscle) => {
    return this.state.muscleGroups.filter(group => group.name === muscle);
  }

  //==========================================
  // Events
  //==========================================
  handleExerciseFormSubmit = async (evt) => {
    evt.preventDefault();
    debugger;
    console.log("---------------------------------- handle")
    console.log(evt.target);
    const exercise ={
      muscle: this.getMuscleGroup(evt.target.muscle.value)[0].id,
      name: evt.target.name.value,
      descr: evt.target.descr.value
    }

    evt.target.muscle.value = '';
    evt.target.name.value = '';
    evt.target.descr.value = '';

    try{
      const response = await axios.post(`${url}/exercises`, exercise);
      console.log('response---------------------------------');
      console.log(response.data);
      //set state
    }catch (e){
      this.setError(e);
    }
  }

  //==========================================
  // Render
  //==========================================
  render() {
    const message = this.state.message && <Message message={this.state.message}/>

    return (
      <Grommet plain>
        <Nav />
        {message}
        <Router>
          <Link to="/exercises/new">+ Exercise</Link>
          <Route path="/exercises/new" component={() => <Exercise muscleGroups={this.state.muscle} handleFormSubmit={this.handleExerciseFormSubmit}/>} />
        </Router>
      </Grommet>
    );
  }
}
