import React, { Component } from 'react'
import Layout from './components/Layout'
import { ClockView } from './components/ClockView'
const { ClockControl } = require('./controller/')
import TimeView from './TimeView'
import { AlarmView } from './components/AlarmView'

require('./global.css')

const Clock = new ClockControl();
var timeObject = Clock.initializeControlTime()
Clock.setTime(timeObject)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hours: Clock.hours,
      minutes: Clock.minutes,
      seconds: Clock.seconds,
      hoursDeg: 0,
      minutesDeg: 0,
      secondsDeg: 0,
      isPm: Clock.getPm(),
      alarmAmPm: null,
      alarmHour: null,
      alarmMinute: null,
      alarmSecond: null,
      isAlarmOn: false
    }
  }

  handlePostRenderInfo = (timeObject) => {
    let newTimeObject = Clock.makeRenderInfoHumanReadable(timeObject)
    Object.assign(timeObject, newTimeObject)
    this.setState(timeObject)
  }

  handleAlarmInfo = (timeObject) => {
    this.setState(timeObject)
  }


  render() {
    const { hours, minutes, seconds, isPm, alarmHour, alarmMinute, alarmSecond, isAlarmOn } = this.state
    return (
      <Layout>
        <div />
        <ClockView
          hoursDeg={Clock.convertHoursToDegrees(hours)}
          secondsDeg={Clock.convertSecondsToDegrees(seconds)}
          minutesDeg={Clock.convertMinutesToDegrees(minutes)}
          handlePostRenderInfo={this.handlePostRenderInfo}
          Clock={Clock}
        />
        <div />

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
        <AlarmView
          Clock={Clock}
          handleAlarmInfo={this.handleAlarmInfo}
        />
      </Layout>
    );
  }
}

export default App