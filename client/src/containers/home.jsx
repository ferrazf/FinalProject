import React from 'react';
import { Box, InfiniteScroll } from 'grommet';

import Workout from "../components/workout.jsx";

function Home() {
    return (
      <Box>
        <InfiniteScroll items={
          [<Workout workout="chest"/>, 
          <Workout workout="rest"/>, 
          <Workout workout="back"/>, 
          <Workout workout="rest"/>, 
          <Workout workout="arms"/>, 
          <Workout workout="shoulders"/>, 
          <Workout workout="rest"/>]
        }>
          {(item) => (item)}
        </InfiniteScroll>
      </Box>
    );
  }
  
  export default Home;