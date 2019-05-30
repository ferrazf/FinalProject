import React from 'react';
import { Box, Button, FormField, TextInput, Text, Heading } from 'grommet';
import { Link } from "react-router-dom";

// displays form to update an individual exercise in editDisplay container
export default ({ exercise, handleExerciseFormSubmit }) => {


  return(
    <form onSubmit={handleExerciseFormSubmit}>
      <Heading level="2" size="small" margin={{
        "bottom": "0.8rem", top: "none"
      }} pad="none"> Exercise: {exercise.name} </Heading>
      <FormField label="Sets:">
        <TextInput type="text" name="Sets" placeholder={exercise.sets} />
      </FormField>
      <FormField label="Reps:">
        <TextInput type="text" name="Reps" placeholder={exercise.reps} />
      </FormField>
      <FormField label="Rest Time:">
        <TextInput type="text" name="Rest" placeholder={exercise.rest} />
        <TextInput type="hidden" name="ExName" value={exercise.name} />
      </FormField>
      <Box align="center" pad="none">
        <Box direction="row" gap="small">
          <Link to="/workout">
            <Button margin="medium" type="submit" primary label="Submit" />
          </Link>
        </Box>
      </Box>
    </form>
  )
}

/* <Link to="/workout"> */