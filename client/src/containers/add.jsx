import React from 'react';
import { Box } from 'grommet';
import { Link } from "react-router-dom";

import Add from "../components/exercise/Add.jsx";

function EditDisplay(props) {
    return (
      <Box>
        <Add
            muscleGroup={props.muscleGroup} 
            muscle={props.muscle} 
            handleExerciseFormSubmit={props.handleExerciseFormSubmit} 
            muscle={props.muscle} 
        />
      </Box>
    );
  }
  
  export default EditDisplay;