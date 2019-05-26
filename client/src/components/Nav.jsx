import React from 'react';
import { Box, Heading, Text} from 'grommet';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "../containers/home.js";
import Profile from "../containers/profile.js";

function Nav(props) {
    return (
        <Router>
            <Box fill= "horizontal">
                <AppBar >
                <Link to="/" justify='start'>Pocket Spotter</Link>
                <Link to="/profile"><Heading level='3' margin='none'> Profile</Heading></Link>
                <Text>{props.name}</Text> 
                </AppBar>
            </Box>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
        </Router>
    );
}

const AppBar = (props) => (
      <Box
        tag='header'
        direction='row'
        align='center'
        justify='center'
        background='brand'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1' }}
        {...props}
    />
);
export default Nav;