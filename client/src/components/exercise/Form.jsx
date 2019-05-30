import React from 'react';
import { Box, Button, FormField, TextInput, Text, Heading } from 'grommet';

// displays form to update an individual exercise in editdisplay container
export default ({ exercise, handleFormSubmit }) => {

  console.log("exercise: ", exercise)

  return(
    <form onSubmit={handleFormSubmit}>
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
      </FormField>
      <Box align="center" pad="none">
        <Box direction="row" gap="small">
          <Button margin="medium" type="submit" primary label="Submit" />
        </Box>
      </Box>

    </form>
  )
}
