import React, { useState } from 'react';
import { Box, Button, Grommet, InfiniteScroll } from 'grommet';
import { Link } from "react-router-dom";
import { hpe } from "grommet-theme-hpe";
import { Duplicate } from "grommet-icons";
import DisplayExercise from "../components/exercise/Display.jsx";
import SpeechRecognition from "../components/exercise/SpeechRecognitionAPI.jsx";
import Timer from "../components/exercise/Timer.jsx";

//accepts exercise display components
function WorkoutDisplay(props) {
  const [ started, setStart ] = useState(false)
  const [ counter, setCounter ] = useState(2)
  const [ currentExercise, setCurrentExercise ] = useState('')
  const [ next, setNext ] = useState(true)
  const [ startTimer, setStartTimer ]  = useState(false)



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
        direction="column">
        <Box
          align="center"
          pad="medium"
          direction="column"
          gap="small"
          border={{
            color: "border",
            side: "bottom"
          }}>
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
            setStartTimer={setStartTimer}
          />
        </Box>
        {/* <Timer currentExercise={currentExercise} startTimer={startTimer}/> */}
        <InfiniteScroll items={items}>
          {(item) => (item)}
        </InfiniteScroll>
      </Box>
      <Box align="center" pad="medium" direction="column" gap="small">
        <Link to="/add" >
          <Button
            primary
            icon={<Duplicate />}
            margin="small"
            style={{
              padding: "0.4rem 3.3rem"
            }}
            alignSelf="center"
            label="Add Exercise"
            onClick={() => { }}
          />
        </Link>
      </Box>
    </Grommet>
  );
}

export default WorkoutDisplay;