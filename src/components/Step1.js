import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Step1 = ({ setAlertShow, setShowStep2, setShowStep1, setShowHeader }) => {
  const handleClick = () => {
    setAlertShow(true);
    setShowStep2(true);
    setShowStep1(false);
    setShowHeader(false);
  }

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
          <span className='step1-fee-text'>Transaction Fee</span>
          <span className='step1-fee-percent'>5%</span>

          {/* // Below belongs to Landing.js */}
          {/* <div className='account-title'>
            <span className='account-name'>{`{name} Stripe Account`}</span>
            <span className='account-email'>{`{email}`}</span>
          </div>
          <div className='account-field-right'>
            <span>Connected</span>
            <div className='account-icon'>
              <i className=''></i>
            </div>
          </div> */}
        </div>
      </div>
      <button className='step1-board-button' onClick={handleClick}>
        <span className='step1-text-button'>Get Started</span>

        {/* // Below belongs to Landing.js */}
        {/* <span className='step1-text-button'>Continue</span> */}
      </button>
      <a href='#' className='step1-bottom-link'>
        <span className='step1-bottom-text'>Find out more about Client Billing</span>
        
      </a>
    </div>
  )
}

export default Step1;