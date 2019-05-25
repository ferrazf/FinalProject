import React from 'react';
import { Box, Button, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';

function Nav() {
    return (
        <Box fill= "horizontal">
            <AppBar >
                Pocket Spotter
                <Heading level='3' margin='none'>   My App!</Heading>
               <Button icon={<Notification />} onClick={() => {}} />
            </AppBar>
        </Box>
    );
}

const AppBar = (props) => (
      <Box
        tag='header'
        direction='row'
        align='center'
        justify='start'
        background='brand'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1' }}
        {...props}
    />
);
export default Nav;