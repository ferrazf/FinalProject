import { Box, Button, Grommet, Heading, Text } from "grommet";
import React from "react";
import { Link } from "react-router-dom";
import { hpe } from "grommet-theme-hpe";
import { Edit, PlayFill } from "grommet-icons";

function FirstPage(props) {
  return (
    <Grommet theme={hpe}>
      <Box>
        <Box align="center" pad="medium">
          <Box direction="row" gap="small">
            <Button
              primary
              alignSelf="start"
              href="/register"
              label="Register" />
            <Button
              primary
              alignSelf="start"
              href="/login"
              label="Login" />
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default FirstPage;