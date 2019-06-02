import React from 'react';
import { Box, InfiniteScroll, Button, Grommet } from 'grommet';
import { Link } from "react-router-dom";
import MuscleGroup from "../components/exercise/MuscleGroupSelect.jsx";
import Add from "../components/exercise/Add.jsx";
import { hpe } from "grommet-theme-hpe";
import { FormPreviousLink } from "grommet-icons";
//accepts selectMuscleGroup compenent and exercise add components

function  addDisplay(props) {
  const items = props.exercises.map(exercise => (
    <Add
      key={exercise.id}
      exercise={exercise}
      addExercise={props.addExercise}
    />
  ))
    return (
      <Grommet theme={hpe}>
        <Box>
          <MuscleGroup
              currentMG={props.currentMG}
              muscle={props.muscle}
              updateMG={props.updateMG}
          />
          <InfiniteScroll items={items}>
              {(item) => (item)}
            </InfiniteScroll>
            <Link to="/workout">
              <Button
                margin={{
                left: "1rem",
                bottom: "1rem"
                }}
                icon={<FormPreviousLink />}
                label="Back"
                onClick={() => {}}
              />
            </Link>
        </Box>
      </Grommet>
    );
  }

  export default addDisplay;