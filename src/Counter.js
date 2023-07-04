import React, { useState, useEffect, useReducer } from 'react';

//this is our useReducer hook

//usereducer requires an object to define initial state
const initialState = {
  counter: 0
}
//now we need the reducer funciton

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1
      };
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
}


function Counter() {
// Here we've replaced the useState hook originally used for counter state.
const [state, dispatch] = useReducer(reducer, initialState);
const [hidden, setHidden] = useState(false);

useEffect(() => {
  // Now we need to access state.counter to get the counter value.
  document.title = state.counter;
}, [state.counter]);

  return(
  <>
  {/* Same here: we need to access state.counter to get the counter value. */}
   {hidden ? <h1>Count Hidden</h1> : <h1>{state.counter}</h1>}
      {/* Now we use dispatch() to send an action to our reducer to update state. */}
      <button onClick={() => dispatch({type: 'increment'})}>Count!</button>
      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
  </>
  );
}

export default Counter;

// a button to show and hide the counter, as well as a button to increment the count by 1 on each click
// also useEffect() hook that updates the document's title attribute with the value of the counter, every time the counter changes in value