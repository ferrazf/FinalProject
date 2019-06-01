import React from 'react';
import { Box, Grommet } from 'grommet';
import { hpe } from "grommet-theme-hpe";
import EditForm from "../components/exercise/Form.jsx";

//accepts exercise form components
function EditDisplay(props) {

  return (
    <Grommet theme={hpe}>
      <Box pad="medium">
        <EditForm
            handleExerciseFormSubmit={props.handleExerciseFormSubmit}
            exercise={props.exercise}
            workout={props.workout}
            deleteExercise={props.deleteExercise}
        />
      </Box>
    </Grommet>
    );
  }

  export default EditDisplay;
