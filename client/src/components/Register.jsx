import React from "react";
import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  Heading,
  Paragraph
} from "grommet";
import { hpe } from "grommet-theme-hpe";

function Register(props) {
  //props.register(user)
  return (
    <Grommet theme={hpe}>
      <Box align="center" background="status-ok">
        <p>Register</p>
      </Box>
      <Box pad="medium">
        <Form>
          <FormField name="name" label="Name" />
          <FormField name="email" label="Email Address" />
          <Box align="center">
            {" "}
            <Button type="submit" primary label="Register" />
          </Box>
        </Form>
      </Box>
    </Grommet>
  );
}

export default Register;
