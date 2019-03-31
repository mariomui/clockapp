import React, { Component } from 'react'
const datePickerCss = require('./layout.module.css')

export class DatePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alarmDayNum: '',
      alarmDayWeek: '',
      alarmMonth: '',
      alarmYear: ''
    }
  }

  handleDatePicker = (e) => {
    e.preventDefault()
    console.log(e.target.Nodes)
  }
  handleDatePicking = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  render() {

    return (
      <form onSubmit={this.handleDatePicker} className={datePickerCss.flexColOne}>
        <label htmlFor="one" >
          <input onChange={handleDatePicking} type="date" />
        </label>
        <label htmlFor="submit">
          <input type="submit" value="Set Alarm for Date" />
        </label>
      </form>
    )
  }
}