import { Text, Button, Box } from 'grommet';
import React from 'react';
import { Link } from "react-router-dom";

//Displays exercises that can be added to workout on the add container  
function exercise_display_add(props) {
  return (
    <Box>
        <Text> {props.exercise.name} </Text>
        <Text>Description:{props.exercise.descr} </Text>
        <Link to="/workout">
          <Button
              alignSelf= "end"
              label="add"
              onClick={() => {}}
          />
        </Link>
    </Box>

  );
}

export default exercise_display_add


