import React, { Component } from 'react'
import Layout from './components/Layout'
import { ClockView } from './components/ClockView'
const { ClockControl } = require('./controller/')
import TimeView from './components/TimeView'
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
      isAlarmOn: false,
      month: ''
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

  updatePm = () => {
    Clock.setPm()
    this.setState({
      isPm: Clock.getPm()
    })
  }

  render() {
    const { hours, minutes, seconds, isPm,
      alarmHour, alarmMinute, alarmSecond, isAlarmOn } = this.state

    const timeViewPropPackage = {
      hours, minutes, seconds, isPm,
      alarmHour, alarmMinute, alarmSecond, isAlarmOn
    }

    const { month, dayNum, year, dayWeek } = this.state
    const presentDate = { month, dayNum: Number(dayNum), year: Number(year), dayWeek }
    return (
      <Layout>
        <div />
        <ClockView
          hoursDeg={Clock.convertHoursToDegrees(hours)}
          secondsDeg={Clock.convertSecondsToDegrees(seconds)}
          minutesDeg={Clock.convertMinutesToDegrees(minutes)}
          handlePostRenderInfo={this.handlePostRenderInfo}
          Clock={Clock}
          handleAlarmInfo={this.handleAlarmInfo}
          updatePm={this.updatePm}
          timeViewPropPackage={timeViewPropPackage}
        />
        <div />

        {/* <TimeView
          hours={hours}
          minutes={minutes}
          seconds={
            (Math.floor(seconds) < 10)
              ? `0${Math.floor(seconds)}`
              : Math.floor(seconds)
          }
          isPm={isPm}
          alarms={{ alarmHour, alarmMinute, alarmSecond, isAlarmOn }}
        /> */}
        <div>

        </div>
        <AlarmView
          Clock={Clock}
          handleAlarmInfo={this.handleAlarmInfo}
          presentDate={presentDate}
        />

      </Layout>
    );
  }
}

export default App