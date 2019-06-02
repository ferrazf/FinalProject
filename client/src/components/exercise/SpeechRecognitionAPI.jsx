import React, { Component } from "react";
import { Box, Button } from 'grommet';
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import TextToSpeech from 'speak-tts'
import { FormPreviousLink, Microphone } from "grommet-icons";
import { Link } from "react-router-dom";

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

const propTypes = {
  // Props injected by SpeechRecognition
  updateExercise: PropTypes.func,
  exerciseList: PropTypes.func,
  transcript: PropTypes.string,
  interimTranscript: PropTypes.string,
  resetTranscript: PropTypes.func,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  toggleListen: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

const Dictaphone = ({
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
  browserSupportsSpeechRecognition
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  // Helper function - returns index of spoken word if exists in list
  function getObjByValueContains(ObjList, valueContains) {
    if (valueContains) {
      for (let obj of ObjList) {
        console.log("current obj = ", obj.name.toLowerCase(), ", said word = ", valueContains);
        if (obj.name.toLowerCase().includes(valueContains)) {
          console.log("obj.name includes ", valueContains);
          return obj;
        }
      }
    }
  }

  //transcript = Set of words after being transcribed
  //interimTranscript - Set of words currently being transcribed

  //If the user said the word start, listen for an exercise name in the same sentence
  // if (interimTranscript === "start")
  if (transcript.includes("start") || transcript.includes("finish")) {
    let speechTxt = transcript;
    let startOrFinish = transcript.includes("start") ? "start" : "finish";
    //Create an array with all said words, except key words
    let speechTxtArr = speechTxt.trim().toLowerCase().replace("start", "").replace("finish", "").split(" ");
    console.log("TCL: speechTxtArr", speechTxtArr)
    let exerciseObj = null;

    for (let txt of speechTxtArr) {
      if (getObjByValueContains(exerciseList, txt))
        exerciseObj = getObjByValueContains(exerciseList, txt);
    }
    //User has finished speaking, finish listening and reply if words match exercise name
    if (listening && exerciseObj && startOrFinish === "start") {
      stopListening()
      resetTranscript()
      speech.speak({
        queue: false,
        text: `Beginning ${exerciseObj.name} exercise. ${exerciseObj.sets} sets of ${exerciseObj.reps} reps remaining. Rest time is ${exerciseObj.rest} minute.`,
      }).catch(e => {
        console.error("An error occurred :", e)
      })
    }
    //Add Logic - Stop should only work if already started
    else if (listening && exerciseObj && startOrFinish === "finish") {
      stopListening()
      resetTranscript()
      speech.speak({
        queue: false,
        text: `Finished ${exerciseObj.name} exercise. Would you like to start the next exercise?`,
      }).catch(e => {
        console.error("An error occurred :", e)
      })
    }
  }

  return (
    <Box
      direction="row">
      <Link to="/"
        style={{
          textAlign: "center"
      }}>
        <Button
          primary
          href="/"
          icon={<FormPreviousLink />}
          margin="small"
          alignSelf="center"
          label="Main Menu"
          onClick={() => { }}
        />
        <Button
          primary
          icon={<Microphone />}
          margin="small"
          alignSelf="center"
          label="Hands-Free"
          onClick={(e) => {
            e.preventDefault();
            startListening();
          }}

        />
      </Link>
    </Box>
  );
};

const options = {
  autoStart: false,
  continuous: false
}

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(options)(Dictaphone);
