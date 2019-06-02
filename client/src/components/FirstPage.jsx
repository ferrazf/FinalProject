import { Box, Button, Grommet, Heading, Text } from "grommet";
import React from "react";
import { Link } from "react-router-dom";
import { hpe } from "grommet-theme-hpe";
import { Edit, PlayFill } from "grommet-icons";

function FirstPage(props) {
  return (
    <Grommet theme={hpe}>
      <Box>
        <Box align="center" pad="large">
          <Box direction="row" gap="small" margin="medium">
            <Link to="/register">
              <Button
                primary
                alignSelf="start"
                  label="Register" />
              </Link>
              <Link to="/login">
                <Button
                primary
                alignSelf="start"
                label="Login" />
              </Link>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default FirstPage;