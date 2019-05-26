import React from 'react';
import { Box, Grommet } from 'grommet'

export default( { message } ) => {
  let background = 'status-error';

  switch(message.type){
    case 'info':
      background = 'neutral-3';
      break;
    case 'success':
      background = 'status-ok';
      break;
    case 'warning':
      background = 'status-warning';
      break;
    default:
      break;
  }

  return(
    <Grommet>
      <Box align="center" background={background}>
        <p>{message.content}</p>
      </Box>
    </Grommet>
  )
}