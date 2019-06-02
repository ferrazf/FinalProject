import React, { useState } from "react";
import { Box, Grommet, Heading, Text } from "grommet";
import { Link } from "react-router-dom";
import { hpe } from "grommet-theme-hpe";
import { BlockQuote } from "grommet-icons";

function Nav(props) {
  const handleOnLogout = () => props.setUser({});

  const login = !props.isLoggedin(props.user) && <Link to="/login" />;
  const register = !props.isLoggedin(props.user) && (
    <Link to="/register"> Register</Link>
  );
  const profile = props.isLoggedin(props.user) && (
    <Link to="/profile">
      <Heading level="3" margin="none">
        {" "}
      </Heading>
    </Link>
  );
  const logout = props.isLoggedin(props.user) && (
    <Link to="/login" onClick={handleOnLogout}>
      {" "}
      Logout
    </Link>
  );
  const workouts = props.isLoggedin(props.user) && (
    <Link to="/"> Workouts</Link>
  );
  const logo = !props.isLoggedin(props.user) && (
    <Box
      alignContent="center"
      pad={{
        bottom: "0.6rem",
        top: "0.6rem"
      }}
    >
          <img alt="Logo" style={{ marginRight: "auto", marginLeft: "auto", display: "block", width: "50%" }} src="/images/Logo512.png" />
      <Heading alignSelf="center">
        Pocket <span style={{ color: "rgb(178, 231, 13)" }}>Spotter</span>
      </Heading>
    </Box>
  );

  return (
    <Grommet theme={hpe}>
      <Box fill="horizontal">
        <AppBar>
          {logo}
          {login}
          {workouts}
          {/* {profile} */}
          {logout}
          <Text>{props.name}</Text>
        </AppBar>
      </Box>
    </Grommet>
  );
}

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="center"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);
export default Nav;
