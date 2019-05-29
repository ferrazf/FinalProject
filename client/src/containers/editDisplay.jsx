import React from 'react';
import { Box } from 'grommet';


import Form from "../components/exercise/From.jsx";
//accepts exercise form components
function EditDisplay(props) {
    return (
      <Box>
        <Form 
            handleExerciseFormSubmit={props.handleExerciseFormSubmit}   
            exercise={props.exercise}
            updateExercise={props.updateExercise}
        />
      </Box>
    );
  }
  
  export default EditDisplay;