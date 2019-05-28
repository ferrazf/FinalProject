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
                    onClick={props.handleStart}
                />
            </Link>
            <Button
                alignSelf= "end"
                label="finish"
                onClick={props.handleFinish}
            />
        </Box>
    )
}
export default Workout;