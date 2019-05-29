import React from 'react';
import { Box, Button, InfiniteScroll } from 'grommet';
import { Link } from "react-router-dom";

import DisplayExercise from "../components/exercise/Display.jsx";

//accepts exercise display components 
function WorkoutDisplay(props) {
    console.log(props)
    const items = props.workoutExercises.map(exercise => (
      <DisplayExercise
        key={exercise.id}
        exercise={exercise}
        updateExercise={props.updateExercise}
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