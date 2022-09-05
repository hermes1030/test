import React from 'react';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-items'>
        <a href="#" className='nav-overview'>Overview</a>
        <span className='nav-divider'>|</span>
        <a href="#" className='nav-clients'><i className="icon-clients"></i>Clients</a> 
        <a href="#" className='nav-products'><i className="icon-products"></i>Products & Services</a> 
        <a href="#" className='nav-invoices'><i className="icon-invoices"></i>Invoices</a>
      </div>
      <button className="nav-btn"><i className="fa fa-home"></i>Configure</button>
    </div>
  )
}

export default Navbar;