import React from "react";
import { Box, Button, Grommet, Text } from "grommet";
import { Link } from "react-router-dom";
import { hpe } from "grommet-theme-hpe";
import { FormView } from "grommet-icons";
import { CheckboxSelected, PlayFill } from "grommet-icons";

function Workout(props) {
  const start = !props.workout.started_at && (
    <Button
      primary
      icon={<PlayFill />}
      name={props.workout.workout_id}
      alignSelf="end"
      label="Start"
      onClick={props.handleStart}
    />
  );
  const finish = props.workout.started_at && !props.workout.finished_at && (
    <Button
      primary
      icon={<CheckboxSelected />}
      name={props.workout.workout_id}
      alignSelf="end"
      label="Finish"
      onClick={props.handleFinish}
    />
  );
  return (

    <Grommet theme={hpe}>
      <Box pad="medium" direction="row" gap="small">
        <Text > {props.workout.name.join(', ')} </Text>
      </Box>
      <Box
        align="center"
        pad="small"
        border={{
          color: "border",
          side: "bottom"
        }}
      >
        <Box pad="medium" direction="row" gap="small">
          <Link to="/workout">
            <Button
              icon={<FormView />}
              alignSelf="start"
              label="View"
              onClick={() => {props.viewWorkout(props.workout)}}
            />
          </Link>
          {start}
          {finish}
        </Box>
      </Box>
    </Grommet>
  )
}
export default Workout;
