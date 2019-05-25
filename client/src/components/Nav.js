import React from 'react';
import { Box, Button, Heading} from 'grommet';
import { Notification } from 'grommet-icons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../../containers/home.js";

function Nav() {
    return (
        <Router>
            <Box fill= "horizontal">
                <AppBar >
                <Link to="/">Pocket Spotter</Link>
                    <Heading level='3' margin='none'>   My App!</Heading>
                <Button icon={<Notification />} onClick={() => {}} />
                </AppBar>
            </Box>
            <Route exact path="/" component={Home} />
        </Router>
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