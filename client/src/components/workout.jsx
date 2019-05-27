import React from 'react';
import { Text, Box, Button, Icons } from 'grommet';
import { Link } from "react-router-dom";
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
            <Link to="/workout" >
                <Button
                    alignSelf= "end"
                    label="Edit"
                />
            </Link>
        </Box>
    )
}
export default Workout;