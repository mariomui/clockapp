import React from 'react'

const layoutCss = require('./layout.module.css')

const Banner = () => {
  return <div className={layoutCss.banner}>
    Clock
  </div>
}
export default ({ children }) => {
  return (
    <div className={layoutCss.container}>
      <Banner />
      <div style={{ height: '100px' }} />
      <div className={layoutCss.rows}>
        {children}
      </div>
    </div>
  )
}