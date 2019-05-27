import { Text, Button, Box } from 'grommet';
import React from 'react';
import { Link } from "react-router-dom";

function exercise_display(props) {
  
  return (
    <Box>
        <Text>Sets</Text>
        <Text>Reps</Text>
        <Text>Rest</Text>
        <Text>Description</Text>
        <Link to="/edit" >
          <Button
              alignSelf= "end"
              label="Edit"
          />
        </Link>
    </Box>
  );
}

export default exercise_display
  