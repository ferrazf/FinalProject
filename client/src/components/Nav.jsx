import React, { useState } from "react";
import { Box, Button, Grommet, Heading, Text } from "grommet";
import { Link } from "react-router-dom";
import { hpe } from "grommet-theme-hpe";
import { Logout, Menu } from "grommet-icons";
import '../App.css'; // Tell Webpack that Button.js uses these styles

function Nav(props) {
  const handleOnLogout = () => props.setUser({});
  let userNames = [];
  if(props.name){ userNames = props.name.split(' '); }
  const usrName = props.isLoggedin(props.user) && userNames.length && userNames[0];
  const login = !props.isLoggedin(props.user) && <Link to="/login" />
  const welcomemsg = props.isLoggedin(props.user) && `Welcome, ${usrName}!`
  const menuButtonCss = !props.isLoggedin(props.user) ? '' : 'NavBar-btn'
  const welcomeTxtCss = "welcome-txt"
  const menuBtnCss = {
    color: "#fff",
    textDecoration: "none",
    width: "124px"
  }
  const menuBtnCssSm = {
    color: "#fff",
    textDecoration: "none",
    width: "144px"
  }
  const navLogoCss = {
    display: "inline-block",
    width: "3rem",
    position: "relative",
    top: "0.3rem",
    background: "url('/images/Logo192.png')",
    backgroundSize: "cover"
  }
  const logoTxtCss = {
    marginRight: "auto",
    marginLeft: "auto",
    display: "block",
    width: "50%"
  }
  const menu = props.isLoggedin(props.user) && (
      <Box align="center"
        pad="none"
        style={{
          width: "100%"
        }}>
        <Box direction="row"
          gap="small"
          margin="none"
          style={{
            width: "100%",
            justifyContent: "space-between"
          }}>
        <div alt="Logo" style={navLogoCss}></div>
        <Box align="center"
          pad="none"
          style={{
            textAlign: "right"
          }}>
          <Box direction="row"
            gap="small"
            margin="none">
          <Link style={menuBtnCss} to="/" >
            <Button icon={<Menu size="1rem" />}
              plain
              label="Workouts"
                gap="xsmall"
                style={{
                  margin: "0.4rem 0rem",
                  border: "1px solid rgb(9, 181, 143)",
                  padding: "0.5rem 1rem",
                  color: "rgb(255, 255, 255)",
                  textDecoration: "none",
                  fontDize: "1rem",
                  borderRadius: "3px 3px 0px 0px",
                  backgroundColor: "rgb(0, 149, 115)"
                }}>
              </Button>
            </Link>
            <Link style={menuBtnCssSm} to="/login" >
              <Button icon={<Logout size="1rem" />}
                plain
                label="Logout"
                gap="xsmall"
                onClick={handleOnLogout}
                style={{
                  float: "right",
                  margin: "0.4rem 0.8rem 0.4rem 0rem",
                  border: "1px solid rgb(9, 181, 143)",
                  padding: "0.5rem 1rem",
                  color: "rgb(255, 255, 255)",
                  textDecoration: "none",
                  fontDize: "1rem",
                  borderRadius: "3px 3px 0px 0px",
                  backgroundColor: "rgb(0, 149, 115)"
                }}>
              </Button>
          </Link>
          </Box>
        </Box>
          </Box>
        <Box margin="medium"
          style={{
          textAlign: "right",
          width: "100%",
          margin: "0 2rem 0 0"
          }}>{welcomemsg}
        </Box>
      </Box>
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
        Pocket <span class="logo-txt-secondary">Spotter</span>
      </Heading>
    </Box>
  );

  return (
    <Grommet theme={hpe}>
      <Box fill="horizontal">
        <AppBar>
          {logo}
          {login}
          {menu}
          {/* {profile} */}
          {/* <span style={Object.assign(menuButtonSecondaryCss, menuButtonCss)}>{logout}</span> */}
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
