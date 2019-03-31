class ClockControl {
  constructor() {
    this.hours = 0
    this.seconds = 0
    this.minutes = 0
    this.isPM = false
    this.date = new Date()
    this.dayNum = 0;
    this.year = 0;
    this.month = 0;
    this.dayWeek = '';
  }

  initializeControlTime = () => {
    var timeObject = {
      hours: 0,
      seconds: 0,
      minutes: 0,
      isPm: false
    }

    var date = this.date
    timeObject.hours = date.getHours() % 12
    timeObject.minutes = date.getMinutes()
    timeObject.seconds = date.getSeconds()
    timeObject.isPm = date.getHours() > 12 ? true : false
    return timeObject
  }

  setTime = (timeObject) => {
    this.hours = timeObject.hours
    this.minutes = timeObject.minutes
    this.seconds = timeObject.seconds
    this.isPm = timeObject.isPm
  }

  getTime = (hoursMinutesOrSeconds) => {
    return this[hoursMinutesOrSeconds]
  }

  getPm = () => {
    return this.isPM
  }

  makeRenderInfoHumanReadable = (timeObject) => {
    let { hoursDeg, minutesDeg, secondsDeg } = timeObject
    return {
      hours: Math.floor(this.convertDegreesToHours(hoursDeg)),
      minutes: Math.floor(this.convertDegreesToMinutes(minutesDeg)),
      seconds: this.convertDegreesToSeconds(secondsDeg) * 60
    }

  }

  convertHoursToDegrees = (hours) => {
    return ((hours * 30)) % 360
  }

  convertDegreesToHours = (degrees) => {
    return ((degrees / 30)) % 12;
  }

  convertDegreesToSeconds = (degrees) => {
    return (
      (degrees / 360)
    )
  }

  convertSecondsToDegrees = (seconds) => {
    return (
      ((seconds * 6)) % 360
    )
  }

  convertMinutesToDegrees = (minutes) => {
    return (
      ((minutes * 6)) % 360
    )
  }

  convertDegreesToMinutes = (degrees) => {
    return (
      ((degrees / 6)) % 60
    )
  }

  initializeControlDate = () => {
    var timeObject = {
      dayNum: 0,
      dayWeek: '',
      month: 0,
      year: 0
    }
    var date = this.date
    var dateDatas = date.toDateString().split(' ');
    timeObject.dayWeek = dateDatas[0]
    timeObject.month = dateDatas[1]
    timeObject.dayNum = dateDatas[2]
    timeObject.year = dateDatas[3]

    return timeObject
  }

  setDate = (timeObject) => {
    this.dayWeek = timeObject.dayWeek
    this.month = timeObject.month
    this.dayNum = timeObject.dayNum
    this.year = timeObject.year
  }
}

module.exports = {
  ClockControl
}