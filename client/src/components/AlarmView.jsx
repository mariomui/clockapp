import React, { Component } from 'react'
import AlarmViewCss from './layout.module.css'
import { DatePicker } from './DatePicker'

export class AlarmView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alarmHour: 0,
      alarmMinute: 0,
      alarmSecond: 0,
      alarmAmPm: 'AM',
      isAlarmOn: false
    }
  }
  handleAlarmChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: Number(e.target.value)
    })
  }

  setAlarmAmPm = (e) => {
    e.preventDefault()
    this.setState({
      alarmAmPm: e.target.value
    })
  }

  handleAlarmSubmit = (e) => {
    e.preventDefault()
    const { handleAlarmInfo } = this.props
    this.setState({
      isAlarmOn: !this.state.isAlarmOn
    }, () => {
      handleAlarmInfo(this.state)
    })
  }
  render() {
    let {presentDate} = this.props
    let { alarmHour, alarmMinute, alarmSecond, isAlarmOn } = this.state
    return (
      <div className={AlarmViewCss.container}>
        <div className={AlarmViewCss.verticalRow}>

          <form onSubmit={this.handleAlarmSubmit} className={AlarmViewCss.flexColOne}>
            <label htmlFor="hour" >Set Alarm->Hours
              <input
                onChange={this.handleAlarmChange}
                name="alarmHour"
                value={alarmHour}
                type="range"
                min="1"
                max="12"
                step="1"
              />
              {alarmHour}
            </label>

            <label htmlFor="minute">Set Alarm->Minutes
              <input
                onChange={this.handleAlarmChange}
                name="alarmMinute"
                type="range"
                value={alarmMinute}
                min="0"
                max="60"
                step="1"
              />
              {alarmMinute}
            </label>
            <label htmlFor="second" >Set Alarm->Seconds
              <input
                onChange={this.handleAlarmChange}
                name="alarmSecond"
                value={alarmSecond}
                type="range"
                min="0"
                max="60"
                step="1"
              />
              {alarmSecond}
            </label>

            <div className={AlarmViewCss.verticalRow}>

              <label htmlFor="AM" >
                <input required onClick={this.setAlarmAmPm} className={AlarmViewCss.button} type="button" value="AM" />
              </label>
              <label htmlFor="PM" >
                <input required className={AlarmViewCss.button} onClick={this.setAlarmAmPm} type="button" value="PM" />
              </label>
            </div>
            <label htmlFor="three" >
              {!isAlarmOn ?
                <input type="submit" value="Turn Alarm On" /> :
                <input type="submit" value="Turn Alarm Off" />
              }
            </label>
          </form >

          <div className={AlarmViewCss.flexColTwo}>
            <DatePicker presentDate={presentDate} />
          </div>
        </div>
      </div >
    )
  }


}