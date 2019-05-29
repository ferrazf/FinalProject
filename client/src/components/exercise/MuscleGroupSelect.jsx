import { Box, FormField, Select } from 'grommet';
import React, { useState } from 'react';

//displays a form in the addDisplay container that allows a user to selet a muscle group
function MUscleGroupSelect(props) {

    const [muscleGroup, setMuscleGroup] = useState('');
    const options = props.muscle;
    console.log(props)
    const handleClick = ({option}) => {
        setMuscleGroup(option)
        console.log(muscleGroup)
        props.updateMG(option)
    }

    return (
        <Box>
            <form >
                <FormField label="Muscle:">
                    <Select
                    name="muscle"
                    options={options}
                    value={muscleGroup}
                    onChange={handleClick}
                    />
                </FormField>
            </form>
        </Box>
    );
}

export default MUscleGroupSelect
  