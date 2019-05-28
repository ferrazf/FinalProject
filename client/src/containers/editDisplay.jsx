import React from 'react';
import { Box, Button } from 'grommet';
import { Link } from "react-router-dom";

import Edit from "../components/exercise/Edit.jsx";

function EditDisplay(props) {
    return (
      <Box>
        <Edit test="test" />
        <Link to="/editform" >
          <Button
              alignSelf= "add"
              label="Edit"
          />
        </Link>
      </Box>
    );
  }
  
  export default EditDisplay;