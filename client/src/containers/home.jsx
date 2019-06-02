import React from "react";
import { Box, InfiniteScroll } from "grommet";

import Workout from "../components/workout/Index.jsx";
import FirstPage from "../components/FirstPage.jsx";

function Home(props) {
  const items =
    props.isLoggedin(props.user) &&
    props.workouts.map(workout => (
      <Workout
        key={workout.workout_id}
        workout={workout}
        viewWorkout={props.viewWorkout}
        handleStart={props.handleStartWorkout}
        handleFinish={props.handleFinishWorkout}
      />
    ));

  const firstPage = !props.isLoggedin(props.user) && <FirstPage />;
  const workouts = props.isLoggedin(props.user) && (
    <Box>
      <InfiniteScroll items={items}>{item => item}</InfiniteScroll>
    </Box>
  );
  return (
    <>
      {firstPage}
      {workouts}
    </>
  );
}

export default Home;
