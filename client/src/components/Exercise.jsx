import React, { Component } from 'react';
import { FormField, TextInput, Button, Select } from 'grommet';
// import MuscleGroups from './MuscleGroups';

export default class extends Component {

  constructor(props){
    super();
    this.state = {
      value: [],
      options: props.muscleGroups
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearch(searchText) {
    const regexp = new RegExp(searchText, 'i');
    console.log("on search --------------------")
    console.log(this.state.options.filter(o => o.match(regexp)));
    debugger;

    this.setState({ options: this.state.options.filter(o => o.match(regexp)) });
  }

  handleChange(event){
    this.setState({
      value: event.value,
      selected: event.selected,
      options: this.state.options
    })
  }

  render(){

    const { options, selected, value } = this.state;

    return(
      <form onSubmit={this.props.handleFormSubmit}>
        <FormField label="Muscle:">
          <Select
            name="muscle"
            selected={selected}
            value={value}
            onSearch={this.handleSearch}
            onChange={this.handleChange}
            options={options}
          />
        </FormField>
        <FormField label="Name:">
          <TextInput type="text" name="name" placeholder="name" />
        </FormField>
        <FormField label="Description:">
          <TextInput type="text" name="descr" placeholder="description" />
        </FormField>
        <Button type="submit" primary label="Submit"/>
      </form>
    )
  }
}

// export default( { muscleGroups, handleFormSubmit } ) => {
//   console.log("muscleGroups --------------");
//   console.log(muscleGroups);
//   const options = muscleGroups && muscleGroups.map(muscle => muscle.name);
//   console.log("options--------------------------_");
//   console.log(options);

//   return(
//     <form onSubmit={handleFormSubmit}>
//       <FormField label="Muscle:">
//         <Select
//           onSearch={(searchText) => {
//             const regexp = new RegExp(searchText, 'i');
//             console.log("on search --------------------")
//             console.log(options.filter(o => o.match(regexp)));
//             debugger;

//             // this.setState({ options: options.filter(o => o.match(regexp)) });
//           }}
//           onChange={
//             event => {
//               console.log("event change-----------------------------");
//               console.log(event.value);
//               console.log(event.selected);
//               // console.log(event._targetInst.child.key);
//               // event._targetInst.child.memoizedProps.children
//               debugger;
//             }
//           }
//           options={options}
//         />
//       </FormField>
//       <FormField label="Name:">
//         <TextInput type="text" name="name" placeholder="name" />
//       </FormField>
//       <FormField label="Description:">
//         <TextInput type="text" name="descr" placeholder="description" />
//       </FormField>
//       <Button type="submit" primary label="Submit"/>
//     </form>
//   )
// }

// export default( { muscleGroups, handleFormSubmit } ) => {
//   console.log("muscleGroups --------------");
//   console.log(muscleGroups);
//   const options = muscleGroups && muscleGroups.map(muscle => ({
//     label: <span key={muscle.id}>{muscle.name}</span>,
//     onClick: event => {
//         console.log("event.option-----------------------------");
//         console.log(event._targetInst.child.key);
//         // event._targetInst.child.memoizedProps.children
//         debugger;
//       }
//   }))
//   console.log("options--------------------------_");
//   console.log(options);

//   return(
//     <form onSubmit={handleFormSubmit}>
//       <FormField label="Muscle:">
//         <Menu
//           label="Muscle Groups"
//           items={options}
//         />
//       </FormField>
//       <FormField label="Name:">
//         <TextInput type="text" name="name" placeholder="name" />
//       </FormField>
//       <FormField label="Description:">
//         <TextInput type="text" name="descr" placeholder="description" />
//       </FormField>
//       <Button type="submit" primary label="Submit"/>
//     </form>
//   )
// }


//  export default( { muscleGroups, handleFormSubmit } ) => (

//   <form onSubmit={handleFormSubmit}>
//     <FormField label="Muscle:">
//       <MuscleGroups />
//       <TextInput type="text" name="muscle" placeholder="muscle" />
//     </FormField>
//     <FormField label="Name:">
//       <TextInput type="text" name="name" placeholder="name" />
//     </FormField>
//     <FormField label="Description:">
//       <TextInput type="text" name="descr" placeholder="description" />
//     </FormField>
//     <Button type="submit" primary label="Submit"/>
//   </form>
// )