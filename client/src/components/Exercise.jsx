import React, { useState } from 'react';
import { FormField, TextInput, Button, Select } from 'grommet';

export default ({ muscleGroups, handleFormSubmit }) => {

  const [value, setValue] = useState('');
  const options = muscleGroups;

  return(
    <form onSubmit={handleFormSubmit}>
      <FormField label="Muscle:">
        <Select
          name="muscle"
          options={options}
          value={value}
          onChange={({ option }) => setValue(option)}
        />
      </FormField>
      <FormField label="Name:">
        <TextInput type="text" name="name" placeholder="name" />
      </FormField>
      <FormField label="Description:">
        <TextInput type="text" name="descr" placeholder="description" />
      </FormField>
      <Button type="submit" primary label="Submit"/>
    </form>
  )
}
