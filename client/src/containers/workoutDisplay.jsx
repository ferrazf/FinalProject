import React, { useState } from 'react';
import { Box, Button, Grommet, InfiniteScroll } from 'grommet';
import { Link } from "react-router-dom";
import { hpe } from "grommet-theme-hpe";
import { PlayFill } from "grommet-icons";
import { AddCircle } from "grommet-icons";
import DisplayExercise from "../components/exercise/Display.jsx";
import SpeechRecognition from "../components/exercise/SpeechRecognitionAPI.jsx";

//accepts exercise display components
function WorkoutDisplay(props) {
  const [ started, setStart ] = useState(false)
  const [ counter, setCounter ] = useState(1)
  const [ currentExercise, setCurrentExercise ] = useState('test')
  const [ next, setNext ] = useState(true)

  const items = props.workoutExercises.map(exercise => (
    <DisplayExercise
      key={exercise.id}
      exercise={exercise}
      updateExercise={props.updateExercise}
    />
  ))
  return (
    <Grommet theme={hpe}>
      <Box
        direction="column"
        basis="1/2">
        <InfiniteScroll items={items}>
          {(item) => (item)}
        </InfiniteScroll>
      </Box>
      <Box align="center" pad="medium" direction="column" gap="small">
        <Link to="/add" >
          <Button
            primary
            icon={<AddCircle />}
            margin="small" 
            alignSelf="center"
            label="Add"
            onClick={() => { }}
          />
        </Link>
        <Link to="/" >
          <Button
            primary
            icon={<AddCircle />}
            margin="small"
            alignSelf="center"
            label="Complete"
            onClick={() => { }}
          />
        </Link>
        <Box align="center" pad="medium">
          <Box direction="row" gap="small">
            <SpeechRecognition 
              exerciseList={props.workoutExercises}
              started={started}
              setStart={setStart}  
              counter={counter}
              setCounter={setCounter}
              currentExercise={currentExercise}
              setCurrentExercise={setCurrentExercise}
              next={next}
              setNext={setNext}
            />
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default WorkoutDisplay;