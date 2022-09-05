import React from 'react';

const Alert = ({ alertShow }) => {
  return (
    <div className='alert'>
      <div className='alert-left'>
        <div className='alert-icon'>
          {/* // This field is Napal icon */}
        </div>
        <div className='alert-text'>
          <h3 className='alert-first-text'>Upgrade to pay 0% transaction fee</h3>
          <span className='alert-second-text'>Pay 0% transaction fee and get added benefits by upgrading your account.</span>
        </div>
      </div>
      <button className='alert-button'>
        <span className='alert-button-text'>Upgrade</span>
      </button>
    </div>
  )
}

export default Alert;