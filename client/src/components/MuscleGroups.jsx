import React from 'react';
import { Select } from 'grommet';


export default( { muscleGroups } ) => {
  console.log("muscleGroups --------------");
  console.log(muscleGroups);
  const options = muscleGroups && muscleGroups.map(muscle => ({
    value: muscle.id,
    label: <span>muscle.name</span>
  }))
  console.log("options--------------------------_");
  console.log(options);
  return (
    <Select
      options={options}
      onChange={ event => {
        console.log("event.option-----------------------------");
        console.log(event.option)
      }}
    />
  )
}

// onChange={ event => { this.setState({ currentValue: event.option })}}