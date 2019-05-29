import React from 'react';
import { FormField, TextInput, Button, Text } from 'grommet';
import { Link } from "react-router-dom";

// displays form to update an individual exercise in editDisplay container
export default ({ exercise, handleExerciseFormSubmit }) => {


  return(
    <form onSubmit={handleExerciseFormSubmit}>
      <Text>Exercise: {exercise.name} </Text>
        
      <FormField label="Sets:">
        <TextInput type="text" name="Sets" placeholder={exercise.sets} />
      </FormField>
      <FormField label="Reps:">
        <TextInput type="text" name="Reps" placeholder={exercise.reps} />
      </FormField>
      <FormField label="Rest Time:">
        <TextInput type="text" name="Rest" placeholder={exercise.rest} />
      </FormField>
      <Link to="/workout">
        <Button type="submit" primary label="Submit"/>
      </Link>
    </form>
  )
}
