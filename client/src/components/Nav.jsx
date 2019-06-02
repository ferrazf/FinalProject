import React, { useState } from 'react';
import { Box, Grommet, Heading, Text } from 'grommet';
import { Link } from "react-router-dom";
import { hpe } from "grommet-theme-hpe";

function Nav(props) {

    const handleOnLogout = () => props.setUser({});

    const login = !props.isLoggedin(props.user) && (<Link to="/login"> Login</Link>)
    const register = !props.isLoggedin(props.user) && (<Link to="/register"> Register</Link>)
    const profile = props.isLoggedin(props.user) && (<Link to="/profile"><Heading level='3' margin='none'> Profile</Heading></Link>)
    const logout = props.isLoggedin(props.user) && (<Link to="/login" onClick={handleOnLogout}> Logout</Link>)
    const workouts = props.isLoggedin(props.user) && (<Link to="/"> Workouts</Link>)
    const logo = <img scr="/images/logo192.png"></img>

    return (
        <Grommet theme={hpe}>
            <Box fill="horizontal">
                <AppBar >
                    {logo}
                    {workouts}
                    {/* {profile} */}
                    {logout}
                    <Text>{props.name}</Text>
                </AppBar>
            </Box>
        </Grommet>
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