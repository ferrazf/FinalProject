import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Box, Button as GrommetButton, Grommet } from 'grommet';
import Exercise from './components/Exercise.jsx';
import Message from './components/Message.jsx';

const url = process.env.REACT_APP_SERVER_URL;

export default class App extends Component {

  constructor(props){
    super();

    this.state = {
      // message:{}
    }

    this.handleExerciseFormSubmit = this.handleExerciseFormSubmit.bind(this);
  }

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

  render() {
    const message = this.state.message && <Message message={this.state.message}/>

    return (
      <div className="App">
        <h1>Hello</h1>

        <Router>
          <Link to="/exercises/new">+ Exercise</Link>
          <Route path="/exercises/new" component={() => <Exercise handleFormSubmit={this.handleExerciseFormSubmit}/>} />
        </Router>
        {message}
      </div>
    );
  }
}

        // <Exercise handleFormSubmit={this.handleExerciseFormSubmit}/>
