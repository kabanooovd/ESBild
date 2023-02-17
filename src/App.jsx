import React from "react";
import "./additional.css"

export const App = () => {
  const [state, setState] = React.useState(0)
  const btnClick = () => {
    setState(prev => prev + 2)
    // throw new Error()
  }
  return <div>
    <h1>TEST - {state}</h1>
    <button onClick={btnClick}>CLICK ME</button>
  </div>
}