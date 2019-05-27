import React from 'react';
import { Box, Button } from 'grommet';
import { Link } from "react-router-dom";


function EditDisplay(props) {
    return (
      <Box>
        <Link to="/editform" >
          <Button
              alignSelf= "end"
              label="Edit"
          />
        </Link>
      </Box>
    );
  }
  
  export default EditDisplay;