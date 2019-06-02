import React, { useState } from "react";
import {
  Box,
  Button,
  Form,
  FormField,
  Grommet
} from "grommet";
import { hpe } from "grommet-theme-hpe";
import { FormCheckmark, FormPreviousLink } from "grommet-icons";

import { Link, Redirect } from "react-router-dom";
import axios from 'axios';

function Register(props) {
  // hooks
  const [ toHome, setToHome ] = useState(false);

  //events
  const handleOnRegister = async (evt) => {
    evt.preventDefault();

    if(evt.target.form.elements.password.value !== evt.target.form.elements.passwordverify.value){
      props.setError('Passwords do not match');
    }else{

      const user ={
        name: evt.target.form.elements.name.value,
        email: evt.target.form.elements.email.value,
        password: evt.target.form.elements.password.value
      }

      evt.target.form.elements.name.value = '';
      evt.target.form.elements.email.value = '';
      evt.target.form.elements.password.value = '';
      evt.target.form.elements.passwordverify.value = '';

      try{
        console.log("before")
        const { data } = await axios.post(`${props.url}/register`, user);
        console.log("after")
        // please do NOT switch setToHome and props.setUser
        setToHome(true)

        props.setUser(data);
        props.setOnLogin(data);

      }catch (e){
        console.log("catch")
        props.setError(e);
      }
    }
  }

  const redirectHome = toHome ? <Redirect to='/'/> : console.log("test");

  return (
    <Grommet theme={hpe}>
      {redirectHome}
      <Box align="center" background="status-ok">
        <p>Register</p>
      </Box>
      <Box pad="medium">
        <Form>
          <FormField name="name" label="Name" placeholder="Your Name" />
          <FormField name="email" label="Email Address" placeholder="Your Email Address" />
          <FormField name="password" type="password" label="Password" placeholder="Your Desired Password" />
          <FormField name="passwordverify" type="password" label="Verify Password" placeholder="Verify Your Desired Password" />
          <Box align="center" pad="medium">
            <Box direction="row" gap="small">
              <Link to="/">
              <Button
                  primary
                  alignSelf="start"
                  label="Home Page"
                  // icon={<FormPreviousLink />}
                />
                </Link>
                <Button
                  primary
                  alignSelf="start"
                  onClick={handleOnRegister}
                  label="Submit"
                  // icon={<FormCheckmark />}
                  />
              </Box>
            </Box>
          </Form>
        </Box>
      </Grommet>
  );
}

export default Register;
