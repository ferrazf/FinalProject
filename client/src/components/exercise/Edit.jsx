import { FormField, Form, Button, Heading } from 'grommet';
import React from 'react';


function exerciseEdit(props) {
  
  return (
    
    <Form>
        <Heading>{props.test}</Heading>
        <FormField name="sets" label="Sets" />
        <FormField name="reps" label="Reps" />
        <FormField name="rest" label="Rest Time" />
        <FormField name="descr" label="Description" />
        <Button type="submit" primary label="Submit" />
    </Form>

  );
}

export default exerciseEdit
  