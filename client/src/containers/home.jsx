import React from 'react';
import { Box, InfiniteScroll } from 'grommet';

import Workout from "../components/workout.jsx";

function Home(props) {
    return (
      <Box>
        <InfiniteScroll items={
          [<Workout workout={props.workouts[1]}/>, 
          <Workout workout={props.workouts[2]}/>, 
          <Workout workout={props.workouts[3]}/>, 
          <Workout workout={props.workouts[4]}/>, 
          <Workout workout={props.workouts[5]}/>, 
          <Workout workout={props.workouts[6]}/>, 
          <Workout workout={props.workouts[7]}/>]
        }>
          {(item) => (item)}
        </InfiniteScroll>
      </Box>
    );
  }
  
  export default Home;