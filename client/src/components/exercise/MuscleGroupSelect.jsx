import { Text, Box, FormField, Select } from 'grommet';
import React, { useState } from 'react';

//displays a form in the add container that allows a user to selet a muscle group
function MUscleGroupSelect(props) {

    const [value, setValue] = useState('');
    const options = props.muscle;
    return (
        <Box>
            <form onSubmit={props.handleFormSubmit}>
                <FormField label="Muscle:">
                    <Select
                    name="muscle"
                    options={options}
                    value={value}
                    onChange={({ option }) => setValue(option)}
                    />
                </FormField>
            </form>
        </Box>
    );
}

export default MUscleGroupSelect
  