import React, { Component } from 'react'
const datePickerCss = require('./layout.module.css')

export class DatePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alarmDayNum: '',
      alarmDayWeek: '',
      alarmMonth: '',
      alarmYear: '',
      isDateAlarmSet: false
    }
  }


  handleDatePicking = (e) => {
    e.preventDefault()
    const { isDateAlarmSet } = this.state
    const weekDays = 'Sun,Mon,Tue,Wed,Thu,Fri,Sat'
    const months = 'Tan,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'
    const weekDaysAdv = weekDays.split(',')
    const monthsAdv = months.split(',')
    if (!isDateAlarmSet) {

      let nums = e.target.elements[0].value
      let numsy = nums.split('-').map(item => Number(item))
      this.setState({
        alarmMonth: monthsAdv[numsy[1]],
        alarmDayNum: numsy[2],
        alarmYear: numsy[0],
        isDateAlarmSet: true
      })
    }
    this.toggleDateAlarm()
  }
  toggleDateAlarm = (c) => {
    this.setState({
      isDateAlarmSet: c || !this.state.isDateAlarmSet
    })
  }
  render() {
    const { alarmMonth, alarmDayNum, alarmYear, isDateAlarmSet } = this.state
    const { dayWeek, month, dayNum, year, } = this.props.presentDate

    if (isDateAlarmSet) {
      if ((month === alarmMonth)) {
        if ((dayNum === alarmDayNum) && (alarmYear === year)) {
          window.alert('Todays the big day!')
          this.toggleDateAlarm(false)
        }
      }
    }

    return (
      <form onSubmit={this.handleDatePicking} className={datePickerCss.flexColOne}>
        <label htmlFor="one" >
          <input name='date' type="date" />
        </label>
        <label htmlFor="subm">
          {!isDateAlarmSet
            ? <input type="submit" value="Set Alarm for Date" />
            : <input type="submit" value="Remove Alarm for Date" />
          }
        </label>
        <label htmlFor="two">
          {isDateAlarmSet ? <div> {alarmMonth} {alarmDayNum} {alarmYear}</div> : null}
        </label>
      </form>
    )
  }
}