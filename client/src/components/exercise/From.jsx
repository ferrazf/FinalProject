import React, { useState } from 'react';
import { FormField, TextInput, Button, Select } from 'grommet';

export default ({ muscle, handleFormSubmit }) => {

  const [value, setValue] = useState('');
  const options = muscle;

  return(
    <form onSubmit={handleFormSubmit}>
      <FormField label="Name:">
        <TextInput type="text" name="name" placeholder="name" />
      </FormField>
      <FormField label="Reps:">
        <TextInput type="text" name="Reps" placeholder="10" />
      </FormField>
      <FormField label="Rest Time:">
        <TextInput type="text" name="Rest" placeholder="1:00" />
      </FormField>
      <FormField label="Description:">
        <TextInput type="text" name="descr" placeholder="description" />
      </FormField>
      <Button type="submit" primary label="Submit"/>
    </form>
  )
}
