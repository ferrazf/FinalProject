import { Text, Box, FormField, Select } from 'grommet';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Add(props) {

    const [value, setValue] = useState('');
    const options = props.muscle;

    return (
        <Box>
            <form onSubmit={props.handleFormSubmit}></form>
                <FormField label="Muscle:">
                    <Select
                    name="muscle"
                    options={options}
                    value={value}
                    onChange={({ option }) => setValue(option)}
                    />
                </FormField>
            <Text>Exercise</Text>
            <Text>Description</Text>
        </Box>
    );
}

export default Add
  