import React from 'react';
import { Box, InfiniteScroll } from 'grommet';

import Workout from "../components/workout/Index.jsx";

function Home(props) {
  const items = props.workouts.map(workout => (
      <Workout
        key={workout.id}
        workout={workout}
        handleStart={props.handleStartWorkout}
        handleFinish={props.handleFinishWorkout}
      />
    ))
  return (
    <Box>
      <InfiniteScroll items={items}>
        {(item) => (item)}
      </InfiniteScroll>
    </Box>
  );
}

export default Home;
