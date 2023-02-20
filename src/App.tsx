import React from "react";
import "./additional.css";
import photo from "./assets/images/photo.jpg"

export const App = () => {
  const [state, setState] = React.useState<number>(0)
  const btnClick = () => {
    setState(prev => prev + 11)
    // throw new Error()
  }
  return <div>
    <h1>TEST - {state}</h1>
    <button onClick={btnClick}>CLICK ME</button>
    <img width={"200px"} src={photo} alt=""/>
  </div>
}