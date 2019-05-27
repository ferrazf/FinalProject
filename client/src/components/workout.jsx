import React from 'react';
import { Text, Box, Button, Icons } from 'grommet';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Workout(prop) {
    return( 
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
           <Button
           alignSelf= "end"
                label="Edit"
                onClick={() => {}}
            />
        </Box>
    )
}
export default Workout;