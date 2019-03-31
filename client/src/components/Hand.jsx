import React from 'react'
import handCssExtra from './hand.module.css'

const Hand = (props) => {
  const { handType, degree } = props

  let width = '50px'
  let color = 'blue'
  let arrowTip = '25%'

  if (handType === "hours") {
    width = "102px";
    arrowTip = "76%"
  }
  if (handType === "minutes") {
    width = `141px`;
    color = "purple";
    arrowTip = "85%"
  }
  if (handType === "seconds") {
    width = "193px";
    color = "green";
    arrowTip = "97.5%"
  }
  let handCss = {
    position: "absolute",
    display: "inlineBlock",
    borderTop: `3px solid ${color}`,
    width: "100px",
    backgroundColor: "white",
    top: "50%",
    left: "50%",
  };
  Object.assign(handCss, { width: width });

  return (
    <div style={
      {
        marginTop: `50%`,
        transformOrigin: `center 1px`,
        transform: `rotate(${degree}deg)`,
        position: `relative`
      }}
    >

      <div style={handCss}></div>
      <div style={{ color, left: `${arrowTip}` }} className={handCssExtra.arrow}></div>
    </div>
  )
}

export default Hand