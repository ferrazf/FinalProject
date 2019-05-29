import React from 'react';
import { Box } from 'grommet';
import { Link } from "react-router-dom";

import Form from "../components/exercise/From.jsx";

function EditDisplay(props) {
    return (
      <Box>
        <Form 
            handleExerciseFormSubmit={props.handleExerciseFormSubmit} 
            exercise={props.exercise}
        />
      </Box>
    );
  }
  
  export default EditDisplay;