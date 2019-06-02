import React, { Component } from "react";
import { Box, Button } from 'grommet';
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import TextToSpeech from 'speak-tts'
import { PlayFill } from "grommet-icons";
import { Redirect } from 'react-router';


const speech = new TextToSpeech();
speech.init({
  'volume': 1,
  'lang': 'en-GB',
  'rate': 1, 
  'pitch': 1,
  'voice': 'Google UK English Female',
  'splitSentences': true,
  'listeners': {
    'onvoiceschanged': (voices) => {
      console.log("Event voiceschanged", voices)
    }
  }
})

const options = {
  autoStart: false,
  continuous: false
}
const propTypes = {
  // Props injected by SpeechRecognition
  updateExercise: PropTypes.func,
  exerciseList: PropTypes.object,
  transcript: PropTypes.string,
  interimTranscript: PropTypes.string,
  resetTranscript: PropTypes.func,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  toggleListen: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  started: PropTypes.bool,
  setStart: PropTypes.func, 
  counter: PropTypes.int,
  setCounter: PropTypes.func,
  currentExercise: PropTypes.object,
  setCurrentExercise: PropTypes.func,
  next: PropTypes.bool,
  setNext: PropTypes.func
};

const Dictaphone = ({
  next,
  setNext,
  counter,
  setCounter,
  currentExercise,
  setCurrentExercise,
  started,
  setStart,
  updateExercise,
  listening,
  exerciseList,
  transcript,
  interimTranscript,
  resetTranscript,
  startListening,
  stopListening,
  abortListening,
  toggleListen,
  browserSupportsSpeechRecognition,
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }


  // Helper function - returns index of spoken word if exists in list
  function getObjByValueContains(ObjList, valueContains) {
    if (valueContains) {
      for (let obj of ObjList) {
        if (obj.name.trim().toLowerCase() === valueContains.trim().toLowerCase()) {
          setCurrentExercise(obj)
          return obj;
        }
      }
    }
  }
 

  
  //transcript = Set of words after being transcribed
  //interimTranscript - Set of words currently being transcribed

  //If the user said the word start, listen for an exercise name in the same sentence
  // if (interimTranscript === "start")
  if (transcript.includes("start")) {
    let speechTxt = interimTranscript;
    //Create an array with all said words, except key words
    let speechTxtExercise = speechTxt.trim().toLowerCase().replace("start", "");
    let exerciseObj = null;

  
    if (getObjByValueContains(exerciseList, speechTxtExercise))
      exerciseObj = getObjByValueContains(exerciseList, speechTxtExercise);
    
  
    //User has finished speaking, finish listening and reply if words match exercise name
    if (listening && exerciseObj && speechTxt.includes("start")) {
      stopListening()
      resetTranscript()
      
      speech.speak({
        queue: false,
        text: `Beginning ${exerciseObj.name} exercise. ${exerciseObj.sets} sets of ${exerciseObj.reps} reps remaining. Rest time is ${exerciseObj.rest} minute. say done when you are finished your set`,
        listeners: {
          onstart: (data) => {
            console.log(data.currentTarget.text);
          },
          onend: () => {
            console.log("End utterance");
          }
        }
      }).then(data => {
        startListening()
        setStart(true)
      }).catch(e => {
        console.error("An error occurred :", e)
      })

      
    }
    //Add Logic - Stop should only work if already started
  } 
  console.log("outside: ",counter)
    if (transcript.includes("done")  && started){
    console.log(next)
    stopListening()
    resetTranscript()
    console.log("current counter: " ,counter)
      if (counter > currentExercise.sets) {
        speech.speak({
          queue: false,
          text: `${currentExercise.name} is complete`,
          listeners: {
            onstart: (data) => {
              console.log(data.currentTarget.text);
              console.log("finished counter: ", counter)
            },
            onend: () => {
              console.log("End utterance");
              console.log("finished counter: ", counter)
            }
          }
        }).catch(e => {
          console.error("An error occurred :", e)
        }) 
        setStart(false)
        setCounter(1)
      } else  if (counter <= currentExercise.sets && next){
        setNext(false)
        setCounter(counter + 1)
        speech.speak({
          queue: false,
          text: `Starting timer for ${currentExercise.rest} minute. enjoy your break!`,
          listeners: {
            onstart: (data) => {
              console.log(data.currentTarget.text);
            },
            onend: () => {
              console.log("End utterance");
            }
          }
        }).catch(e => {
          console.error("An error occurred :", e)
        }) 
        setTimeout(function(){ 
          speech.speak({
            queue: false,
            text: `Begin set ${counter} of ${currentExercise.name}. say done when you are finished your set`, 
            listeners: {
              onstart: (data) => {
                console.log(data.currentTarget.text);
                console.log("set counter: ", counter)
              },
              onend: () => {
                console.log("End utterance");
              }
            }
          }).then(() => {
            setNext(true)
            startListening()
          }).catch(e => {
            console.error("An error occurred :", e)
          }) 
          
        }, 15000 * Number(currentExercise.rest));
    }
  }

  // else if (listening && exerciseObj && startOrFinish === "finish") {
  //   stopListening()
  //   resetTranscript()
  //   speech.speak({
  //     queue: false,
  //     text: `Finished ${exerciseObj.name} exercise. Would you like to start the next exercise?`,
  //   }).catch(e => {
  //     console.error("An error occurred :", e)
  //   })  
  // }

  return (
    <Box
      direction="row"
      basis="1/2">
      {/* <button onClick={resetTranscript}>Reset</button> */}
      <Button
        primary
        fill="horizontal"
        icon={<PlayFill />}
        margin="small"
        label="Start Workout"
        onClick={startListening}></Button>
      <span>{interimTranscript}</span>
    </Box>
  );
};



Dictaphone.propTypes = propTypes;

export default SpeechRecognition(options)(Dictaphone);
