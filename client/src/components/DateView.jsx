import React, { Component } from 'react'

export class DateView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      month: 0,
      dayNum: 0,
      year: 0,
      dayWeek: '',
      hasBeenInitialized: false
    }
  }
  componentDidMount() {
    const { Clock } = this.props

    if (!this.state.hasBeenInitialized) {
      var dateObject = Clock.initializeControlDate();
      Clock.setDate(dateObject);
      Object.assign(dateObject, { hasBeenInitialized: true })
      this.setState(dateObject)
    }
  }
  render() {
    let dateView = {
      marginLeft: `75%`,
      transformOrigin: `center 1px`,
      transform: `rotate(${90}deg)`,
      position: `relative`,
      display: `inlineBlock`
    }
    const { month, dayNum, year, dayWeek } = this.state
    return (
      <div style={dateView}>
        {month} {dayNum} {year} {dayWeek}
      </div>
    )
  }
}