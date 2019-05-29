import React, { useState } from 'react';
import { FormField, TextInput, Button, Text } from 'grommet';

export default ({ exercise, handleFormSubmit }) => {

  

  return(
    <form onSubmit={handleFormSubmit}>
      <Text>Exercise: </Text>
        
      <FormField label="Sets:">
        <TextInput type="text" name="Reps" placeholder="10" />
      </FormField>
      <FormField label="Reps:">
        <TextInput type="text" name="Reps" placeholder="10" />
      </FormField>
      <FormField label="Rest Time:">
        <TextInput type="text" name="Rest" placeholder="1:00" />
      </FormField>

      <Button type="submit" primary label="Submit"/>
    </form>
  )
}
