import React from "react";
import { Box, Button, Form, FormField, Grommet, Heading, Paragraph} from 'grommet';

function Register(props) {
    //props.register(user)
    return (
        <Grommet >
            <Box align="center" background="status-ok">
                <p>Register</p>
            </Box>
            <Box pad="medium" border={{
                "color": "border",
                "side": "all"
            }}>
                <Form>
                    <FormField name="name" label="Name" />
                    <FormField name="email" label="Email Address" />
                    <Button type="submit" primary label="Register" />
                </Form>
            </Box>
        </Grommet>
    )
}

export default Register;