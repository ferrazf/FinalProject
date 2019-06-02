import { Box, Button, Grommet, Heading, Text } from 'grommet';
import React from 'react';
import { Link } from "react-router-dom";
import { hpe } from "grommet-theme-hpe";
import { AddCircle } from "grommet-icons";

//Displays exercises that can be added to workout on the addDisplay container
function exercise_display_add(props) {
  return (
    <Grommet theme={hpe}>
      <Box
        direction="column"
        alignContent="center"
        pad="medium"
        margin={{
            top: "0",
            bottom: "1rem"
          }}
        border={{
          color: "border",
          side: "bottom"
        }}
      >
        <Heading
        alignSelf="left"
        level="4"
        margin={{
            top: "0",
            bottom: "0"
          }}
        >{props.exercise.name}</Heading>
        <Text>Description: {props.exercise.descr} </Text>
        <div style={{textAlign: "center"}}><Link to="/workout">
          <Button
            primary
            margin={{
            top: "1.2rem",
            bottom: "0.2rem"
            }}
            icon={<AddCircle />}
            alignSelf="center"
            label="Add"
            onClick={() => { props.addExercise(props.exercise) }}
          />
        </Link></div>
      </Box>
    </Grommet>
  );
}

export default exercise_display_add


