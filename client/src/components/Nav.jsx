import React, { useState } from 'react';
import { Box, Grommet, Heading, Text } from 'grommet';
import { Link } from "react-router-dom";
import { hpe } from "grommet-theme-hpe";

function Nav(props) {

    const handleOnLogout = () => props.setUser({});

    const login = !props.isLoggedin(props.user) && (<Link to="/login"> Login</Link>)
    const register = !props.isLoggedin(props.user) && (<Link to="/register"> Register</Link>)
    const logout = props.isLoggedin(props.user) && (<Link to="/login" onClick={handleOnLogout}> Logout</Link>)

    return (
        <Grommet theme={hpe}>
            <Box fill="horizontal">
                <AppBar >
                    <Link to="/" justify='start'> Pocket Spotter</Link>
                    {/* Replace with logout if user logged in */}
                    {register}
                    {login}
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