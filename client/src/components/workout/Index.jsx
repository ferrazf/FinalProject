import React from "react";
import { Box, Button, Grommet, Text } from "grommet";
import { Link } from "react-router-dom";
import { hpe } from "grommet-theme-hpe";
import { Edit, FormView } from "grommet-icons";

function Workout(props) {
  const start = !props.workout.started_at && (
    <Button
      primary
      name={props.workout.workout_id}
      alignSelf="end"
      label="start"
      onClick={props.handleStart}
    />
  );
  const finish = props.workout.started_at && !props.workout.finished_at && (
    <Button
      name={props.workout.workout_id}
      alignSelf="end"
      label="finish"
      onClick={props.handleFinish}
    />
  );

  return (
    <Grommet theme={hpe}>
      <Box
        pad="medium"
        border={{
          color: "border",
          side: "all"
        }}
      >
        <Text> {props.workout.name.join(", ")} </Text>
        <Link to="/edit">
          <Button
            icon={<Edit />}
            alignSelf="end"
            label="edit"
            onClick={() => {}}
          />
        </Link>
        <Link to="/workout">
          <Button
            icon={<FormView />}
            alignSelf="end"
            label="view"
            onClick={() => {}}
          />
        </Link>
        {start}
        {finish}
      </Box>
    </Grommet>
  );
}
export default Workout;
