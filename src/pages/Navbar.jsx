import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='py-4'>
      <Link to='/'>
        <h2 className='fw-bold text-xl text-violet-500'>Foodie</h2>
      </Link>
    </div>
  )
}

export default Navbar
