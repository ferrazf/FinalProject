import React, { useState } from 'react';
import { Box, Button, FormField, TextInput, Form, Heading } from 'grommet';
import { Redirect, Link } from "react-router-dom";

// displays form to update an individual exercise in editDisplay container
function EditForm(props) {
  const [ toWorkout, setToWorkout ] = useState(false)
  const formSubmit = (evt) => {
    setToWorkout(true)
    props.handleExerciseFormSubmit(evt)
  }
  if (toWorkout === true) {
    return <Redirect to='/workout' />
  }

  return(
    <Form onSubmit={formSubmit}>
      <Heading level="2" size="small" margin={{
        "bottom": "0.8rem", top: "none"
      }} pad="none"> Exercise: {props.exercise.name} </Heading>
      <FormField label="Sets:">
        <TextInput type="text" name="Sets" defaultValue={props.exercise.sets} />
      </FormField>
      <FormField label="Reps:">
        <TextInput type="text" name="Reps" defaultValue={props.exercise.reps} />
      </FormField>
      <FormField label="Rest Time:">
        <TextInput type="text" name="Rest" defaultValue={props.exercise.rest} />
        <TextInput type="hidden" name="ExName" value={props.exercise.name} />
      </FormField>
      <Box align="center" pad="none">
        <Box direction="row" gap="small">
            <Button margin="medium" type="submit" primary label="Submit" />
        </Box>
        <Link to="/workout">
            <Button
              alignSelf="start"
              label="Delete"
              onClick={() => {props.deleteExercise(props.workout, props.exercise)}}
            />
          </Link>
      </Box>
    </Form>
  )
}

export default EditForm