import React from 'react'

const AlertLeft = () => {
  return (
    <div className='left-alert-box'>
      {/* <i></i> */}
      <div className='left-alert-icon'></div>
      <div className='left-alert-title'>
        <span className='left-alert-title-top'>
          Stripe account connected successfully!
          <span className='left-alert-title-bottom'>A SECOND AGO</span>
        </span>
      </div>
    </div>
  )
}

export default AlertLeft;