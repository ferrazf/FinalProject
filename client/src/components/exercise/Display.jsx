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
        <Box align="left">
          <Box direction="row">
            <Link to="/edit">
              <Button
                primary
                id={"edit" + props.exercise.id}
                icon={<Edit />}
                margin={{
                  bottom: "0.8rem",
                  top: "0.8rem"
                }}
                alignSelf="end"
                label="Edit"
                onClick={() => {
                  props.updateExercise(props.exercise);
                }}
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default exercise_display;
