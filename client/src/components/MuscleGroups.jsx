import React from 'react';
import { Select, Menu } from 'grommet';


export default( { muscleGroups, selectedMuscle } ) => {
  console.log("muscleGroups --------------");
  console.log(muscleGroups);
  const options = muscleGroups && muscleGroups.map(muscle => ({
    label: <span key={muscle.id}>{muscle.name}</span>,
    onClick: event => {
        console.log("event.option-----------------------------");
        console.log(event._targetInst.child.key);
        // event._targetInst.child.memoizedProps.children
        debugger;
      }
  }))
  console.log("options--------------------------_");
  console.log(options);
  return (
    <div>
      <Menu
        label="Muscle Groups"
        items={options}
      />
      <label className="menu-label"></label>
    </div>
  )
}
    /*
    <Select
      options={options}
      onChange={ event => {
        console.log("event.option-----------------------------");
        console.log(event.option)
      }}
    />
*/
// onChange={ event => { this.setState({ currentValue: event.option })}}