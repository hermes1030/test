import React from 'react';

const Result = () => {
  return (
    <div className='step1-container'>
      <div className='step1-graphic'>
        {/* <FontAwesomeIcon icon={faHome} /> */}
      </div>
      <div className='step1-board-title-1'>Connect Stripe Account</div>
      <div className='step1-board-title-2'>
        <span>Client Billing requires a free Stripe account. Connect your existing account or create a new one.</span>
      </div>
      <div className='step1-board-fee'>
        <div className='step1-board-fee-inside'>
          <div className='account-title'>
            <span className='account-name'>{`{name} Stripe Account`}</span>
            <span className='account-email'>{`{email}`}</span>
          </div>
          <div className='account-field-right'>
            <span>Connected</span>
            <div className='account-icon'>
              <i className=''></i>
            </div>
          </div>
        </div>
      </div>
      <button className='step1-board-button'>
        <span className='step1-text-button'>Continue</span>
      </button>
      <a href='#' className='step1-bottom-link'>
        <span className='step1-bottom-text'>Find out more about Client Billing</span>
        
      </a>
    </div>
  )
}

export default Result;