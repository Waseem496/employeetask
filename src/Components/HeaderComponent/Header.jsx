import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
        <div className='title'>
         <p>Employee Tasks</p>
         </div>
        <div className='container'>
        
        <Link to='/' className='link'>CREATE</Link>
        <Link to='/view' className='link'>VIEW</Link>
        
        </div>
    </div>
  )
}

export default Header