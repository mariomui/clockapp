import React from 'react'
const clockFaceCss = require('./clockface.module.css')
import Hand from './Hand'
import Nums from './Nums'
import { DateView } from './DateView'
import TimeView from './TimeView'

function makeClockNums(a, b) {
  var arr = []
  for (var i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr
}

export default (props) => {
  const { hoursDeg, minutesDeg, secondsDeg, handleAlarmInfo, Clock } = props
  const clockNums = makeClockNums(1, 12);
  const { hours, minutes, seconds, isPm,
    alarmHour, alarmMinute, alarmSecond, isAlarmOn } = props.timeViewPropPackage

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
      <DateView Clock={Clock} handleAlarmInfo={handleAlarmInfo} />
      <div style={{
        transform: `rotate(90deg)`,
        top: '50%',
        position: 'absolute'
      }}>
        <TimeView
          hours={hours}
          minutes={minutes}
          seconds={
            (Math.floor(seconds) < 10)
              ? `0${Math.floor(seconds)}`
              : Math.floor(seconds)
          }
          isPm={isPm}
          alarms={{ alarmHour, alarmMinute, alarmSecond, isAlarmOn }}
        />
      </div>
    </div >
  )
}