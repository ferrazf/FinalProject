import React from 'react';
import { Text, Box, Button, Icons } from 'grommet';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profile from "../containers/profile.jsx";
function Workout(prop) {
    return( 
        <Router>
            <Box  pad="medium" border= {{
                "color": "border",
                "side": "all"
            }}>
                <Text > {prop.workout} </Text>
                <Button
                    alignSelf= "end"
                    label="start"
                    onClick={() => {}}
                />
                <Link to="/profile" justify='start'>
                    <Button
                        alignSelf= "end"
                        label="Edit"
                    />
                </Link>
            </Box>
            <Route exact path="/profile" component={Profile} />
        </Router>
    )
}
export default Workout;