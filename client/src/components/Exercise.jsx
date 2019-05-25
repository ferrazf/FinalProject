import React from 'react';

export default( { handleFormSubmit } ) => (
  <form onSubmit={handleFormSubmit}>
    <label>
      Muscle:
      <input type="text" name="muscle" />
    </label>
    <label>
      Name:
      <input type="text" name="name" />
    </label>
    <label>
      Desc:
      <input type="text" name="descr" />
    </label>
    <button>Submit</button>
  </form>
)