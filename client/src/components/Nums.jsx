import React from 'react'

export default (props) => {
  const { clockNum } = props
  let numCss = {
    transformOrigin: `left 1px`,
    transform: `rotate(${clockNum * 30}deg)`,
    position: `absolute`,
    width: '50%',
    left: '50%',
    margin: '0 auto',
    paddingLeft: '30%'
  }
  return (
    <div style={numCss}>
      <div style={{
        transform: `rotate(${90 - (clockNum * 30)}deg)`
      }}>
        {clockNum}
      </div>
    </div >
  )
}