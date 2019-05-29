import { Box, Button, Grommet, Text } from 'grommet';
import React from 'react';
import { Link } from "react-router-dom";
import { hpe } from "grommet-theme-hpe";
import { AddCircle } from "grommet-icons";

//Displays exercises that can be added to workout on the addDisplay container
function exercise_display_add(props) {
  return (
    <Grommet theme={hpe}>
      <Box>
        <Text> {props.exercise.name} </Text>
        <Text>Description:{props.exercise.descr} </Text>
        <Link to="/workout">
          <Button
            icon={<AddCircle />}
            alignSelf="end"
            label="Add"
            onClick={() => { props.addExercise(props.exercise) }}
          />
        </Link>
      </Box>
    </Grommet>
  );
}

export default exercise_display_add


