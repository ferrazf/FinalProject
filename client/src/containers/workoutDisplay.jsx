import React from 'react';
import { Box, Button, Grommet, InfiniteScroll } from 'grommet';
import { Link } from "react-router-dom";
import { hpe } from "grommet-theme-hpe";
import { AddCircle } from "grommet-icons";

import DisplayExercise from "../components/exercise/Display.jsx";

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
      <Box pad={{
        "top": "0.4rem"
      }}>
        <InfiniteScroll items={items}>
          {(item) => (item)}
        </InfiniteScroll>
        <Link to="/add" >
          <Button
            alignSelf="end"
            label="add"
            onClick={() => { }}
          />
        </Link>
      </Box>
      <Box align="center" pad="medium" direction="column" gap="small">
        <Button
          primary
          href="/add"
          icon={<AddCircle />}
          margin="small"
          alignSelf="center"
          label="Add"
          onClick={() => { }}
        />
      </Box>
    </Grommet>
  );
}

export default WorkoutDisplay;