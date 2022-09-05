import React, { useState } from 'react';
import './Test.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Alert from './Alert';
import Navbar from './Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import arrow from '../assets/image/arrow-up-right-from-square.svg';
import AlertLeft from './AlertLeft';
import Loading from './Loading';
import Result from './Result';

const Test = () => {
  const [alertShow, setAlertShow] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showStep2, setShowStep2] = useState(false);
  const [showStep1, setShowStep1] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  return (
    <div className='container'>
      <div className='header'></div>
      {/* <AlertLeft /> */}
      <div className='main-board-container'>
        <div className='header-title'>
          <div className='left-title'>
            <div className='title-1'>
              Client Billing
            </div>
            { showHeader && 
              <div className='title-2'>
                {`–  A full payment solution for your business, free with {company}`}
              </div>
            }
          </div>
          <div className='right-items'>
            <div className='right-text'>
              Docs
            </div>
            <i icon="fa-thin fa-arrow-up-right-from-square"></i>
          </div>
        </div>
        { alertShow && <Alert /> }
        { showNavbar && <Navbar /> }
        <div className='board'>
          <div className='main-style'>
            <div className='board-title'>
              <span className='start-title'>Getting Started</span>
              <div className='end-step'>
                <span className='step'>Step 1 of 2</span>
                <div className='pointer-1'></div>
                <div className='pointer-2'></div>
              </div>
            </div>
            <div className='board-container'>
              { showStep1 && 
                <Step1 
                  setShowHeader={setShowHeader}
                  setAlertShow={setAlertShow}
                  setShowStep1={setShowStep1} 
                  setShowStep2={setShowStep2}
                /> 
              }
              { showStep2 && 
                <Step2
                  setShowLoading={setShowLoading}
                  setShowNavbar={setShowNavbar}
                  setShowStep2={setShowStep2}
                /> 
              }
              { showLoading && 
                <Loading
                  setShowLoading={setShowLoading}
                  setShowResult={setShowResult}
                />
              }
              { 
                showResult && 
                <Result />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test;