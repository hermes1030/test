import React, { useEffect } from 'react';

const Loading = ({ setShowLoading, setShowResult }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("asdf");
      setShowLoading(false);
      setShowResult(true);
    }, 3000);
  }, []);

  return (
    <div className='loading'> 
      <div className='loading-container'>
        <i className='snipping'>snipping</i>
        <span className='loading-heading'>Importing Stripe Configurations</span>
        <span className='loading-title'>Please wait while we are importing your Stripe configurations. It will only take a few seconds…</span>
      </div>
    </div>
  )
}

export default Loading;