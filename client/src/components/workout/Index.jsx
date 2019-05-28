import React from 'react';
import { Text, Box, Button, Icons } from 'grommet';
import { Link } from "react-router-dom";

function Workout(props) {
    return(
        <Box  pad="medium" border= {{
            "color": "border",
            "side": "all"
        }}>
            <Text > {props.workout.name.join(', ')} </Text>
            <Link to="/workout" >
                <Button
                    alignSelf= "end"
                    label="start"
                    onClick={() => {}}
                />
            </Link>
            
        </Box>
    )
}
export default Workout;