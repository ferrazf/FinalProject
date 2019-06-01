import React from 'react';
import { Box, Grommet } from 'grommet';
import { hpe } from "grommet-theme-hpe";
import Form from "../components/exercise/Form.jsx";

//accepts exercise form components
function EditDisplay(props) {
  return (
    <Grommet theme={hpe}>
      <Box pad="medium">
        <Form
            handleExerciseFormSubmit={props.handleExerciseFormSubmit}
            exercise={props.exercise}
        />
      </Box>
    </Grommet>
    );
  }

  export default EditDisplay;