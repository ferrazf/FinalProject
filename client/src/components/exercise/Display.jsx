import { Box, Button, Grommet, Heading, Text } from "grommet";
import React from "react";
import { Link } from "react-router-dom";
import { hpe } from "grommet-theme-hpe";
import { Edit, PlayFill } from "grommet-icons";

//Displays exercises in workoutDisplay Container
//passes exercise prop through callback inorder to allow edit
function exercise_display(props) {
  return (
    <Grommet theme={hpe}>
      <Box
        direction="column"
        margin="medium"
        border={{
          color: "border",
          side: "bottom"
        }}
      >
        <Heading
          level="5"
          size="small"
          margin={{
            bottom: "0.8rem",
            top: "none"
          }}
          pad="none"
        >
          {" "}
          {props.exercise.name}{" "}
        </Heading>
        <Text>Sets: {props.exercise.sets}</Text>
        <Text>Reps: {props.exercise.reps}</Text>
        <Text>Rest: {props.exercise.rest}</Text>
        <Text>Description: {props.exercise.descr} </Text>
            <Link to="/edit">
              <Button
                id={"edit" + props.exercise.id}
                icon={<Edit />}
                margin="small"
                alignSelf="end"
                label="Edit"
                onClick={() => {
                  props.updateExercise(props.exercise);
                }}
              />
            </Link>
            <Button
              primary
              id={"start" + props.exercise.id}
              icon={<PlayFill />}
              margin="small"
              alignSelf="end"
              label="Start"
              onClick={() => {
                console.log(props);
              }}
            />
      </Box>
    </Grommet>
  );
}

export default exercise_display;
