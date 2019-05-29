import { Box, Button, Grommet, Text } from 'grommet';
import React from 'react';
import { Link } from "react-router-dom";
import { hpe } from "grommet-theme-hpe";
import { Edit } from "grommet-icons";

//Displays exercises in workoutDisplay Container
//passes exercise prop through callback inorder to allow edit
function exercise_display(props) {
  return (
    <Grommet theme={hpe}>
      <Box>
        <Text> {props.exercise.name} </Text>
        <Text>Sets:  {props.exercise.sets}</Text>
        <Text>Reps: {props.exercise.reps}</Text>
        <Text>Rest: {props.exercise.rest}</Text>
        <Text>Description:{props.exercise.descr} </Text>
        <Link to="/edit">
          <Button
            secondary
            icon={<Edit />}
            margin="small"
            alignSelf="end"
            label="edit"
            onClick={() => { props.updateExercise(props.exercise) }}
          />
        </Link>
      </Box>
  </Grommet>
  );
}

export default exercise_display
