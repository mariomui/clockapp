import React from 'react'
const clockFaceCss = require('./clockface.module.css')
import Hand from './Hand'
import Nums from './Nums'

function makeClockNums(a, b) {
  var arr = []
  for (var i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr
}

export default (props) => {
  const { hoursDeg, minutesDeg, secondsDeg } = props
  const clockNums = makeClockNums(1, 12);
  return (
    <div
      className={clockFaceCss.face}
    >
      <Hand handType="seconds" degree={secondsDeg} />
      <Hand handType="hours" degree={hoursDeg} />
      <Hand handType="minutes" degree={minutesDeg} />
      {clockNums.map((clockNum, index) => {
        return (
          <Nums clockNum={clockNum} key={`${clockNum}, ${index} `} />
        )
      })}
    </div >
  )
}