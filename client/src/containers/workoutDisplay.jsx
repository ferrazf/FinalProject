import React from 'react';
import { Box, Button, InfiniteScroll } from 'grommet';
import { Link } from "react-router-dom";

import DisplayExercise from "../components/exercise/Display.jsx";

function WorkoutDisplay(props) {
    const items = props.exercises.map(exercise => (
      <DisplayExercise
        key={exercise.id}
        exercise={exercise}
        EditExercise={props.EditExercise}
      />
    ))
    return (
      <Box>
          <InfiniteScroll items={items}>
            {(item) => (item)}
          </InfiniteScroll>
          <Link to="/add" >
                <Button
                    alignSelf= "end"
                    label="add"
                    onClick={() => {}}
                />
            </Link>
      </Box>
    );
  }
  
  export default WorkoutDisplay;