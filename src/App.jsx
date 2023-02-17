import React from "react";

export const App = () => {
  const [state, setState] = React.useState(0)
  return <div>
    <h1>TEST - {state}</h1>
    <button onClick={() => setState(prev => prev + 1)}>CLICK ME</button>
  </div>
}