# Clock AppPlanning Stages
Part 1: 
[x] round analog clock with dynamically moving hour/minute/second hands that point to actual clock numbers (basically a real-looking analog clock) which tells real time and AM/PM indicator. 

[x] Part 2: Add controls near the clock to allow a user to set an alarm that triggers some alert based on when the user enters the hour/minute/second of when the alarm should go off, and a way to turn the alarm on and off. 
[x] Bonus points: Add a date indicator on the clock somewhere and incorporate setting date into the alarm also.

Please submit what you are able to finish by Monday morning.
...it's ok if you don't finish, just send in what you do get to in that case.

## How to use
npm run build-dev

## ClockController Class
### State: 
hourDeg: 0
minuteDeg: 0
secondDeg: 0
isPMTrue: boolean

### Functions
convertTime to Degree (type: ie 'hour'|'minute'|'second', integer: 90, 180) 

rotate // should take in the component and how many degrees to rotate.
convertDeg to Time

getInitialTime() returns {hours, days, seconds, whether it's night time.}
setTime() takes in an array and sets it.
----

## App
App should this info: size of the clock, size of the hands, position of clock, position of hands.
App will recieve
### State
initialClockSize: 50px
hourDeg, minuteDeg, secondDeg = 0
isPM = 0;
### functions
reportToAppAndRender (any information that needs to be reported back to App will be used in this function)
ie, sending the Clock has to send the current state back to App.

##ClockView
ClockView should be in charge of rendering the Clock stuff.
Evey second the secondHand has to rotate. 
360 degrees = 60 seconds. 6 degrees per second   // add 6 degrees per second 360 (consider modulo)
360 degrees = 60 minutes. 6 degrees per minute, or .10 degrees per second 
360 degrees = 12 hours. 30 degrees per hour...3600sec or 1 / 120 degrees per sec

start: mount, set initialTime 
  getInitialTime, that only calls once, render (via App)

## ClockFace
Component with a circle
tranform rotate each part with a number and adjust for offset.

---


The ClockFace is does not require any doohickeys. It should just have plain logic.
### Numbers:
App should control the size of the Clock:
360 degrees per clock.
360 / 12 = 30 degrees separating each hour mark
30 degrees / 5 =  6 degrees per small mark on the Face 


// 0 degrees start off at 3.00
// offset of -90 or just rotate it to begin with and have easier math.