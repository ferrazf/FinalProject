import React from 'react';
import { FormField, TextInput, Button, Text } from 'grommet';

// displays form to update an individual exercise 
export default ({ exercise, handleFormSubmit }) => {

  

  return(
    <form onSubmit={handleFormSubmit}>
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
      <Button type="submit" primary label="Submit"/>

    </form>
  )
}
