import React from "react";
import {
    Box,
    Button,
    Form,
    FormField,
    Grommet
} from "grommet";
import { hpe } from "grommet-theme-hpe";

function Login(props) {
    //props.register(user)
    return (
        <Grommet theme={hpe}>
            <Box align="center" background="status-ok">
                <p>Login</p>
            </Box>
            <Box pad="medium">
                <Form>
                    <FormField name="email" label="Email Address" placeholder="Your Email Address" />
                    <FormField name="password" type="password" label="Password" placeholder="Your Password" />
                    <Box align="center">
                        {" "}
                        <Box pad="medium" direction="row" gap="small">
                            <Button alignSelf="end" primary label="Login" />
                            <Button alignSelf="start" primary label="Register" />
                        </Box>
                    </Box>
                </Form>
            </Box>
        </Grommet>
    );
}

export default Login;
