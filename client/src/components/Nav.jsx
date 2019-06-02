import React, { useState } from "react";
import { Box, Grommet, Heading, Text } from "grommet";
import { Link } from "react-router-dom";
import { hpe } from "grommet-theme-hpe";
import { BlockQuote, FastForward } from "grommet-icons";
import '../App.css'; // Tell Webpack that Button.js uses these styles

function Nav(props) {
  const handleOnLogout = () => props.setUser({});
  const usrName = props.isLoggedin(props.user) && props.name.substr(0, props.name.indexOf(" "))
  const login = !props.isLoggedin(props.user) && <Link to="/login" />
  const welcomemsg = props.isLoggedin(props.user) && `Welcome, ${usrName}`
  const menuTxtCss = {
    color: "#fff",
    textDecoration: "none"
  }
  const logoTxtCss = {
    marginRight: "auto",
    marginLeft: "auto",
    display: "block",
    width: "50%"
  }

  const register = !props.isLoggedin(props.user) && (<Link to="/register"> Register</Link>);
  const profile = props.isLoggedin(props.user) && (
    <Link to="/profile">
      <Heading level="3" margin="none">
        {" "}
      </Heading>
    </Link>
  );
  const logout = props.isLoggedin(props.user) && (
    <Link style={menuTxtCss} to="/login" onClick={handleOnLogout}>
      {" "}
      Logout
    </Link>
  );
  const workouts = props.isLoggedin(props.user) && (
    <Link to="/"
      style={menuTxtCss}> Workouts</Link>
  );
  const logo = !props.isLoggedin(props.user) && (
    <Box
      alignContent="center"
      pad={{
        bottom: "0.6rem",
        top: "0.6rem"
      }}
    >
      <img alt="Logo" style={logoTxtCss} src="/images/Logo512.png" />
      <Heading alignSelf="center">
        Pocket <span style={{ color: "rgb(178, 231, 13)" }}>Spotter</span>
      </Heading>
    </Box>
  );

  const menuButtonCss = !props.isLoggedin(props.user) ? '' : 'NavBar-btn';

  return (
    <Grommet theme={hpe}>
      <Box fill="horizontal">
        <AppBar>
          {logo}
          {login}
          <span class={menuButtonCss}>{workouts}</span>
          {/* {profile} */}
          {/* <span style={Object.assign(menuButtonSecondaryCss, menuButtonCss)}>{logout}</span> */}
          <span class={menuButtonCss}>{logout}</span>
          <Text style={{
            margin: "0px 1rem",
            fontSize: "1rem",
            textIndent: "0.5rem"
          }}>{welcomemsg}</Text>
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
