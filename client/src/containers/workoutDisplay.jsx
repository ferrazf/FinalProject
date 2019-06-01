import React from 'react';
import { Box, Button, Grommet, InfiniteScroll } from 'grommet';
import { Link } from "react-router-dom";
import { hpe } from "grommet-theme-hpe";
import { PlayFill } from "grommet-icons";
import { AddCircle } from "grommet-icons";
import DisplayExercise from "../components/exercise/Display.jsx";
import SpeechRecognition from "../components/exercise/SpeechRecognitionAPI.jsx";

//accepts exercise display components
function WorkoutDisplay(props) {
  const items = props.workoutExercises.map(exercise => (
    <DisplayExercise
      key={exercise.id}
      exercise={exercise}
      updateExercise={props.updateExercise}
    />
  ))
  return (
    <Grommet theme={hpe}>
      <Box
        direction="column"
        basis="1/2">
        <InfiniteScroll items={items}>
          {(item) => (item)}
        </InfiniteScroll>

        <Link
          to="/add" >
          <Button
            icon={<AddCircle />}
            margin="small"
            alignSelf="center"
            width="50%"
            label="Add"
            onClick={() => { }}
          />
        </Link>
        <Box align="center" pad="medium">
          <Box direction="row" gap="small">
            <SpeechRecognition exerciseList={props.workoutExercises}></SpeechRecognition>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default WorkoutDisplay;