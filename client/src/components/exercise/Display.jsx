import { Text, Button, Box } from 'grommet';
import React from 'react';
import { Link, Route } from "react-router-dom";

function exercise_display(props) {
  return (
    <Box>
        <Text> {props.exercise.name} </Text>
        <Text>Sets:  {props.exercise.sets}</Text>
        <Text>Reps: {props.exercise.reps}</Text>
        <Text>Rest: {props.exercise.rest}</Text>
        <Text>Description:{props.exercise.descr} </Text>
        <Link to="/edit">
            <Button
                alignSelf= "end"
                label="edit"
                onClick={() => {props.EditExercise(props.exercise)}}
            />
        </Link>
    </Box>
    
  );
}

export default exercise_display
