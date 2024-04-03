import React from 'react'
import { Outlet } from 'react-router-dom'
import Nabvar from './Nabvar'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='container-fluid'>
        <div className='navbar container'>
            <Nabvar />
        </div>
        <div className="body container">
            <Outlet />
        </div>
        <div className="footer container">
            <Footer />
        </div>
    </div>
  )
}

export default Layout