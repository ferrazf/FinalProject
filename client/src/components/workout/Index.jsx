import React from 'react';
import { Text, Box, Button, Icons } from 'grommet';
import { Link } from "react-router-dom";

function Workout(props) {
    const start = (!props.workout.started_at) && (
            <Button name={props.workout.workout_id}
                alignSelf= "end"
                label="start"
                onClick={props.handleStart}
            />
        )
    const finish = (props.workout.started_at && !props.workout.finished_at) && (
            <Button name={props.workout.workout_id}
                alignSelf= "end"
                label="finish"
                onClick={props.handleFinish}
            />
        )

    return(
        <Box  pad="medium" border= {{
            "color": "border",
            "side": "all"
        }}>
            <Text > {props.workout.name.join(', ')} </Text>
            <Link to="/workout" >
                <Button
                    alignSelf= "end"
                    label="view"
                    onClick={() => {}}
                />
            </Link>
            {start}
            {finish}
        </Box>
    )
}
export default Workout;