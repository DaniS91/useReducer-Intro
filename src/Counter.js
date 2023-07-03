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
const [counter, setCounter] = useState(0);
const [hidden, setHidden] = useState(false);

useEffect(() => {
  document.title = counter;
}, [counter]);

  return(
  <>
   {hidden ? <h1>Count Hidden</h1> : <h1>{counter}</h1>}
      <button onClick={() => setCounter(counter + 1)}>Count!</button>
      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
  </>
  );
}

export default Counter;

// a button to show and hide the counter, as well as a button to increment the count by 1 on each click
// also useEffect() hook that updates the document's title attribute with the value of the counter, every time the counter changes in value