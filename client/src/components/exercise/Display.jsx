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
      <Box pad="medium"
        border={{
          color: "border",
          side: "bottom"
        }}>
        <Text> {props.exercise.name} </Text>
        <Text>Sets: {props.exercise.sets}</Text>
        <Text>Reps: {props.exercise.reps}</Text>
        <Text>Rest: {props.exercise.rest}</Text>
        <Text>Description: {props.exercise.descr} </Text>
        <Link to="/edit">
          <Button
            icon={<Edit />}
            margin="small"
            alignSelf="end"
            label="Edit"
            onClick={() => { props.updateExercise(props.exercise) }}
          />
        </Link>
      </Box>
  </Grommet>
  );
}

export default exercise_display
