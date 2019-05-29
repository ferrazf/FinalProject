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
                        <Button type="submit" primary label="Login" />
                    </Box>
                </Form>
            </Box>
        </Grommet>
    );
}

export default Login;
