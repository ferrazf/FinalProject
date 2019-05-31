import React from 'react';
import { Box, InfiniteScroll } from 'grommet';

import MuscleGroup from "../components/exercise/MuscleGroupSelect.jsx";
import Add from "../components/exercise/Add.jsx";

//accepts selectMuscleGroup compenent and exercise add components 

function  addDisplay(props) {
  const items = props.exercises.map(exercise => (
    <Add
      key={exercise.id}
      exercise={exercise}
      addExercise={props.addExercise}

    />
  ))
    return (
      <Box>
        <MuscleGroup
            currentMG={props.currentMG}
            muscle={props.muscle} 
            updateMG={props.updateMG}
        />
        <InfiniteScroll items={items}>
            {(item) => (item)}
          </InfiniteScroll>
      </Box>
    );
  }
  
  export default addDisplay;