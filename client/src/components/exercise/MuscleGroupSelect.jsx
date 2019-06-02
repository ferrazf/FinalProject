import { Box, FormField, Heading, Select, Form } from 'grommet';
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
        <Box
        direction="column"
        alignContent="center"
        pad="medium"
      >
            <Form >
                <Heading level="4"
          margin={{
            top: "0",
            bottom: "0"
          }}>Muscle:</Heading>
                <FormField>
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
