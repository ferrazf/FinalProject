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

    this.handleExerciseFormSubmit = this.handleExerciseFormSubmit.bind(this);
  }

  //==========================================
  // Events
  //==========================================
  handleExerciseFormSubmit = async (evt) => {
    evt.preventDefault();

    const exercise ={
      muscle: evt.target.muscle.value,
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
    }catch (e){
      this.setState({
        message:{
          type: 'error',
          content: `😱 Axios request failed: ${e}`
        }
      })
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
          <Route path="/exercises/new" component={() => <Exercise handleFormSubmit={this.handleExerciseFormSubmit}/>} />
        </Router>
      </Grommet>
    );
  }
}
