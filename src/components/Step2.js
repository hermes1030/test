import React from 'react'

const Step2 = ({ setShowLoading, setShowNavbar, setShowStep2 }) => {
  const handleClick = () => {
    setShowLoading(true);
    setShowNavbar(true);
    setShowStep2(false);
  }

  return (
    <>
      <div className='back'>
        <div className='back-icon-square'>
          {/* // This field is icon- */}
        </div>
        <span className='back-title'>Back</span>
      </div>
      <span className='step2-text-1'>Choose Billing Currency</span>
      <span className='step2-text-2'>Select the currency you want to use to bill your clients.</span>
      <div className='step2-box'>
        <span className='step2-box-icon'>!</span>
        <span className='step2-box-text'>Note: Billing currency cannot be changed in the future. Please make sure you select the correct currency.</span>
      </div>
      <select className='step2-selectBox'>
        <option className='select-title'>USD - United States Dollars</option>
      </select>
      <label className="step2-checkBox">
        <input type="checkbox" />
        <span className="step2-checkBox-title">I am aware that I cannot change currency later</span>
      </label>
      <button className='step2-button' onClick={handleClick} >Finish Setup</button>
    </>
  )
}

export default Step2;