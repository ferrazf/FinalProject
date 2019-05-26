import React from 'react';
import { FormField, TextInput, Button } from 'grommet';


export default( { handleFormSubmit } ) => (
  <form onSubmit={handleFormSubmit}>
    <FormField label="Muscle:">
      <TextInput type="text" name="muscle" placeholder="muscle" />
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