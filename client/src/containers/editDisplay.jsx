import React from 'react';
import { Box } from 'grommet';
import { Link } from "react-router-dom";

import Form from "../components/exercise/From.jsx";

function EditDisplay(props) {
    return (
      <Box>
        <Form 
            muscleGroup={props.muscleGroup} 
            muscle={props.muscle} 
            handleExerciseFormSubmit={props.handleExerciseFormSubmit} 
            muscle={props.muscle} 
        />
      </Box>
    );
  }
  
  export default EditDisplay;