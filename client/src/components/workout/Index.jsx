import React from 'react';
import { Text, Box, Button, Icons } from 'grommet';
import { Link } from "react-router-dom";

function Workout(prop) {
    return(
        <Box  pad="medium" border= {{
            "color": "border",
            "side": "all"
        }}>
            <Text > {prop.workout.name} </Text>
            <Link to="/edit" >
                <Button
                    alignSelf= "end"
                    label="edit"
                    onClick={() => {}}
                />
            </Link>
            <Link to="/workout" >
                <Button
                    alignSelf= "end"
                    label="start"
                />
            </Link>
            <Link to="/workout" >
                <Button
                    alignSelf= "end"
                    label="finish"
                />
            </Link>
        </Box>
    )
}
export default Workout;