import React from 'react'

export default (props) => {
  const { hours, minutes, seconds, isPm } = props;
  const { alarmHour, alarmMinute, alarmSecond, isAlarmOn } = props.alarms;
  if (isAlarmOn) {
    if (alarmHour === hours) {
      if (alarmMinute === minutes) {
        if (alarmSecond === seconds) {
          window.alert('alarm!')
        }
      }
    }
  }
  return (
    <div>
      {hours}:
      {minutes}:
      {seconds}
      {isPm ? <span> PM</span> : <span>AM</span>}

    </div>
  )

}