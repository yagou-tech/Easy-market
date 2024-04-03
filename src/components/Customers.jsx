import React from 'react'
import Sidebar from './Sidebar'
import Produits from './Produits'

const Customers = () => {
  return (
    <div>
      <p className='text-start'><span className='fw-bold'>Acceuil</span> {'>'} Nos produits</p>
      <div className='row'>
        <div className='col-lg-2'><Sidebar /></div>
        <div className='col-lg-10'><Produits /></div>
      </div>
    </div>
  )
}

export default Customers