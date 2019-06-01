import { Box, FormField, Select, Form } from 'grommet';
import React, { useState } from 'react';

//displays a form in the addDisplay container that allows a user to selet a muscle group
function MUscleGroupSelect(props) {

    const [muscleGroup, setMuscleGroup] = useState(props.currentMG);
    const options = props.muscle;
    const handleClick = ({option}) => {
        props.updateMG(option)
        setMuscleGroup(option)
    }

    return (
        
        <Box>
            <Form >
                <FormField label="Muscle:">
                    <Select
                    name="muscle"
                    options={options}               
                    value={muscleGroup}
                    onChange={handleClick}
                    />
                </FormField>
            </Form>
        </Box>
    );
}

export default MUscleGroupSelect
  