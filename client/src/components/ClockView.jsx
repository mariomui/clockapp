import React, { Component } from 'react'
import ClockFace from './ClockFace'
const clockViewCss = require('./clockview.module.css')

function getCorrectInitialHour() {
  let currentMin = new Date().getMinutes();
  let fraction = currentMin / 60;
  let result = fraction * 30;
  return result;
}
function getCorrectInitialMinutes() {
  let currentSec = new Date().getSeconds()
  let fraction = currentSec / 60
  return fraction
}

export class ClockView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoursDeg: 0,
      secondsDeg: 0,
      minutesDeg: 0,
      hasInitialized: false
    }
  }
  componentDidMount() {
    const { hoursDeg, secondsDeg, minutesDeg } = this.props
    if (this.state.hasInitialized === false) {
      this.setState({
        hoursDeg: hoursDeg + getCorrectInitialHour(),
        secondsDeg,
        minutesDeg: minutesDeg + getCorrectInitialMinutes(),
        hasInitialized: true
      })
    }

    window.setInterval(() => {
      this.rotateHand()
    }, 1000)

  }

  rotateHand = () => {
    const { secondsDeg, minutesDeg, hoursDeg } = this.state
    this.setState({
      secondsDeg: ((secondsDeg + 6)) % 360,
      hoursDeg: (hoursDeg + (1 / 120)) % 360,
      minutesDeg: (minutesDeg + (.099)) % 360
    }, () => {
      const { handlePostRenderInfo } = this.props
      handlePostRenderInfo({
        secondsDeg,
        minutesDeg,
        hoursDeg,
      })
    })
  }

  render() {
    const { secondsDeg, hoursDeg, minutesDeg } = this.state

    return (
      <div className={clockViewCss.clockBlock}>
        <ClockFace
          secondsDeg={secondsDeg}
          hoursDeg={hoursDeg}
          minutesDeg={minutesDeg}
        />
      </div>
    )
  }
}

