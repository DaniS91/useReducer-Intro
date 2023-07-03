import React, { useState, useEffect } from "react";

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